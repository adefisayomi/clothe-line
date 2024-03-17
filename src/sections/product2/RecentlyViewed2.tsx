import { useRecentlyViewedStore } from "@/src/contexts/reducers/useRecentlyViewedStore"
import { useEffect } from "react"
import { Card, CardContent } from "@/src/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel"
import Link from 'next/link'
import { ProductTypes } from "@/sanity/schemaTypes/product"
import { urlForImage } from "@/sanity/lib/image"
import groq from "groq"
import useSWR from "swr"
import { client } from "@/sanity/lib/client"
import Image from "next/image"




export default function RecentlyViewed2 () {

    const emptyRecentlyViewed = useRecentlyViewedStore((state) => state.emptyRecentlyViewed)
    const recentlyViewed = useRecentlyViewedStore((state) => state.recentlyViewed)
    const { data, error } = useSWR(groq`*[_type == "product" && _id in ${JSON.stringify(recentlyViewed)}]`, query =>
    client.fetch(query), {revalidateOnFocus: true})

    useEffect(() => {
        const recentValid = setInterval(() => {emptyRecentlyViewed()}, 1000*60*60*6)
        return () => clearInterval(recentValid)
    }, [])

    return (
        <div >
            <div className="mb-1 uppercase font-bold text-sm text-muted-foreground cursor-default">
                {"recently viewed"}
            </div>

            <div className="grid md:grid-cols-5 grid-cols-1 gap-[2px]">
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
            <Card className="rounded-none relative overflow-hidden">
            <CardContent className="flex aspect-square items-center justify-center p-0">
                <Carousel className="w-full" >
                    <CarouselContent className="-ml-1 ">
                        {product?.images!.map((image, index) => (
                        <CarouselItem key={index} className="pl-1 ">
                            <Link href={`/shopping/${product.slug?.current!}`}>
                            <div className="p-0">
                                <Image
                                    src={urlForImage(image)} 
                                    alt={product.name!}
                                    className="flex aspect-square object-cover duration-300 transition-transform transform-gpu hover:scale-110"
                                    width={500}
                                    height={500}
                                />
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