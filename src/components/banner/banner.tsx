import { BannerType } from "@/service/types/type";
import Image from "next/image";
import React from "react";

export const Banner = ({image}:BannerType) => {
    return (
        <div>
            <Image quality={100} width={870} height={486} src={image} alt="image" />
        </div>
    )
}