import { MailIcon } from "@/assets/icons/mail-icon";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import coupon from "../../assets/images/coupon.webp"

export const Subscribe = () => {
    return (
        <div className="bg-[#233A95]">
            <div className="container">
                <div className="flex justify-between items-end">
                    <div className="py-[70px] max-w-[470px]">
                        <p className="text-[16px] mb-[8px] text-[#fff]">$20 discount for your first order</p>
                        <h3 className="text-[#fff] text-[26px] mb-[15px] font-semibold">Join our newsletter and get...</h3>
                        <p className="max-w-[300px] mb-[25px] text-[13px] text-[#909BC9] font-medium">Join our email subscription now to get updates on promotions and coupons.</p>
                        <form className="flex w-full bg-white p-2 rounded shadow-inner">
                            <div className="flex items-center pl-3">
                                <span className="text-[#C2C2D3]"><MailIcon /></span>
                            </div>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-2 text-gray-700 bg-white border border-transparent rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <Button
                                type="submit"
                                className="px-6  text-white bg-[#233A95] rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                Subscribe
                            </Button>
                        </form>
                    </div>
                    <div>
                        <Image width={510} height={277} src={coupon} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}