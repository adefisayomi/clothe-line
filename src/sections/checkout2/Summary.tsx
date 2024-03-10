import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import handlePayWithFlutterwave from "@/src/hooks/useFlutterwave";
import { useTheme } from "next-themes";



export default function CheckoutSummary2 () {

    const config = {
        amount: 2000,
        customer: {email: 'claceey@gmail.com', name: 'dolapo oluwole', phone_number: '08169208730'},
    }
    const {theme} = useTheme()

    return (
        <div className="border border-black w-full px-3  py-8 min-h-[200px] flex flex-col justify-between rounded-md">
            <h1 className="font-bold text-lg capitalize mb-6">
                detail summary
            </h1>

            <div className="border-t border-black pt-2 flex flex-col gap-6 items-end mb-5">
                <div className="flex items-center justify-between w-full">
                    <h2 className="text-xs font-bold uppercase">subtotal</h2>
                    <h2 className="text-md font-normal">$2,000</h2>
                </div>

                <div className="flex items-center justify-between w-full">
                    <h2 className="text-xs font-bold uppercase">taxes</h2>
                    <h2 className="text-md font-normal">$2.32</h2>
                </div>

                <div className="flex items-center justify-between w-full">
                    <h2 className="text-xs font-bold uppercase">delivery</h2>
                    <h2 className="text-md font-normal">free</h2>
                </div>

                <div className="flex items-center justify-between w-full">
                    <h2 className="text-xs font-bold uppercase">promo</h2>
                    <h2 className="text-md font-normal">$2:00</h2>
                </div>
            </div>

            <div className="border-t border-black pt-2 flex flex-col gap-3 items-end mb-5">
                <div className="flex items-center justify-between w-full">
                    <h2 className="text-xs font-bold uppercase">total</h2>
                    <h2 className="text-md font-normal">$2,000</h2>
                </div>

                <Button size='sm' className="flex items-center gap-2 w-fit float-end" onClick={() => handlePayWithFlutterwave(config)} >
                    {/* <span className="text-xs">Pay with</span> */}
                    <img src="https://getdisha.co/wp-content/uploads/2022/08/flutterwave-logo.png" alt="flutterwave-button" 
                    className="object-cover w-full h-8"
                    />
                    <span className="text-xs">Pay</span>
                </Button>
            </div>

            <div className="mt-5">
            <PromoCode />
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