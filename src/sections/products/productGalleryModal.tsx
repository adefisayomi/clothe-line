import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/src/components/ui/dialog"
import { ReactNode, useState } from "react"
import { ScrollArea } from "@/src/components/ui/scroll-area"
import { Card, CardContent } from "@/src/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel"
import Link from "next/link"

export default function ProductGalleryModal ({trigger, content}: {trigger: ReactNode, content: ReactNode}) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} >
      <DialogTrigger asChild >
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-full min-h-screen" onClick={() => setIsOpen(false)} >
        <ScrollArea className="h-screen w-full">
          {content}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}



export function MobileProductGalleryModal ({products}: {products: {id: string, url: string}[]}) {
  return (
    <div>
        <h1 className="text-xs font-bold mb-1 uppercase">related products</h1>
        <Carousel className="w-full">
            <CarouselContent className="-ml-1">
                {products.length > 0 && products.map((product, index) => (
                <CarouselItem key={index} className="pl-1 lg:basis-1/5 md:basis-1/2 sm:basis-[100%]">
                    <div className="p-1">
                    <Link href='#'>
                    <Card className="rounded-none">
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                        <img src={product.url} alt="" />
                        </CardContent>
                    </Card>
                    </Link>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
    </div>
  )
}