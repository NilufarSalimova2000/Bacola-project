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

// export const Card = ({id, image, title, price }: ProductType) => {
//     const numericPrice = typeof price === "string" ? Number(price) : price;

//     const dispatch = useDispatch();

//     const handleAddToCart = () => {
//         dispatch(addCart({ id, price: numericPrice, image, title}));
//     };

//     return (
//         <div className="group w-[217px] h-[375px]  p-[20px] relative overflow-hidden transition-transform transform flex flex-col justify-between">
//             <div>
//                 <div className="relative">
//                     <Link href={`/product-detail/${id}`}><Image width={177} height={158} src={image} alt="image" /></Link>
//                     <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 flex flex-col space-y-2 transition-opacity duration-300">
//                         <Button className="bg-white w-[35px] h-[35px] p-2 rounded-[50%] shadow-md hover:bg-[#233A95] text-[#000] hover:text-[#fff]"><LikeIcon /></Button>
//                         <Button className="bg-white w-[35px] h-[35px] p-2 rounded-[50%] shadow-md hover:bg-[#233A95] text-[#000] hover:text-[#fff]"><MaximizeIcon /></Button>
//                     </div>
//                 </div>
//                 <Link href={`/product-detail/${id}`}><h3 className="text-[14px] text-[#202435] font-semibold mb-[10px]">{title}</h3></Link>
//                 <p className="text-[11px] text-[#0EBC5C] font-semibold uppercase mb-[10px]">In Stock</p>
                
//             </div>
//             <p className="text-[18px] text-[#D82250] font-medium mb-[10px]">{price} sum</p>
//            <Button className="w-full rounded-[30px] bg-[#fff] border-[1px] border-[#50C9FA] text-[#50C9FA] hover:bg-[#50C9FA] hover:text-[#fff] transition duration-300" type="submit" variant={"default"} onClick={handleAddToCart}>Add to cart</Button>
//         </div>

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
import { RootState } from "@/redux/store";

export const Card = ({ id, image, title, price }: ProductType) => {
  const numericPrice = typeof price === "string" ? Number(price) : price;

  const dispatch = useDispatch();
  const { product_list } = useSelector((state: RootState) => state.product);

  const handleAddToCart = () => {
    dispatch(addCart({ id, price: numericPrice, image, title }));
  };

  const handleAmountChange = (type: "increment" | "decrement") => {
    dispatch(toggleAmount({ id, type }));
  };

  const isInCart = product_list.find((item) => item.id === id);

  return (
    <div className="group w-[217px] h-[375px]  p-[20px] relative overflow-hidden transition-transform transform flex flex-col justify-between">
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
          <h3 className="text-[14px] text-[#202435] font-semibold mb-[10px]">{title}</h3>
        </Link>
        <p className="text-[11px] text-[#0EBC5C] font-semibold uppercase mb-[10px]">In Stock</p>
      </div>
      <p className="text-[18px] text-[#D82250] font-medium mb-[10px]">{price} sum</p>
      {isInCart ? (
        <div className="flex items-center justify-between">
          <Button
            className="w-[40px] h-[40px] bg-[#fff] border-[1px] border-[#50C9FA] text-[#50C9FA] hover:bg-[#50C9FA] hover:text-[#fff] transition duration-300"
            onClick={() => handleAmountChange("decrement")}
          >
            -
          </Button>
          <p className="text-[16px] font-semibold">{isInCart.user_count}</p>
          <Button
            className="w-[40px] h-[40px] bg-[#fff] border-[1px] border-[#50C9FA] text-[#50C9FA] hover:bg-[#50C9FA] hover:text-[#fff] transition duration-300"
            onClick={() => handleAmountChange("increment")}
          >
            +
          </Button>
        </div>
      ) : (
        <Button
          className="w-full rounded-[30px] bg-[#fff] border-[1px] border-[#50C9FA] text-[#50C9FA] hover:bg-[#50C9FA] hover:text-[#fff] transition duration-300"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      )}
    </div>
  );
};

