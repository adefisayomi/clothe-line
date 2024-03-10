import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { ProductTypes } from "@/sanity/schemaTypes/product";
import Page from "@/src/components/Page";
import useCookies from "@/src/hooks/useCookies";
import Layout from "@/src/layout";
import RecentlyViewed from "@/src/sections/products/RecentlyViewed";
import RelatedProducts from "@/src/sections/products/RelatedProducts";
import { _products } from "@/src/sections/products/_data";
import ProductDetails from "@/src/sections/products/details";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";

export default function SingleProduct({ product }: { product: ProductTypes }) {

    const router = useRouter()
    const [recentlyViewed, updateRecentlyViewed] = useCookies<string[]>('recently-viewed', [], 1);


    useEffect(() => {
        const exitingFunction = async () => {
            if (product && product._id && !recentlyViewed.includes(product._id)) {
                const updatedRecentlyViewed = [...recentlyViewed];
                updatedRecentlyViewed.unshift(product._id)
                if (recentlyViewed.length !== updatedRecentlyViewed.length) {
                  updateRecentlyViewed(updatedRecentlyViewed);
                }
              }
        };
    
        router.events.on("routeChangeStart", exitingFunction);
        window.onbeforeunload = exitingFunction;
    
        return () => {
          router.events.off("routeChangeStart", exitingFunction);
        };
      }, []);


  return (
    <Page title={`${product.name}`}>
      <div className="w-full flex flex-col relative gap-4 p-1">
        <div className="w-full flex md:items-start gap-7 mb-10 flex-col md:flex-row relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:w-2/3">
            {product.images && product.images.length > 0 && product.images.map((image, index) => (
              <div className="cursor-crosshair aspect-[2/3] border border-muted" key={index}>
                <img className="h-full object-cover w-full rounded-none" src={urlForImage(image)} alt="" />
              </div>
            ))}
          </div>

          <div className="sticky top-20 w-full md:max-w-[25%]">
            <ProductDetails product={product} />
          </div>
        </div>
        {/* <RelatedProducts /> */}
        <div className="mt-5"><RecentlyViewed  /></div>
      </div>
    </Page>
  );
}

SingleProduct.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export async function getServerSideProps(ctx: any) {
  const productQuery = `*[_type == "product" && slug.current == "${ctx.params.slug}"][0] {
    _id,
    name,
    description,
    price,
    colors,
    sizes,
    slug,
    images
  }`;

  const product: ProductTypes = await client.fetch(productQuery, { slug: ctx.params.slug });
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product },
  };
}
