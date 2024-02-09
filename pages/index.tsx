import Layout from "@/src/layout";
import { ReactNode } from "react";
import Page from "@/components/Page";
import Products from "@/src/sections/product";


export default function Home() {


  return (
    <Page title="">
      <div className="">
        <Products />
      </div>
    </Page>
  );
}

Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>