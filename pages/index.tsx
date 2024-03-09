import Page from "@/src/components/Page";
import Layout from "@/src/layout";
import ImageGallery from "@/src/sections/products/ImageGallery";
import { SingleImage } from "@/src/sections/products/singleImage";
import { ReactNode } from "react";
import { client } from '@/sanity/lib/client';
import { ProductTypes } from "@/sanity/schemaTypes/product";
import CarouselProducts from "@/src/sections/products/CarouselProducts";
import { useCartStore } from "@/src/contexts/reducers/useCartStore";



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

  const cart = useCartStore((state) => state.cart)
  console.log(cart)

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
