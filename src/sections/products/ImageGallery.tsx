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
import Link from 'next/link'


export default function ImageGallery() {

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
      <div className="mb-1 uppercase font-bold text-sm text-muted-foreground cursor-default">
        {"our latest design"} <span className="text-xs lowercase text-orange-500">{current} of {count}</span>
      </div>

       <Carousel className="w-full"  opts={{align: 'start'}} setApi={setApi}>
          <CarouselContent className="-ml-1 ">
            {_products.map((product, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 relative">
                <Link href='/shopping/regal'>
                  <Card className="rounded-none ">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <img src={product.url} alt="" className="flex object-cover h-[85vh]" />
                    </CardContent>
                  </Card>
                  </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
  )
}
