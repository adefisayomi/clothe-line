import TextMaxLine from "@/src/components/TextMaxLine"
import { Button } from "@/src/components/ui/button"
import {Minus, Plus} from 'lucide-react'
import {ReactNode, useEffect, useState } from "react"
import InfoSidebar from "@/src/components/InfoSidebar"
import { Help, Payment, Shipping } from "./ProductHelp"
import { ColorList, ProductInCartTypes, ProductTypes } from "@/sanity/schemaTypes/product"
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
            <ColorsComponent colors={product.colors || []} selectedColor={color} setColor={setColor} />
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


  function ColorsComponent ({selectedColor, colors, setColor}: {colors: string [], selectedColor: string, setColor: any}) {

    const handleSetColor = (e: any) => setColor(e.target.value)
    const [bgColors, setBgColors] = useState<{name: string, value: string}[]>([])
    useEffect(() => {
        const colorListWithHex = colors.map((color, index) => {
            return ({
                name: color,
                value: ColorList.filter((col, _) => col.title == color)[0].value || ''
            })
        })
        setBgColors(colorListWithHex)
    }, [colors])

  
    return (
        <div className="flex flex-col items-start gap-2 ">
            <h3 className="text-xs font-bold uppercase">colors:</h3>
    
            <div className="flex items-center gap-3">
            {bgColors.map((col, index) => (
                <input
                    type="radio"
                    style={{backgroundColor: col.value}}
                    key={index}
                    name="color-selector"
                    className={` appearance-none w-10 h-10 outline-none border-1 ${
                    col.name === selectedColor && 'rounded-full'
                    } checked:border-4 checked:before:w-10 checked:before:h-10 `}
                    onChange={handleSetColor}
                    checked={col.name === selectedColor}
                    value={col.name}
                />
            ))}
            </div>

            {selectedColor && <p className="text-[0.65rem] font-light capitalize">{selectedColor} - color selected</p>}
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