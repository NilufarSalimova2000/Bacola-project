"use client"
import React from "react";
import { SearchIcon } from "@/assets/icons/serach-icon";
import { UserIcon } from "@/assets/icons/user-icon";
import { CartIcon } from "@/assets/icons/cart-icon";
import Link from "next/link";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export const HeaderSearch = () => {
    const { totalPrice, count } = useSelector((state: RootState) => state.product);
    console.log(totalPrice);
    
    return (
        <div className="flex gap-[30px] items-center justify-between">
            <div className="relative w-full max-w-[600px]">
                <input
                    className="bg-[#F3F4F7] py-[16px] px-[40px] rounded w-full"
                    type="text"
                    placeholder="Search for products..."
                />
                <div className="absolute right-[15px] top-1/2 transform -translate-y-1/2">
                    <SearchIcon />
                </div>
            </div>
            <div className="flex items-center gap-[12px]">
                <Link href={"/profile"}>
                    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[100%] border-[1px] border-[#E3E4E6]">
                        <UserIcon />
                    </div>
                </Link>
                <p className="text-[16px] text-[#202435] font-bold">{totalPrice} SUM</p>
                <Link href={"/cart"}>
                    <div className="flex items-center justify-center w-[42px] h-[42px] rounded-[100%] bg-[#FFF1EE] relative">
                    <CartIcon />
                        {count > 0 && (
                            <span className="absolute -top-[5px] -right-[5px] bg-red-500 text-white text-[12px] font-bold w-[20px] h-[20px] rounded-full flex items-center justify-center">
                                {count}
                            </span>
                        )}
                    </div>

                </Link>
            </div>
        </div>
    )
}
