import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface CartProductProps {
  id: number;
  image: string;
  title: string;
  price: number;
  user_count?: number | undefined;
  onIncrement: () => void;
  onDecrement: () => void;
  onDelete: () => void;
}

export const CartProduct: React.FC<CartProductProps> = ({ image, title, price, user_count, onIncrement, onDecrement, onDelete }) => {
  const subtotal = user_count ? user_count * price : 0;
  return (
    <div className="flex gap-[20px] items-center py-[15px] border-b-[1px]">
      <div className="w-[110px]">
        <Image width={70} height={70} src={image} alt={title} className="object-cover" />
      </div>
      <h3 className="text-[14px] font-medium w-[220px]">{title}</h3>
      <p className="text-[14px] text-[#7186A0] font-medium w-[150px]">{price} SUM</p>
      <div className="flex items-center w-[140px]">
        <Button className="w-[30px] h-[30px] rounded-[100%] bg-[#EDEEF5] text-[#000]" onClick={onDecrement}>
          −
        </Button>
        <span className="px-4">{user_count}</span>
        <Button className="w-[30px] h-[30px] rounded-[100%] bg-[#EDEEF5] text-[#000]" onClick={onIncrement}>
          +
        </Button>
      </div>
      <p className="text-[14px] font-medium w-[150px]">{subtotal} SUM</p>
      <button className="font-bold" onClick={onDelete}>
        X
      </button>
    </div>
  );
};
