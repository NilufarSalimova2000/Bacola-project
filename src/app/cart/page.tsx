"use client"
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartProduct } from "@/components/cart-product";
import { toggleAmount, deleteProduct, clearCart } from "@/redux/reducers/product-reducer";
import { RootState } from "@/redux/store";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const { product_list, totalPrice } = useSelector((state: RootState) => state.product);

  const dispatch = useDispatch();

  const handleAmountChange = (id: number, type: "increment" | "decrement") => {
    dispatch(toggleAmount({ id, type }));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteProduct({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container py-[50px]">
      <h1 className="text-[24px] font-bold mb-[20px]">Shopping Cart</h1>
      <div className="flex justify-between items-start">
        <div className="w-[840px]">
          <div className="pb-[15px] border-b-[1px] flex gap-[20px]">
            <div className="w-[100px]"></div>
            <p className="text-[13px] font-semibold text-[#71778E] w-[210px]">Product</p>
            <p className="text-[13px] font-semibold text-[#71778E] w-[145px]">Price</p>
            <p className="text-[13px] font-semibold text-[#71778E] w-[135px]">Quantity</p>
            <p className="text-[13px] font-semibold text-[#71778E]">Subtotal</p>
          </div>
          {product_list.length > 0 ? (
            <div className="rounded-sm">
              {product_list.map((product) => (
                <CartProduct
                  key={product.id}
                  {...product}
                  onIncrement={() => handleAmountChange(product.id, "increment")}
                  onDecrement={() => handleAmountChange(product.id, "decrement")}
                  onDelete={() => handleDelete(product.id)}
                />
              ))}
              <div className="mt-[20px] text-right">
                <button
                  className="bg-[#233A95] text-white px-4 py-2 rounded-sm mt-4"
                  onClick={handleClearCart}
                >
                  Remove All
                </button>
              </div>
            </div>
          ) : (
            <p className="text-[18px] text-[#202435]">Your cart is empty.</p>
          )}
        </div>
        <div className="w-[320px] p-[20px] border-[1px] rounded">
          <h2 className="uppercase text-[16px] pb-[15px] border-b-[1px] font-bold">Cart totals</h2>
          <p className="text-[18px] font-semibold py-[20px] border-b-[1px] mb-[10px]">Total: {totalPrice} SUM</p>
          <Button className="bg-[#ED174A] w-full">Proceed to checkout</Button>
        </div>
      </div>

    </div>
  );
};

export default Cart;
