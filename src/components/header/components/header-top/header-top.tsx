import React from "react";
import Icon from "../../../../assets/images/header-top.png"
import Image from "next/image";

export const HeaderTop = () => {
    return (
        <div className="py-[15px] border-b-[1px] border-b-[#E3E4E6]">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex gap-[15px]">
                        <a href="#" className="text-[12px] text-[#3E445E] hover:text-[#38C5FA] transition duration-300">About Us</a>
                        <a href="#" className="text-[12px] text-[#3E445E] hover:text-[#38C5FA] transition duration-300">My account</a>
                        <a href="#" className="text-[12px] text-[#3E445E] hover:text-[#38C5FA] transition duration-300">Wishlist</a>
                        <a href="#" className="text-[12px] text-[#3E445E] hover:text-[#38C5FA] transition duration-300">Order Tracking</a>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <Image src={Icon} alt="icon" />
                        <p className="text-[12px] text-[#3E445E]">100% Secure delivery without contacting the courier</p>
                    </div>
                    <p className="text-[12px] text-[#3E445E]">Need help? Call Us: <a href="#" className="text-[14px] font-semibold text-[#38C5FA]">+ 99894 427 10 21</a></p>
                </div>
            </div>
        </div>
    )
}