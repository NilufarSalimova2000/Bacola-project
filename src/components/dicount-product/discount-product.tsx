"use client";
import { ProductType } from '@/service/types/type';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import * as Progress from "@radix-ui/react-progress";
import Link from 'next/link';

export const DiscountProduct = ({ id, image, title, price }: ProductType) => {

    // O'zgaruvchi vaqtingiz
    const initialTime = 19200; // 5 soat 20 minutni sekundlarda ifodalash
    const [timeLeft, setTimeLeft] = useState(initialTime);

    // Timer funksiyasi
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Qolgan vaqtni formatlash funksiyasi
    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return { hrs, mins, secs };
    };

    // Progres barni hisoblash
    const progressPercentage = (timeLeft / initialTime) * 100;
    const { hrs, mins, secs } = formatTime(timeLeft);

    return (
        <Link href={`/product-detail/${id}`}>
            <div className='flex gap-[50px]'>
                <div className='flex relative'>
                    <span className='text-[#fff] w-[60px] h-[60px] rounded-[100%] bg-[#ED174A] flex items-center justify-center text-[20px] font-semibold absolute left-[8px]'>19%</span>
                    <Image className='ml-[30px]' src={image} alt='image' width={120} height={100} />
                </div>
                <div>
                    <p className="text-[#D51243] font-bold mb-[5px]">{price} SUM</p>
                    <h2 className="text-[18px] font-semibold mb-[15px]">{title}</h2>
                    <div className="mt-[20px]">
                        <Progress.Root className="w-full h-2 bg-gray-200 rounded mb-[15px]">
                            <Progress.Indicator
                                className="h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded"
                                style={{ width: `${progressPercentage}%` }}
                            />
                        </Progress.Root>
                        <div className="mt-2 flex items-center space-x-2">
                            <div className="flex items-center space-x-2">
                                <div className="px-3 py-2 bg-[#EDEEF5] rounded">
                                    <p className="text-center font-semibold">{hrs.toString().padStart(2, '0')}</p>
                                </div>
                                <span>:</span>
                                <div className="px-3 py-2 bg-[#EDEEF5] rounded">
                                    <p className="ext-center font-semibold">{mins.toString().padStart(2, '0')}</p>
                                </div>
                                <span>:</span>
                                <div className="px-3 py-2 bg-[#EDEEF5] rounded">
                                    <p className="text-center font-semibold">{secs.toString().padStart(2, '0')}</p>
                                </div>
                            </div>
                            <p>Remains until the end of the offer</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
