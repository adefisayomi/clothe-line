import TextMaxLine from "@/src/components/TextMaxLine"
import { Button } from "@/src/components/ui/button"
import {Minus, Plus} from 'lucide-react'
import {ReactNode, useState } from "react"
import InfoSidebar from "@/src/components/InfoSidebar"
import { Help, Payment, Shipping } from "./ProductHelp"
import { ProductInCartTypes, ProductTypes } from "@/sanity/schemaTypes/product"
import CurrencyFormater from 'currency-formatter'
import { urlForImage } from "@/sanity/lib/image"
import useAlert from "@/src/hooks/useAlert"
import { useCartStore } from "@/src/contexts/reducers/useCartStore"
import { Textarea } from "@/src/components/ui/textarea"


export default function ProductDetails ({product}: {product: ProductTypes}) {

    const [note, setNote] = useState('')
    const {setAlert} = useAlert()
    const [quantity, setQuantity] = useState<number>(1)
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const addCartItem = useCartStore((state) => state.addCartItem)
    const [loading, setLoading] = useState(false)

    const handleAddToCart= async () => {
        setLoading(true)
        const payload: ProductInCartTypes = {
            _id: product._id,
            name: product.name,
            description: product.description, 
            price: product.price,
            color: color,
            size,
            image: product.images ? urlForImage(product?.images[0]!) : '',
            slug: product.slug?.current,
            quantity,
            note
        }
        await addCartItem(payload, setAlert)
        setLoading(false)
    }


    return (
        <div className="flex flex-col items-start w-full gap-8">
            <Dscription product={product} />
            <ColorPallete colors={product.colors || []} color={color} setColor={setColor} />
            <SizesComponent sizes={product.sizes || []} size={size} setSize={setSize} />

            <AddNote note={note} setNote={setNote} />
            <AddToCart quantity={quantity} setQuantity={setQuantity} handleAddToCart={handleAddToCart} loading={loading}/>

            <MoreInfo />
        </div>
    )
}


function MoreInfo () {
    const [open, setOpen] = useState(false)
    const [info, setInfo] = useState<{header: string, content: any}>({header: '', content: null})
    const handleShowInfo =(header: string, content: ReactNode) => {
        setOpen(true)
        setInfo({header, content})
    }

    const infoList= [
        {header: 'SHIPPING & RETURNS', component: <Shipping />},
        {header: 'PAYMENT METHODS', component: <Payment />},
        {header: 'HELP AND CONTACT', component: <Help />},
    ]

    return (
       <div>
         <ul className="flex flex-col items-start gap-1 ">
            {
                infoList.map((_, index) => (
                    <li key={index} className="hover:underline text-xs cursor-pointer"
                        onClick={() => handleShowInfo(_.header, _.component)}
                    >
                        {_.header}
                    </li>
                ))
            }
        </ul>
            <InfoSidebar isOpen={open} onClose={() => setOpen(false)} header={info.header} content={info.content} />
       </div>
    )
}

export function AddToCart ({quantity, setQuantity, handleAddToCart, loading}: {quantity: number, setQuantity: any, handleAddToCart: any, loading: boolean}) {

    const increaseQuantity = () => setQuantity((prev: number) => prev + 1)
    const reduceQuantity = () => setQuantity((prev: number) => prev > 0 ? prev - 1 : prev)
    const handleQuantityChange = (e: any) => {
        if (!isNaN(e.target.value)) {
            const num = Number(e.target.value)
            setQuantity(num)
        }
    }
    

    return (
        <div className="w-full flex items-center gap-2">
            <div className="relative flex items-center max-w-[8rem] border border-muted px-1">
                <button className="p-2" onClick={reduceQuantity}>
                    <Minus className="w-4 h-4"/>
                </button>
                <input onChange={handleQuantityChange} type="text" className="w-12 h-8 bg-background outline-none text-xs text-center p-2" value={quantity} placeholder="0" />
                <button className="p-2" onClick={increaseQuantity}>
                    <Plus className="w-4 h-4"/>
                </button>
            </div>

            <Button onClick={handleAddToCart} loading={loading} size='sm' className="w-full h-8 max-w-[12rem] py-1.5 uppercase text-xs rounded-none">
                {loading ? 'Adding... item' : 'Add to cart'}
            </Button>
        </div>
    )
}

