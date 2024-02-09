import Layout from "@/src/layout";
import { ReactNode } from "react";
import Page from "@/components/Page";


export default function Home() {


  return (
    <Page title="">
      <div className="">
      
      </div>
    </Page>
  );
}

Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>