// "use client"
// import { ProductType } from "@/service/types/type";
// import Image from "next/image";
// import React from "react";
// import { Button } from "../ui/button";
// import { LikeIcon } from "@/assets/icons/like-icon";
// import { MaximizeIcon } from "@/assets/icons/maximize-icon";
// import Link from "next/link";
// import { useDispatch } from "react-redux";
// import { addCart } from "@/redux/reducers/product-reducer";

// export const NewProduct = ({ id, image, title, price }: ProductType) => {
//     const dispatch = useDispatch();
//     const numericPrice = typeof price === "string" ? Number(price) : price;

//     const handleAddToCart = () => {
//         dispatch(addCart({ id, price: numericPrice, image, title}));
//     };
    
//     return (
//         <li className="group w-[217px] relative overflow-hidden transition-all transform flex flex-col justify-between border-[#EDEEF5] hover:border-[#D5D5E0] hover:rounded-[10px] border-[1px] p-[20px] h-[335px] hover:h-[375px]">
//             <div>
//                 <div className="relative">
//                     <Link href={`/product-detail/${id}`}>
//                         <Image width={177} height={158} src={image} alt="image" />
//                     </Link>
//                     <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 flex flex-col space-y-2 transition-opacity duration-300">
//                         <Button className="bg-white w-[35px] h-[35px] p-2 rounded-[50%] shadow-md hover:bg-[#233A95] text-[#000] hover:text-[#fff]">
//                             <LikeIcon />
//                         </Button>
//                         <Button className="bg-white w-[35px] h-[35px] p-2 rounded-[50%] shadow-md hover:bg-[#233A95] text-[#000] hover:text-[#fff]">
//                             <MaximizeIcon />
//                         </Button>
//                     </div>
//                 </div>
//                 <Link href={`/product-detail/${id}`}>
//                     <h3 className="text-[14px] text-[#202435] font-semibold mb-[10px]">
//                         {title}
//                     </h3>
//                 </Link>
//                 <p className="text-[11px] text-[#0EBC5C] font-semibold uppercase mb-[10px]">
//                     In Stock
//                 </p>
//             </div>
//             <p className="text-[18px] text-[#D82250] font-medium mb-[10px]">
//                 {price} sum
//             </p>
//             <Button onClick={handleAddToCart} className="w-full rounded-[30px] bg-[#223993] hover:bg-[#223993] text-[#fff] transition duration-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4">
//                 Add to cart
//             </Button>
//         </li>


//     )
// }

"use client";
import { ProductType } from "@/service/types/type";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { LikeIcon } from "@/assets/icons/like-icon";
import { MaximizeIcon } from "@/assets/icons/maximize-icon";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addCart, toggleAmount } from "@/redux/reducers/product-reducer";
import { RootState } from "@/redux/store"; // RootState bilan Redux selector ishlatiladi

export const NewProduct = ({ id, image, title, price }: ProductType) => {
    const dispatch = useDispatch();
    const numericPrice = typeof price === "string" ? Number(price) : price;
    const { product_list } = useSelector((state: RootState) => state.product)

    // Redux orqali korzinkadagi mahsulotlarni tekshirish
    const isInCart = product_list.find((item) => item.id === id);

    const handleAddToCart = () => {
        dispatch(addCart({ id, price: numericPrice, image, title }));
    };

    const handleToggleAmount = (type: "increment" | "decrement") => {
        dispatch(toggleAmount({ id, type }));
    };

    return (
        <li className="group w-[217px] relative overflow-hidden transition-all transform flex flex-col justify-between border-[#EDEEF5] hover:border-[#D5D5E0] hover:rounded-[10px] border-[1px] p-[20px] h-[335px] hover:h-[375px]">
            <div>
                <div className="relative">
                    <Link href={`/product-detail/${id}`}>
                        <Image width={177} height={158} src={image} alt="image" />
                    </Link>
                    <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 flex flex-col space-y-2 transition-opacity duration-300">
                        <Button className="bg-white w-[35px] h-[35px] p-2 rounded-[50%] shadow-md hover:bg-[#233A95] text-[#000] hover:text-[#fff]">
                            <LikeIcon />
                        </Button>
                        <Button className="bg-white w-[35px] h-[35px] p-2 rounded-[50%] shadow-md hover:bg-[#233A95] text-[#000] hover:text-[#fff]">
                            <MaximizeIcon />
                        </Button>
                    </div>
                </div>
                <Link href={`/product-detail/${id}`}>
                    <h3 className="text-[14px] text-[#202435] font-semibold mb-[10px]">
                        {title}
                    </h3>
                </Link>
                <p className="text-[11px] text-[#0EBC5C] font-semibold uppercase mb-[10px]">
                    In Stock
                </p>
            </div>
            <p className="text-[18px] text-[#D82250] font-medium mb-[10px]">
                {price} sum
            </p>

            {/* Add to cart yoki + - tugmalari */}
            {isInCart ? (
                <div className="opacity-0 group-hover:opacity-100 flex justify-between items-center gap-2 transition-opacity duration-300">
                    <Button
                        onClick={() => handleToggleAmount("decrement")}
                        className="bg-[#ddd] rounded-full w-[35px] h-[35px] text-[#000] hover:bg-[#bbb]"
                    >
                        -
                    </Button>
                    <span className="text-[#202435] font-semibold">{isInCart.user_count}</span>
                    <Button
                        onClick={() => handleToggleAmount("increment")}
                        className="bg-[#ddd] rounded-full w-[35px] h-[35px] text-[#000] hover:bg-[#bbb]"
                    >
                        +
                    </Button>
                </div>
            ) : (
                <Button
                    onClick={handleAddToCart}
                    className="w-full rounded-[30px] bg-[#223993] hover:bg-[#223993] text-[#fff] transition duration-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4"
                >
                    Add to cart
                </Button>
            )}
        </li>
    );
};
