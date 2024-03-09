import { Minus, Plus, Trash2 } from "lucide-react"
import { useState } from "react"
import { ScrollArea } from "@/src/components/ui/scroll-area"
import CurrencyFormater from 'currency-formatter'
import { useCartStore } from "@/src/contexts/reducers/useCartStore"
import useAlert from "@/src/hooks/useAlert"
import { ProductInCartTypes } from "@/sanity/schemaTypes/product"
import Link from 'next/link'

export default function CartItems ({cartItems}: {cartItems: any[]}) {

    return (
        <ScrollArea className="h-[80vh] pr-6">
            <div className="flex flex-col gap-4">
                {
                    cartItems && cartItems.length > 0 &&
                    cartItems.map((item, index) => (
                        <ItemList key={index} product={item} index={index}/>
                    ))
                }
                
            </div>
        </ScrollArea>
    )
}

export function ItemList ({product, index}: {product: ProductInCartTypes, index: number}) {

    const {setAlert} = useAlert()
    const updateCart = useCartStore((state) => state.updateCartItem)
    const deleteCartItem = useCartStore((state) => state.deleteCartItem)
    const [quantity, setQuantity] = useState<number>(1)
    const increaseQuantity = () => setQuantity(prev => prev + 1)
    const reduceQuantity = () => setQuantity(prev => prev > 0 ? prev - 1 : prev)
    const handleQuantityChange = (e: any) => {
        if (!isNaN(e.target.value)) {
            const num = Number(e.target.value)
            setQuantity(num)
        }
    }

    return (
        <div className="flex w-full items-center justify-between border-b pb-2">
            <Link href={`/shopping/${product.slug}`}>
                <img src={product.image} alt={product.name} className="flex object-contain w-20 h-20 rounded-sm border-2" />
            </Link>

            <div>
                <p className="text-xs ">{CurrencyFormater.format(product.price!, {code: 'NGN'})}</p>
            </div>

            <div className="relative flex items-center max-w-[8rem] border border-muted px-1">
                <button className="p-2" onClick={reduceQuantity}>
                    <Minus className="w-3 h-3"/>
                </button>
                <input onChange={handleQuantityChange} type="text" className="w-10 h-6 bg-background outline-none text-xs text-center p-2" value={quantity} placeholder="0" />
                <button className="p-2" onClick={increaseQuantity}>
                    <Plus className="w-3 h-3"/>
                </button>
            </div>

            <div>
                <button onClick={() => deleteCartItem(index, setAlert)}>
                    <Trash2 className="w-4 h-4 text-red-500" />
                </button>
            </div>
        </div>
    )
}