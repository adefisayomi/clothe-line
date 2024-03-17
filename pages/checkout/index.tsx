import Logo from "@/src/components/Logo";
import Page from "@/src/components/Page";
import CheckoutSummary2 from "@/src/sections/checkout2/Summary";
import DeliveryForm from "@/src/sections/checkout2/checkoutForms/deliveryForm";
import { ShippingDetails } from "@/src/sections/checkout2/shippingDetails";
import {useTheme} from 'next-themes'
import { useEffect } from "react";





export default function Checkout () {

    const {setTheme} = useTheme()
    useEffect(() => {
        setTheme('light')
    }, [])


    return (
        <div className=" w-full bg-[#E2DBC8] min-h-screen backdrop-blur-3xl relative">
            <Page title="">
                <div className="flex flex-col w-full">
                    <div className="mb-10 sticky top-0 py-4 w-full bg-[#E2DBC8] left-0"><Logo/></div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                        <div className="">
                            <ol type="1" className="list-decimal">
                                <li>
                                    <h2 className="text-xs uppercase mb-6">delivery information</h2>
                                    <DeliveryForm />
                                </li>

                            </ol>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                            <div />
                            <div className="flex flex-col gap-4">
                                <CheckoutSummary2 />
                                <ShippingDetails />
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        </div>
    )
}

