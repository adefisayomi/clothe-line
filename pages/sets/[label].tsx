import { ReactNode, useEffect, useState} from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import groq from "groq";
import { client } from "@/sanity/lib/client";
import Page from "@/src/components/Page";
import Layout from "@/src/layout";
import { Button } from "@/src/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/src/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import ProductCarousel, { ProductCarouselPlaceholder } from "@/src/sections/product2/ProductCarousel";
import { ProductTypes } from "@/sanity/schemaTypes/product";
import { QUERY_LIST, SortProps, useSortQueryStore } from "@/src/contexts/reducers/sortQuery";



export default function Sets() {

    const router = useRouter();
    const handleSort = useSortQueryStore((state) => state.handleSortQuery)
    const sortQuery = useSortQueryStore((state) => state.sortQuery)
    const [categorySort, setCategorySort] = useState('')
    useEffect(() => {
        setCategorySort(prev => router?.query?.label !== 'new-in' ? `&& categoryType == "${router.query.label}"` : '')
    }, [router.query.label])
    


    const { data: products, error, isLoading } = useSWR(groq`*[_type == "product" ${categorySort}] | order(${sortQuery.query})`, query => client.fetch(query), { revalidateOnFocus: true });

    return (
        <Page title="">
            <div>
                <div className="w-full gap-5 flex flex-col items-start sticky top-0 left-0 py-6 bg-background z-10">
                    <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl capitalize">
                        {`"${router?.query?.label}"`}
                    </h1>

                    <div className="flex items-center justify-between w-full ">
                        <div className="flex items-center gap-2">
                            <Button size='sm' className="w-[50%] md:w-[150px]">
                                Filter
                            </Button>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button loading={isLoading} size='sm' className=" uppercase flex items-center">
                                        sort by : {sortQuery.type || 'recommended'} <ChevronDown className="ml-1 w-4 h-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-full">
                                    <DropdownMenuGroup>
                                        {
                                            Object.entries(QUERY_LIST).map(([key, value], index) => (
                                                <DropdownMenuItem onClick={() => handleSort(key as SortProps)} key={index} className="text-xs capitalize">
                                                    {key}
                                                </DropdownMenuItem>
                                            ))
                                        }
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <span className="text-xs ">{`["${products ? products.length : 0}"]`}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[2px] ">
                    

                    {
                        isLoading ? 
                        Array.from({ length: 4 }).map((_, index) => (
                            <ProductCarouselPlaceholder key={index} />
                      )) : 
                      
                        products && products.length > 0 && products.map((product: ProductTypes, index: number) => (
                            <ProductCarousel key={index} product={product} />
                        ))
                    }
                </div>

            </div>
        </Page>
    )
}

Sets.getLayout = (page: ReactNode) => <Layout>{page}</Layout>