import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/src/layout";
import { ReactNode } from "react";
import Page from "@/components/Page";
import Product from "@/src/sections/product";
import { CarouselProducts } from "@/src/sections/product/CarouselProducts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <Page title="">
    <div className="">
      <CarouselProducts />
    </div>
    </Page>
  );
}

Home.getLayout = (page: ReactNode) => <Layout disableFooter>{page}</Layout>