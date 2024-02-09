import useResponsive from "@/src/hooks/useResponsive"
import { _products } from "./_data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react";
import Link from "next/link";
import { AddToCart } from "./details";



export default function Products () {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        {_products.map((product, index) => (
          <Product key={index} />
        ))}
      </div>
    )
}

export function Product () {

    const [hovering, setHovering] = useState(false)

    return (
      <Carousel 
        className="w-full border border-muted relative"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
    >
        <CarouselContent>
          {_products.map((product, index) => (
            <CarouselItem key={index} className="flex flex-col w-full p-0">
                <Link href={`/shopping/${product.id}`}>
                <img src={product.url} alt="" className="w-full h-full object-cover" />
                </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        {
            hovering && (
                <>
                <CarouselNext />
                <CarouselPrevious />
                </>
            )
          }

          <div className="absolute top-0 left-0 text-xs p-2 bg-background w-fit">
            <h2>$2,000</h2>
          </div>

          {
            hovering &&
            <div className="absolute bottom-0 left-0 p-2 bg-background">
                <AddToCart />
            </div>
          }
      </Carousel>
    )
  }