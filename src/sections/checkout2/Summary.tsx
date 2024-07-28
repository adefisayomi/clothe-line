import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { useCartStore } from "@/src/contexts/reducers/useCartStore";
import handlePayWithFlutterwave from "@/src/hooks/useFlutterwave";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import CurrencyFormater from 'currency-formatter'


export default function CheckoutSummary2 ({user}: {user: {email: string, name: string, phone_number?: string}}) {

    const cart = useCartStore(state => state.cart)
    const [config, setConfig] = useState({amount: 0, customer: user})
    useEffect(() => {
        const sumPricesReducer = (acc: any, curr: any) => acc + curr.price * curr.quantity;
        const totalPrice = cart ? cart.reduce(sumPricesReducer, 0) : 0
        setConfig({...config, amount: totalPrice})
    }, [cart])

    return (
        <div className={`border  w-full px-3 lg:px-5  py-8 min-h-[200px] flex flex-col justify-between`}>
            <h1 className="font-bold text-md uppercase mb-6">
                detail summary
            </h1>

            <div className="border-t border-black pt-2 flex flex-col gap-6 items-end mb-5">
                <div className="flex items-center justify-between w-full">
                    <h2 className="text-xs font-bold uppercase">subtotal</h2>
                    <h2 className="text-md font-normal">
                        {CurrencyFormater.format(config.amount, {code: 'NGN'})}
                    </h2>
                </div>

                <div className="flex items-center justify-between w-full">
                    <h2 className="text-xs font-bold uppercase">taxes</h2>
                    <h2 className="text-md font-normal">₦0.00</h2>
                </div>

                <div className="flex items-center justify-between w-full">
                    <h2 className="text-xs font-bold uppercase">delivery</h2>
                    <h2 className="text-md font-normal">free</h2>
                </div>

                <div className="flex items-center justify-between w-full">
                    <h2 className="text-xs font-bold uppercase">promo</h2>
                    <h2 className="text-md font-normal">₦0.00</h2>
                </div>
            </div>

            <div className="border-t border-black pt-2 flex flex-col gap-3 items-end mb-5">
                <div className="flex items-center justify-between w-full mb-4">
                    <h2 className="text-xs font-bold uppercase">total</h2>
                    <h2 className="text-md font-normal">
                        {CurrencyFormater.format(config.amount, {code: 'NGN'})}
                    </h2>
                </div>

                <Button className="rounded-full w-full flex items-center gap-1 " onClick={() => handlePayWithFlutterwave(config as any)} >
                    <img src="https://getdisha.co/wp-content/uploads/2022/08/flutterwave-logo.png" alt="flutterwave-button" 
                    className="object-contain w-8 h-8"
                    />
                    <span className="text-xs capitalize">place order</span>
                </Button>
            </div>
        </div>
    )
}


function PromoCode () {

    return (
        <div className="flex items-center gap-1">
            <Input placeholder="Promo Code" className="" />
            <Button >
                Apply
            </Button>
        </div>
    )
}