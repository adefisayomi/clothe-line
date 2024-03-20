import Page from "@/src/components/Page";
import Layout from "@/src/layout";
import { SingleImage } from "@/src/sections/products/singleImage";
import { ReactNode } from "react";
import { client } from '@/sanity/lib/client';
import { ProductTypes } from "@/sanity/schemaTypes/product";
import CarouselProducts from "@/src/sections/products/CarouselProducts";



export async function getServerSideProps(): Promise<{ props: {products: ProductTypes[]} }> {

  try {
    const products = await client.fetch<ProductTypes[]>(`*[_type == "product"] | order(_random)`);

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
      },
    };
  }
}

export default function Home({ products }: {products: ProductTypes[]}) {

  console.log(products[0])

  return (
    <Page title="Official ">
      <div className="mt-2 flex flex-col gap-10">
        <SingleImage />
        
        <div className="flex flex-col gap-10">
          <CarouselProducts product={products[0]} />
          <CarouselProducts product={products[1]} />
        </div>
      </div>
    </Page>
  );
}

Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;
