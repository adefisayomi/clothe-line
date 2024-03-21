import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import CartItems from "./CartItems";
import Link from "next/link";
import { useSettings } from "@/src/hooks";
import { useCartStore } from "@/src/contexts/reducers/useCartStore";
import Image from "next/image";



export default function Cart() {

  const cartItems = useCartStore((state) => state.cart)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative inline-flex">
          <ShoppingCart className="w-5 h-5" />
          {
            cartItems.length > 0 && <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[0.65rem] font-bold bg-secondary rounded-full -top-4 -end-3">
            {cartItems.length}
          </div>
          }
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col px-3 ">
        <SheetHeader>
          <SheetTitle className="uppercase text-sm font-bold">
            {"Cart Details"}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1">
          {
            cartItems?.length > 0 ? 
              <CartItems cartItems={cartItems} /> : 
              <div className="w-full h-full flex items-center justify-center flex-col">
                <Image
                  src='/empty-cart.svg'
                  alt='empty-cart'
                  width={800}
                  height={800}
                  objectFit="cover"
                />

                <h2 className="text-xl font-bold capitalize text-center">{"Your cart is currently empty"}</h2>
              </div>
          }
        </div>

        <SheetFooter>
          <Link href="/checkout" className="w-full ">
            <Button className="w-full capitalize">
              Continue to Checkout
            </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
