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
import Link from "next/link"
import { ProductTypes } from "@/sanity/schemaTypes/product"
import { Skeleton } from "@/src/components/ui/skeleton"
import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"




export default function ProductCarousel ({product}: {product: ProductTypes}) {

const [hovering, setHovering] = React.useState(false)

  return (
    <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
    >

    <Carousel className="w-full">
          <CarouselContent className="-ml-1 ">
            {product?.images!.map((image, index) => (
              <CarouselItem key={index} className={`pl-1 basis-[100%]`}>
                <Link href={`/shopping/${product.slug?.current!}`}>
                  <div className="p-0">
                    <Card className="rounded-none">
                      <CardContent className="flex aspect-[2/3] items-center justify-center p-0">
                        <Image
                            src={urlForImage(image)}
                            alt={product.name!}
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
      

      {hovering &&
      <>
      <CarouselPrevious />
      <CarouselNext />
      </>
      }
      
    </Carousel>
    </div>
  )
}
