import { Banner } from "@/components/banner/banner";
import fetchWrapper from "@/config/fetch-wrapper";
import { BannerDataType, BannerType } from "@/service/types/type";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default async function Home() {
  const data = await fetchWrapper<BannerType[]>("/banner", {
    next: { tags: ["banners"] },
  });
  return (
    <div className="container">
      <div className="py-[30px] flex">
        <div className="w-[600px]"></div>
        <div className="">
          <Carousel>
            <CarouselContent>
              {data?.results?.map((item: BannerType) => (
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
    </div>
  );
}
