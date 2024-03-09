import Page from "@/src/components/Page"
import { Button } from "@/src/components/ui/button"
import Layout from "@/src/layout"
import { ReactNode, useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/src/components/ui/dropdown-menu"
  import { ChevronDown } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/src/components/ui/card"
import { Skeleton } from "@/src/components/ui/skeleton"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/src/components/ui/carousel"
import Link from "next/link"
import { ProductTypes } from "@/sanity/schemaTypes/product"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import CurrencyFormater from 'currency-formatter'




export default function NewIn ({products}: {products: ProductTypes[]}) {

    const [sort, setSort] = useState('recommended')
    const sortList = ['recommended', "newest", 'bestseller', 'price high to low', 'price low to high']
    const handleSort = (type: string) => setSort(type)

    return (
        <Page title="New sets">
        <div>
            <div className="flex w-full bg-background flex-col items-start gap-4 sticky top-0 left-0 py-4 z-10">
                <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl capitalize">
                    New in
                </h1>

                <div className="flex items-center justify-between w-full ">
                    <div className="flex items-center gap-2">
                        <Button size='sm' className="w-[50%] md:w-[150px]">
                            Filter
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size='sm' className=" uppercase flex items-center">
                                    sort by : {sort} <ChevronDown className="ml-1 w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-full">
                            <DropdownMenuGroup >
                                {
                                    sortList.map((item, index) => (
                                        <DropdownMenuItem onClick={() => handleSort(item)} key={index} className="text-xs capitalize">
                                            {item}
                                        </DropdownMenuItem>
                                    ))
                                }
                            </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <span className="text-xs ">{"[200]"}</span>
                </div>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-1 gap-1 mt-5">
                {
                    [...products, ...products, ...products].map((product, index) => (
                    <NewProductComponent key={index} product={product}/>
                    ))
                }
            </div>
        </div>
        </Page>
    )
}

NewIn.getLayout = (page: ReactNode) => <Layout>{page}</Layout>



function NewProductComponent ({product}: {product: ProductTypes}) {

    const [hover, setHover] = useState(false)

    return (
        <div>
            <Card 
                className="rounded-none"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
            <CardContent className="flex aspect-[2/3] items-center justify-center p-0 flex-col">
                <Carousel className="w-full" >
                    <CarouselContent className="-ml-1 ">
                        {product?.images!.map((image, index) => (
                        <CarouselItem key={index} className="pl-1 basis-[100%] ">
                            <Link href={`/shopping/${product.slug?.current!}`}>
                            <div className="p-0">
                                <img src={urlForImage(image)} alt="" className="flex object-cover h-full w-full" />
                            </div>
                            </Link>
                        </CarouselItem>
                        ))}
                    </CarouselContent>

                    {
                        hover &&
                        <>
                            <CarouselPrevious />
                            <CarouselNext />
                        </>
                    }
                
                </Carousel>

                <div className="w-full flex flex-col items-start gap-1 h-fit p-2">
                    <p className="text-xs font-bold uppercase">{product.name}</p>
                    <p>{CurrencyFormater.format(product.price!, {code: 'NGN'})}</p>
                </div>
            </CardContent>
            </Card>
        </div>
    )
}

export async function getServerSideProps(): Promise<{ props: {products: ProductTypes[]} }> {
      const productsQuery = `*[_type == "product"] {
        _id,
        name,
        description,
        price,
        color,
        sizes,
        images,
        slug
      }`;
  
      const products = await client.fetch<ProductTypes[]>(productsQuery);
  
      return {
        props: {
          products,
        },
      }
  }