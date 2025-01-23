import { Banner } from "@/components/banner";
import fetchWrapper from "@/config/fetch-wrapper";
import { BannerDataType, BannerType, CategoryType, Categorytype, ProductDataType, ProductType } from "@/service/types/type";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/card";
import ReklamaImage from "../assets/images/reklama.jpg"
import ReklamaImage2 from "../assets/images/reklama2.jpg"
import Image from "next/image";
import Image2 from "../assets/images/banner-box2.webp"
import AvatarImage from "../assets/images/avatar.webp"
import { DiscountProduct } from "@/components/dicount-product";
import { DownloadIcon } from "@/assets/icons/download-icon";
import { OrderIcon } from "@/assets/icons/order-icon";
import { TimeIcon } from "@/assets/icons/time-icon";
import { TrendingProduct } from "@/components/trending-product";
import { NewProduct } from "@/components/new-product";
import BannerImage from "../assets/images/banner.png"
import BannerImage2 from "../assets/images/banner2.png"
import { CategoryCard } from "@/components/category-card";

export default async function Home() {
  const Bannerdata = await fetchWrapper<BannerDataType>("/banner", {
    next: { tags: ["banners"] },
  });
  const Productdata = await fetchWrapper<ProductDataType>("/product", {
    next: { tags: ["products"] },
  });
  const Categorydata = await fetchWrapper<CategoryType>("/category", {
    next: { tags: ["category"] },
  });
  return (
    <div className="container">
      <div className="py-[30px] flex">
        <div className="w-[600px]"></div>
        <div>
          <Carousel>
            <CarouselContent>
              {Bannerdata?.results?.map((item: BannerType) => (
                <CarouselItem key={item.id}>
                  <Banner {...item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="py-[30px] flex gap-[20px]">
        <div className="w-[280px] rounded h-[403px]">
          <Image className="rounded" src={ReklamaImage2} alt="image" width={280} height={403} />
        </div>
        <div>
          <h2 className="text-[20px] mb-[20px] font-medium">BEST SELLERS</h2>
          <Carousel opts={{
            align: "start"
          }} className="w-[880px] rounded relative">
            <CarouselContent>
              {Productdata?.results?.map((item: ProductType) => (
                <CarouselItem className="basis-1/4 pl-[0] border-[#EDEEF5] border-[1px]" key={item.id}><Card  {...item} /></CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-14px]" />
            <CarouselNext className="absolute right-[-14px]" />
          </Carousel>
        </div>
      </div>
      <div className="py-[30px] flex items-start gap-[20px]">
        <div className="w-[280px]">
          <div className="mb-[50px]">
            <Image src={ReklamaImage} alt="image" width={280} height={403} />
          </div>
          <ul className="border-[1px] rounded mb-[40px]">
            <li className="p-[20px] border-b-[1px] flex items-center gap-[20px] text-[#545256]">
              <DownloadIcon />
              <p className="text-[12px] text-[#2E2735]">Download the Bacola App to your Phone.</p>
            </li>
            <li className="p-[20px] border-b-[1px] flex items-center gap-[20px] text-[#545256]">
              <OrderIcon />
              <p className="text-[12px] text-[#2E2735]">Order now so you dont miss the opportunities.</p>
            </li>
            <li className="p-[20px] flex items-center gap-[20px] text-[#545256]">
              <TimeIcon />
              <p className="text-[12px] text-[#2E2735]">Your order will arrive at your door in 15 minutes.</p>
            </li>
          </ul>
          <h3 className="uppercase text-[15px] font-semibold mb-[20px]">Trending Products</h3>
          <ul className="border-[1px] rounded mb-[40px]">
            {Productdata?.results?.slice(1, 5).map((item: ProductType) => (
              <TrendingProduct key={item.id}  {...item} />
            ))}
          </ul>
          <h3 className="uppercase text-[15px] font-semibold mb-[20px]">Customer Comment</h3>
          <div className="bg-[#FFFBEC] rounded p-[30px]">
            <h4 className="text-[14px] mb-[8px] font-semibold">The Best Marketplace</h4>
            <p className="text-[13px] text-[#71779D] mb-[50px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
            <div className="flex items-center gap-[15px]">
              <Image width={50} height={50} className="rounded-[100%]" src={AvatarImage} alt="image" />
              <div>
                <h4 className="text-[14px] font-semibold">Tina Mcdonnell</h4>
                <p className="text-[#71779D] text-[12px]">Sales Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-[8px] bg-[#F8EFEA] flex items-center gap-[40px] mb-[30px]">
            <div className="ml-[50px]">
              <p className="text-[#9B9FBB]">Always Taking Care</p>
              <p className="text-[#71778E] font-bold text-[18px]">In store or online health & safety is our top priority.</p>
            </div>
            <div>
              <Image src={Image2} alt="image" />
            </div>
          </div>
          <div className="mb-[30px]">
            <h3 className="text-[20px] text-[#202435] font-semibold">HOT PRODUCT FOR
              <span className="ml-[5px] text-[#F0174A]">
                THIS WEEK
              </span>
            </h3>
            <p className="text-[#A1A3B9] mb-[20px] text-[12px]">Dont miss this opportunity at a special discount just for this week.</p>
            <div className="border-[1px] border-[#F0174A] rounded-[8px] p-[30px]">
              {Productdata?.results[0] && (
                <DiscountProduct key={Productdata.results[0].id} {...Productdata.results[0]} />
              )}
            </div>
          </div>
          <div className="mb-[50px]">
            <h3 className="text-[20px] text-[#202435] font-semibold">NEW PRODUCTS</h3>
            <p className="text-[#A1A3B9] mb-[20px] text-[12px]">New products with updated stocks.</p>
            <ul className="grid grid-cols-4">
            {Productdata?.results?.map((item: ProductType) => (
              <NewProduct key={item.id}  {...item} />
            ))}
            </ul>
          </div>
          <div className="flex justify-between">
            <Image width={420} height={230} src={BannerImage} alt="image"/>
            <Image width={420} height={230} src={BannerImage2} alt="image"/>
          </div>
        </div>
      </div>
      <div className="pb-[100px] ">
            <ul className="grid grid-cols-5">
            {Categorydata?.results?.map((item: Categorytype) => (
              <CategoryCard key={item.id}  {...item} />
            ))}
            </ul>
      </div>
    </div>
  );
}