function Dscription ({product}: {product: ProductTypes}) {

    return (
        <div className="w-full">
            <div className="flex flex-col items-start gap-1 mb-2">
                <h1 className="text-2xl capitalize font-semibold">
                    {product.name}
                </h1>
                <h2 className="text-lg capitalize font-medium">
                    {CurrencyFormater.format(product.price!, {code: 'NGN'})}
                </h2>
            </div>
            <TextMaxLine line={3}>{product.description as string}</TextMaxLine>
        </div>
    )
}

function ColorPallete ({color, colors, setColor}: {colors: string [], color: string, setColor: any}) {

    const handleSetColor = (e: any) => setColor(e.target.value)

    return (
          <div>
            
            <h3 className="mb-1 text-xs font-bold uppercase ">colors:</h3>

            <div className="flex items-center gap-2">
                {
                    colors && colors.length > 0 && colors.map((col, index) => (
                        <ColorComponent 
                            key={index} 
                            color={col}
                            handleSetColor={handleSetColor}
                        />
                    ))
                }
            </div>

            {color && <p className="text-[0.6rem] font-light capitalize">{color} color selected</p>}
          </div>
    )
}


function ColorComponent ({color, handleSetColor}: {color: string, handleSetColor: any}) {

    const bgColor = `bg-${color}-500`.toLowerCase()

    return (
      <div>
        <input 
            type="radio" 
            name='color-pallete' 
            className={`appearance-none w-8 rounded-md h-8 relative outline-none ${bgColor} before:${bgColor} cursor-pointer checked:before:${bgColor} checked:border-4 before:content-[''] before:block before:w-8 before:h-8 before:rounded-md 
            checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:w-[85%] checked:before:h-[85%] checked:rounded-full`} 
            onChange={handleSetColor}
            value={color}
        />
      </div>
    )
}

function SizesComponent({ sizes, size, setSize }: { sizes: string[]; size: string; setSize: any }) {
    const handleSetSize = (e: any) => setSize(e.target.value);
  
    return (
      <div className="flex flex-col items-start gap-2 ">
        <h3 className="text-xs font-bold uppercase">Sizes:</h3>
  
        <div className="flex items-center gap-3">
          {sizes.map((siz, index) => (
            <label htmlFor={siz} key={index} className="text-sm  flex items-center justify-center relative">
                <input
                    type="radio"
                    name="size-selector"
                    className={`appearance-none w-10 h-10 outline-none border-2 ${
                    siz === size ? 'border-gray-600' : 'border-muted'
                    } checked:border-4 checked:before:w-10 checked:before:h-10 `}
                    onChange={handleSetSize}
                    checked={siz === size}
                    value={siz}
                    id={siz}
                />
                <span className="absolute">{siz}</span>
            </label>
          ))}
        </div>

        {size && <p className="text-[0.65rem] font-light capitalize">{size} - size selected</p>}
      </div>
    );
  }
  
  
  function AddNote ({note, setNote}: {setNote: any, note: string}) {

    const [hide, setHide] = useState(true)
    const toggleHide = () => {
        setHide(!hide)
        setNote('')
    }
    const handleSetNote = (e: any) => setNote(e.target.value)

    return (
        <div className="flex flex-col items-start w-full">
            <Button size='sm' variant='link' className="capitalize flex items-center gap-1" onClick={toggleHide}>
                <Plus className="w-3 h-3" />
                add note
            </Button>

            {!hide && <Textarea placeholder="Type your message here." value={note} onChange={handleSetNote} />}
        </div>
    )
  }