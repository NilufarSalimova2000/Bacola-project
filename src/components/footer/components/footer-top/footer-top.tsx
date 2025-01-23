import fetchWrapper from "@/config/fetch-wrapper";
import { CategoryType, Categorytype, SubcategoryType } from "@/service/types/type";
import React from "react";

export const FooterTop = async () => {
    const Category = await fetchWrapper<CategoryType>("/category", {
        next: { tags: ["category"] },
      });
    //   const SubCategory = await fetchWrapper<SubcategoryType[]>("/api/subcategory", {
    //     next: { tags: ["subcategory"] },
    //   });
    return (
        <div className="bg-[#F7F8FD] py-[100px]">
            <div className="container">
                <div>
                    <ul className="flex justify-between ">
                        {Category?.results.slice(0, 5).map((item: Categorytype) => (
                            <h3 className="w-[250px] font-semibold text-[15px] uppercase" key={item.id}>{item.title}</h3>
                        ))}
                        {/* <li>
                        {SubCategory?.results.map((item:any) => (
                            <h3 className="w-[220px]" key={item.id}>{item.title}</h3>
                        ))}
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}
