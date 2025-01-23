import { Categorytype } from "@/service/types/type";
import Image from "next/image";
import React from "react";

export const CategoryCard = ({id, image, title} : Categorytype) => {
    return (
        <li className="p-[20px] flex items-center gap-[10px] w-[234px] border-[1px] rounded">
            <Image width={70} height={70} src={image} alt="image"/>
            <h3 className="text-[14px] font-semibold">{title}</h3>
        </li>
    )
}