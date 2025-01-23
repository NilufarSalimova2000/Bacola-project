import { ProductType } from "@/service/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const TrendingProduct = ({ id, image, title, price }: ProductType) => {
    return (
        <li className="p-[15px] flex items-center gap-[10px]">
            <div className="w-[70px] h-[63px]">
                <Link href={`/product-detail/${id}`}><Image width={70} height={63} src={image} alt="image" /></Link>
            </div>
            <div>
                <Link href={`/product-detail/${id}`}><h5 className="text-[14px] hover:text-[#233AA3] font-semibold mb-[10px]">{title}</h5></Link>
                <p className="text-[16px] text-[#D51243] font-medium">{price}SUM</p>
            </div>
        </li>
    )
}