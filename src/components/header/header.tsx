import React from "react";
import { HeaderTop } from "./components/header-top";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/images/logo.jpg"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "../ui/dropdown-menu";
import fetchWrapper from "@/config/fetch-wrapper";
import { CategoryType, Categorytype } from "@/service/types/type";
import { HeaderSearch } from "./components/header-search";

export const Header = async () => {
    const Category = await fetchWrapper<CategoryType>("/category", {
        next: { tags: ["category"] },
      });
    return (
        <header className="border-b-[1px] border-b-[#E3E4E6] pb-[20px]">
            <HeaderTop />
            <div className="container">
                <div className="py-[30px] flex items-center gap-[100px]">
                    <Link href={"/"}>
                        <Image className="w-[164px] h-[44px]" src={Logo} alt="logo" />
                    </Link>
                    <div className="flex-grow"><HeaderSearch /></div>
                </div>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="w-[214px] bg-[#2BBEF9] rounded-[50px] text-[#fff] text-[15px] py-[15px] border-none outline-none">ALL CATEGORIES</DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[250px] mt-[16px] left-0 rounded-none">
                            <DropdownMenuSeparator />
                            {Category?.results?.map((item:any) => (
                                <Link key={item.id} href={"/category"}><DropdownMenuItem>{item.title}</DropdownMenuItem></Link>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}