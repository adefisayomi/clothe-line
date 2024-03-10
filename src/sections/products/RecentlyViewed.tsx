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
import { ProductTypes } from "@/sanity/schemaTypes/product"
import { urlForImage } from "@/sanity/lib/image"
import useCookies from "@/src/hooks/useCookies"
import groq from "groq"
import useSWR from "swr"
import { client } from "@/sanity/lib/client"

export default function RecentlyViewed () {

  const [recentlyViewed] = useCookies<string[]>('recently-viewed', []);
  const { data, error } = useSWR(groq`*[_type == "product" && _id in ${JSON.stringify(recentlyViewed)}]`, query =>
    client.fetch(query), {revalidateOnFocus: true})

  return (
    <div >
      <div className="mb-1 uppercase font-bold text-sm text-muted-foreground cursor-default">
        {"recently viewed"}
      </div>

      <div className="grid md:grid-cols-5 grid-cols-1 gap-2">
        {
            data && data.length > 0 && data.map((product: ProductTypes, index: any) => (
                <NewProductComponent product={product} key={index} />
            ))
        }
      </div>
    </div>
  )
}


function NewProductComponent ({product}: {product: ProductTypes}) {
    return (
        <div>
            <Card className="rounded-none">
            <CardContent className="flex aspect-square items-center justify-center p-0">
                <Carousel className="w-full" >
                    <CarouselContent className="-ml-1 ">
                        {product?.images!.map((image, index) => (
                        <CarouselItem key={index} className="pl-1 ">
                            <Link href={`/shopping/${product.slug?.current!}`}>
                            <div className="p-0">
                                <img src={urlForImage(image)} alt="" className="flex aspect-square object-cover" />
                            </div>
                            </Link>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                
                </Carousel>
            </CardContent>
            </Card>
        </div>
    )
}