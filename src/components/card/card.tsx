import { ProductType } from "@/service/types/type";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { LikeIcon } from "@/assets/icons/like-icon";
import { MaximizeIcon } from "@/assets/icons/maximize-icon";
import Link from "next/link";

export const Card = ({id, image, title, price }: ProductType) => {
    return (
        // <div className="w-[217px] border-[1px] rounded p-[20px]">
        //     <Image width={177} height={158} src={image} alt="image" />
        //     <h3 className="text-[14px] text-[#202435] font-semibold mb-[10px]">{title}</h3>
        //     <p className="text-[18px] text-[#D82250] font-medium mb-[10px]">{price} sum</p>
        //     <Button className="w-full rounded-[30px] bg-[#fff] border-[1px] border-[#50C9FA] text-[#50C9FA] hover:bg-[#50C9FA] hover:text-[#fff] transition duration-300" type="submit" variant={"default"}>Add to cart</Button>
        // </div>
        <div className="group w-[217px] h-[360px] border-[1px] rounded p-[20px] relative overflow-hidden transition-transform transform shadow-2xl flex flex-col justify-between">
            <div>
                <div className="relative">
                    <Link href={`/product-detail/${id}`}><Image width={177} height={158} src={image} alt="image" /></Link>
                    <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 flex flex-col space-y-2 transition-opacity duration-300">
                        <Button className="bg-white w-[35px] h-[35px] p-2 rounded-[50%] shadow-md hover:bg-[#233A95] text-[#000] hover:text-[#fff]"><LikeIcon /></Button>
                        <Button className="bg-white w-[35px] h-[35px] p-2 rounded-[50%] shadow-md hover:bg-[#233A95] text-[#000] hover:text-[#fff]"><MaximizeIcon /></Button>
                    </div>
                </div>
                <Link href={`/product-detail/${id}`}><h3 className="text-[14px] text-[#202435] font-semibold mb-[10px]">{title}</h3></Link>
                
            </div>
            <p className="text-[18px] text-[#D82250] font-medium mb-[10px]">{price} sum</p>
            <Button className="w-full rounded-[30px] bg-[#fff] border-[1px] border-[#50C9FA] text-[#50C9FA] hover:bg-[#50C9FA] hover:text-[#fff] transition duration-300" type="submit" variant={"default"}>Add to cart</Button>
        </div>

    )
}