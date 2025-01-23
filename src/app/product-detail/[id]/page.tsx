import { DeliveryIcon } from "@/assets/icons/delivery-icon";
import { DollarIcon } from "@/assets/icons/dollar-icon";
import { LikeIcon } from "@/assets/icons/like-icon";
import { AddCart } from "@/components/add-cart";
import { Button } from "@/components/ui/button";
import fetchWrapper from "@/config/fetch-wrapper";
import { ProductType } from "@/service/types/type";
import Image from "next/image";

async function getProduct(id: string): Promise<ProductType> {
    const detail = await fetchWrapper<ProductType>(`/product/${id}`, {
        next: { tags: ["products"] },
    });
    return detail;
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
    const product = await getProduct(params.id);

    return (
        <div className="bg-[#F7F8FD] py-[50px]">
            <div className="container">
                <div className="bg-[#fff] rounded-sm py-[40px] px-[40px]">
                    <h1 className="text-[24px] font-bold mb-[20px]">{product.title}</h1>
                    <div className="flex justify-between items-start">
                        <div>
                            <Image
                                width={436}
                                height={392}
                                src={product.image}
                                alt={product.title}
                                className="mb-[20px] object-cover"
                            />
                        </div>
                        <div className="w-[308px]">
                            <p className="text-[26px] font-semibold text-[#D51243] mb-[20px]">{product.price} SUM</p>
                            <p className="mb-[20px]">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>
                            <div className="mb-[30px]">
                                {/* AddCart component chaqiriladi */}
                                <AddCart id={product.id} title={product.title} price={product.price} image={product.image} />
                            </div>
                            <Button className="text-[#71778E] rounded-[30px]" variant={"outline"}>
                                <LikeIcon /> ADD TO WISHLIST
                            </Button>
                        </div>
                        <div className="w-[260px] p-[30px] rounded bg-[#F7F8FD]">
                            <div className="flex items-center gap-4 mb-[30px]">
                                <DeliveryIcon />
                                <p className="text-[12px]">Free Shipping apply to all orders over $100</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <DollarIcon />
                                <p className="text-[12px]">1 Day Returns if you change your mind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
