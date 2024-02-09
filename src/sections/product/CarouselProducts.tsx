import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { X } from "lucide-react"
import { _products } from "./_data"
import Link from "next/link"




export function CarouselProducts() {

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      console.log("current")
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
       <div className="py-2 text-left text-xs text-muted-foreground">
        Slide {current} of {count}
      </div>
   
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
      setApi={setApi}
    >
      <CarouselContent>
        {_products.map((product, index) => (
          <CarouselItem key={index} className="pl-1 lg:basis-1/3 md:basis-1/2 basis-[100%]">
            <div className="p-1">
            <Link href='shopping/product'>
            <Card className="rounded-none ">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                <img src={product.url} alt="" className="object-cover h-full" />
                </CardContent>
            </Card>
            </Link>
            </div>
        </CarouselItem>
        ))
        }
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
      
    </Carousel>
    </div>
  )
}
