import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import productReducer from "./reducers/product-reducer";
import { addCart, deleteProduct, totalCount } from "./reducers/product-reducer";
import { loadState, saveState } from "@/service/storage";

const totalCountMiddleware = createListenerMiddleware();

interface ProductState {
  product_list: Product[];
  count: number;
  totalPrice: number;
}
interface Product {
  id: number;
  price: number;
  image: string;
  user_price?: number;
  user_count?: number;
}

totalCountMiddleware.startListening({
  matcher: isAnyOf(addCart, deleteProduct),
  effect: (action, api) => {
    api.dispatch(totalCount());
  },
});

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
  preloadedState: {
    product: loadState("products"),
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().prepend(totalCountMiddleware.middleware),
});

// Subscribe to store updates to save the state
store.subscribe(() => {
  saveState("products", store.getState().product);
});

// Define RootState and AppDispatch types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
