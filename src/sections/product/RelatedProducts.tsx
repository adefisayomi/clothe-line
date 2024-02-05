import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"


export default function RelatedProducts ({products}: {products: {id: string, url: string}[]}) {
  return (
    <div>
        <h1 className="text-xs font-bold mb-1 uppercase">related products</h1>
        <Carousel className="w-full">
            <CarouselContent className="-ml-1">
                {products.length > 0 && products.map((product, index) => (
                <CarouselItem key={index} className="pl-1 lg:basis-1/5 md:basis-1/2 sm:basis-[100%]">
                    <div className="p-1">
                    <Link href='#'>
                    <Card className="rounded-none">
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                        <img src={product.url} alt="" />
                        </CardContent>
                    </Card>
                    </Link>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
    </div>
  )
}
