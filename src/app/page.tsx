import { Banner } from "@/components/banner";
import fetchWrapper from "@/config/fetch-wrapper";
import { BannerDataType, BannerType, ProductType } from "@/service/types/type";
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

export default async function Home() {
  const Bannerdata = await fetchWrapper<BannerType[]>("/banner", {
    next: { tags: ["banners"] },
  });
  const Productdata = await fetchWrapper<ProductType[]>("/product", {
    next: { tags: ["products"] },
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
          }} className="w-[880px]">
            <CarouselContent>
              {Productdata?.results?.map((item: ProductType) => (
                <CarouselItem className="basis-1/4" key={item.id}><Card  {...item} /></CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
