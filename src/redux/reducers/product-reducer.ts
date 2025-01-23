import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  price: number;
  image: string;
  title: string;
  user_price?: number;
  user_count?: number;
}

interface ProductState {
  product_list: Product[];
  count: number;
  totalPrice: number;
}

const initialState: ProductState = {
  product_list: [],
  count: 0,
  totalPrice: 0,
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Product>) => {
      const product = state.product_list.find((item) => item.id === action.payload.id);
      if (!product) {
        state.product_list.push({
          ...action.payload,
          user_price: Number(action.payload.price),
          user_count: 1,
        });
      }

      // Calculate total price
      state.totalPrice = state.product_list.reduce(
        (total, item) => total + Number(item.user_price ?? 0),
        0
      );
    },
    toggleAmount: (state, action: PayloadAction<{ id: number; type: "increment" | "decrement" }>) => {
      const newProductList = state.product_list.map((item) => {
        if (action.payload.type === "increment" && item.id === action.payload.id) {
          return {
            ...item,
            user_count: (item.user_count ?? 0) + 1,
            user_price: Number((item.user_count ?? 0) + 1) * Number(item.price),
          };
        } else if (action.payload.type === "decrement" && item.id === action.payload.id && (item.user_count ?? 0) > 1) {
          return {
            ...item,
            user_count: (item.user_count ?? 0) - 1,
            user_price: Number((item.user_count ?? 0) - 1) * Number(item.price),
          };
        }
        return item;
      });

      // Update product list and calculate total price
      state.product_list = newProductList;
      state.totalPrice = newProductList.reduce((total, item) => total + Number(item.user_price ?? 0), 0);
    },
    deleteProduct: (state, action: PayloadAction<{ id: number }>) => {
      const newProductList = state.product_list.filter((item) => item.id !== action.payload.id);

      // Update product list and calculate total price
      state.product_list = newProductList;
      state.totalPrice = newProductList.reduce((total, item) => total + Number(item.user_price ?? 0), 0);
    },
    clearCart: (state) => {
      state.product_list = [];
      state.totalPrice = 0;
      state.count = 0;
    },
    totalCount: (state) => {
      // Calculate total count
      state.count = state.product_list.length;
    },
  },
});

export default productReducer.reducer;
export const { addCart, toggleAmount, deleteProduct, clearCart, totalCount } = productReducer.actions;
