import Page from "@/src/components/Page";
import Layout from "@/src/layout";
import ImageGallery from "@/src/sections/products/ImageGallery";
import { SingleImage } from "@/src/sections/products/singleImage";
import { ReactNode } from "react";
import { client } from '@/sanity/lib/client';
import { ProductTypes } from "@/sanity/schemaTypes/product";
import CarouselProducts from "@/src/sections/products/CarouselProducts";
import { useCartStore } from "@/src/contexts/reducers/useCartStore";
import groq from "groq";
import useSWR from 'swr'



export async function getServerSideProps(): Promise<{ props: {products: ProductTypes[]} }> {
  try {
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
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}

export default function Home({ products }: {products: ProductTypes[]}) {

  const { data, error } = useSWR(groq`*[_type == "product" && _id in ${JSON.stringify(recentlyViewd)}]`, query =>
    client.fetch(query), {revalidateOnFocus: true});
  console.log(data)
  console.log(error)

  return (
    <Page title="Official ">
      <div className="mt-2 flex flex-col gap-10">
        <SingleImage />
        {/* <ImageGallery /> */}
        <CarouselProducts product={products[0]} />
      </div>
    </Page>
  );
}

Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

const recentlyViewd = [
  "124f93e4-e555-4d56-99a8-873d8cded333", "8b43087f-cf12-489a-9797-ac5352f27a0b"
]
