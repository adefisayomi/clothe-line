import Layout from "@/src/layout"
import RelatedProducts from "@/src/sections/product/RelatedProducts"
import { _products } from "@/src/sections/product/_data"
import ProductDetails from "@/src/sections/product/details"
import ProductGalleryModal from "@/src/sections/product/productGalleryModal"
import { ReactNode } from "react"




export default function SingleProduct () {

    return (
        <div className="w-full flex flex-col relative gap-4 md:p-0 p-2">
            

            <div className=" w-full flex md:items-start gap-7 mb-10 flex-col md:flex-row">
                <ProductGalleryModal
                    trigger={
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:w-2/3 ">
                        {_products.map((product, index) => (
                            <div className="cursor-crosshair h-[80vh] border border-muted" key={product.id}>
                                <img className="h-full object-cover w-full rounded-none" src={product.url} alt=""/>
                            </div>
                        ))}
                        </div>
                    }
                    content={
                        <div className="flex flex-col w-full gap-1 overflow-y-auto">
                           {_products.map((product, index) => (
                                <div className="cursor-vertical-text h-screen flex items-center justify-center" key={product.id}>
                                    <img className="h-full object-contain w-full rounded-none" src={product.url} alt=""/>
                                </div>
                            ))} 
                        </div>
                    }
                />

                <div className="sticky top-28 w-full md:max-w-[25%]">
                    <ProductDetails />
                </div>
            </div>
            <RelatedProducts products={[..._products, ..._products]} />
        </div>
    )
}

SingleProduct.getLayout = (page: ReactNode) => <Layout>{page}</Layout>