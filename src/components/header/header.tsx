"use client"
import React, { useEffect, useState } from "react";
import { HeaderTop } from "./components/header-top";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/images/logo.jpg"
import { SearchIcon } from "@/assets/icons/serach-icon";
import { UserIcon } from "@/assets/icons/user-icon";
import { CartIcon } from "@/assets/icons/cart-icon";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "../ui/dropdown-menu";
import fetchWrapper from "@/config/fetch-wrapper";
import { CategoryType } from "@/service/types/type";


export const Header = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await fetchWrapper<CategoryType[]>("/category"); // Backenddan kategoriya ma'lumotlarini olish
            setCategories(data); // Olingan ma'lumotlarni statega saqlash
        };

        fetchCategories();
    }, []);
    return (
        <header className="border-b-[1px] border-b-[#E3E4E6] pb-[20px]">
            <HeaderTop />
            <div className="container">
                <div className="py-[30px] flex items-center justify-between">
                    <Link href={"/"}>
                        <Image className="w-[164px] h-[44px]" src={Logo} alt="logo" />
                    </Link>
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
                        <p className="text-[16px] text-[#202435] font-bold">$ 0.00</p>
                        <Link href={"/cart"}>
                            <div className="flex items-center justify-center w-[42px] h-[42px] rounded-[100%] bg-[#FFF1EE]">
                                <CartIcon />
                            </div>

                        </Link>
                    </div>
                </div>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="w-[214px] bg-[#2BBEF9] rounded-[50px] text-[#fff] text-[15px] py-[15px] border-none outline-none">ALL CATEGORIES</DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[250px] mt-[16px] left-0 rounded-none">
                            <DropdownMenuSeparator />
                            {categories?.results?.map((category:any) => (
                                <Link href={"/category"}><DropdownMenuItem key={category.id}>{category.title}</DropdownMenuItem></Link>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}