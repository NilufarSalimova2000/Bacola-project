import { Button } from "@/components/ui/button";
import fetchWrapper from "@/config/fetch-wrapper";
import { ProductType } from "@/service/types/type";
import Image from "next/image";

// Ma'lumotlarni olish uchun fetch funksiyasi
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
                    <div className="flex justify-between">
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
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center">
                                        <Button
                                            className="w-[44px] h-[44px] bg-[#EDEEF5] rounded-[100%] text-lg font-semibold text-[#202435] hover:bg-[#FFCD01]"
                                            // onClick={decreaseQuantity}
                                        >
                                            −
                                        </Button>
                                        <span className="px-4 py-1 text-lg">1</span>
                                        <Button
                                            className="w-[44px] h-[44px] bg-[#EDEEF5] rounded-[100%] text-lg font-semibold text-[#202435] hover:bg-[#FFCD01]"
                                            // onClick={increaseQuantity}
                                        >
                                            +
                                        </Button>
                                    </div>
                                    <Button className="px-8 py-2 text-white bg-[#233A95] rounded-[30px] hover:bg-blue-800 transition-colors">
                                        Add to cart
                                    </Button>
                                </div>
                            </div>
                            <Button className="text-[#71778E] rounded-[30px]" variant={"outline"}>ADD TO WISHLIST</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetail;
