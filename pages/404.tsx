import Page from "@/src/components/Page"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import Layout from "@/src/layout"
import RelatedProducts from "@/src/sections/products/RelatedProducts"
import { useRouter } from "next/router"
import { ReactNode } from "react"



export default function Erro404 () {

    const router = useRouter()

    return (
        <Page title="404 ">
        <div>
            <div className="flex flex-col justify-center items-center p-2 min-h-[75vh]">
                <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl capitalize mb-5">
                    page not found!
                </h1>

                <p className="text-xs font-normal">
                    <span className="font-bold uppercase">404 Error</span> - This page cannot be found. Try a Search or have a look at our suggestions for you.
                </p>

                <Input placeholder="Search..." className="w-full max-w-5xl p-6 text-sm bg-muted rounded-lg my-4"/>

                <Button className="w-full max-w-xs" variant='outline' onClick={() => router.back()}>
                    Go Back
                </Button>
            </div>

            <div className="border-t border-muted p-2">
            <RelatedProducts />
            </div>
        </div>
        </Page>
    )
}

Erro404.getLayout = (page: ReactNode) => <Layout>{page}</Layout>