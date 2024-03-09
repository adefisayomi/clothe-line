import * as React from "react"
import { Card, CardContent } from "@/src/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/src/components/ui/carousel"
import { _products } from "./_data"
import Link from "next/link"
import { ProductTypes } from "@/sanity/schemaTypes/product"
import { Skeleton } from "@/src/components/ui/skeleton"
import { urlForImage } from "@/sanity/lib/image"




export default function CarouselProducts({product}: {product: ProductTypes}) {

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  return (
    <div>
       <div className="mb-1 uppercase font-bold text-xs cursor-default">
        { product && product?.name ? `"${product.name}: Slide ${current} of ${count}"` : 'loading...' }
      </div>

    <Carousel className="w-full" setApi={setApi}>
      {
        product && product?.images?.length! > 0 ? (
          <CarouselContent className="-ml-1 ">
            {product?.images!.map((image, index) => (
              <CarouselItem key={index} className="pl-1 lg:basis-1/4 md:basis-1/3 basis-[100%] ">
                <Link href={`/shopping/${product.slug?.current!}`}>
                  <div className="p-0">
                    <Card className="rounded-none">
                      <CardContent className="flex aspect-[2/3] items-center justify-center p-0">
                        <img src={urlForImage(image)} alt="" className="flex object-cover h-full w-full" />
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        ) : (
          <CarouselContent className="-ml-1 ">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 lg:basis-1/5 md:basis-1/3 basis-[100%] ">
                <div className="p-1">
                  <Card className="rounded-none">
                    <CardContent className="flex aspect-[2/3] items-center justify-center p-0">
                      <Skeleton className="w-full h-full rounded-none" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        )
      }
      

      <CarouselPrevious />
      <CarouselNext />
      
    </Carousel>
    </div>
  )
}
