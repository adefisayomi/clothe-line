import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { X } from "lucide-react"




export function CarouselProducts() {

  const [showNav, setShowNav] = React.useState<boolean>(true)
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      console.log("current")
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
       <div className="py-2 text-left text-xs text-muted-foreground">
        Slide {current} of {count}
      </div>
   
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
      // onMouseEnter={() => setShowNav(true)}
      // onMouseLeave={() => setShowNav(false)}
      setApi={setApi}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductModal
          key={index}
          trigger= {<CarouselItem className="md:basis-[100%] lg:basis-1/2">
              <div className="p-1 ">
                <Card className="cursor-grab">
                  <CardContent className="flex aspect-square items-center justify-center ">
                    <img src="https://cdn-images.farfetch-contents.com/off-white-xray-super-baggy-jeans_22102690_52361267_400.jpg" alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>}
            details={{image: 'https://cdn-images.farfetch-contents.com/off-white-xray-super-baggy-jeans_22102690_52361267_400.jpg'}}
          />
        ))}
      </CarouselContent>
      {
        showNav && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )
      }
      
    </Carousel>
    </div>
  )
}






export function ProductModal({trigger, details}: {trigger: React.ReactNode, details: {image: string}}) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          {trigger}
        </AlertDialogTrigger>

        <AlertDialogContent className="max-w-[90%] min-h-screen flex flex-col items-start p-1">
          <div>
            <AlertDialogCancel className="hover:bg-background p-0">
              <X className="w-5 h-5" />
            </AlertDialogCancel>
          </div>

          <img src={details.image} alt="" />
          
          {/* <AlertDialogHeader className="flex items-center justify-between flex-row">
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>

            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogHeader>
          <AlertDialogFooter>
            
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter> */}
        </AlertDialogContent>
      </AlertDialog>
    )
  }
