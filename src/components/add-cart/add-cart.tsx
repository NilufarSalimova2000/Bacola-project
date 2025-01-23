"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toggleAmount, addCart } from "@/redux/reducers/product-reducer";
import { ProductType } from "@/service/types/type";

export const AddCart = ({ id, price, image, title }: ProductType) => {
    const dispatch = useDispatch();
    const numericPrice = typeof price === "string" ? Number(price) : price;

    const cartItem = useSelector((state: any) =>
        state.product.product_list.find((item: any) => item.id === id)
    );

    const handleAddToCart = () => {
        dispatch(addCart({ id, price: numericPrice, image, title }));
    };

    const handleIncrement = () => {
        dispatch(toggleAmount({ id, type: "increment" }));
    };

    const handleDecrement = () => {
        dispatch(toggleAmount({ id, type: "decrement" }));
    };

    return (
        <div className="flex items-center gap-4">
            {cartItem ? (
                <div className="flex items-center">
                    <Button
                        onClick={handleDecrement}
                        className="w-[44px] h-[44px] bg-[#EDEEF5] rounded-[100%] text-lg font-semibold text-[#202435] hover:bg-[#FFCD01]"
                    >
                        −
                    </Button>
                    <span className="px-4 py-1 text-lg">{cartItem.user_count}</span>
                    <Button
                        onClick={handleIncrement}
                        className="w-[44px] h-[44px] bg-[#EDEEF5] rounded-[100%] text-lg font-semibold text-[#202435] hover:bg-[#FFCD01]"
                    >
                        +
                    </Button>
                </div>
            ) : (
                <Button
                    onClick={handleAddToCart}
                    className="px-8 py-2 text-white bg-[#233A95] rounded-[30px] hover:bg-blue-800 transition-colors"
                >
                    Add to cart
                </Button>
            )}
        </div>
    );
};