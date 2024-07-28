import Logo from "@/src/components/Logo";
import Page from "@/src/components/Page";
import CheckoutSummary2 from "@/src/sections/checkout2/Summary";
import DeliveryForm from "@/src/sections/checkout2/checkoutForms/deliveryForm";
import { ShippingDetails } from "@/src/sections/checkout2/shippingDetails";
import {useTheme} from 'next-themes'
import { useEffect } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/src/components/ui/accordion"
import { useSettings } from "@/src/hooks";





export default function Checkout () {

  const {user} = useSettings()


    return (
        <div className=" w-full min-h-screen backdrop-blur-3xl relative">
            <Page title="Checkout">
                <div className="flex flex-col w-full ">
                    <div className="mb-10 sticky top-0 py-4 w-full  left-0"><Logo/></div>
                    
                    <div className="flex items-start md:flex-row flex-col md:gap-2 gap-10 justify-between px-5 md:px-2">
                        <div className="w-full max-w-2xl">
                            <AccordionDemo />
                            {/* <ol type="1" className="list-decimal">
                                <li>
                                    <h2 className="text-xs uppercase font-bold mb-6">delivery information</h2>
                                    <DeliveryForm />
                                </li>

                            </ol> */}
                        </div>

                        <div className="w-full md:max-w-sm float-end gap-2 ">
                            <div className="flex flex-col gap-4">
                                <CheckoutSummary2 
                                    user={{
                                        email: user?.email!,
                                        name: user?.displayName!,
                                        phone_number: user?.phoneNumber!
                                    }}
                                />
                                {/* <ShippingDetails /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        </div>
    )
}




  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger >Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            {"Yes. It's animated by default, but you can disable it if you prefer."}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  