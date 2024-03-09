import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/src/components/ui/accordion"
  
  export function ShippingDetails () {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xs uppercase border-b border-black py-1">shipping & returns</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xs uppercase border-b border-black py-1">need help?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xs uppercase border-b border-black py-1">secure payments</AccordionTrigger>
          <AccordionContent>
            {"Yes. It's animated by default, but you can disable it if you prefer."}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  