import TextMaxLine from "@/components/TextMaxLine"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {Minus, Plus} from 'lucide-react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {ReactNode, useState } from "react"
import InfoSidebar from "@/components/InfoSidebar"
import { Help, Payment, Shipping } from "./ProductHelp"


export default function ProductDetails () {

    return (
        <div className="flex flex-col items-start w-full gap-10">
            <Dscription />
            <ColorPallete />
            <AddToCart />
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
         <ul className="flex flex-col items-start gap-1">
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

export function AddToCart () {

    const [quantity, setQuantity] = useState<number>(0)
    const increaseQuantity = () => setQuantity(prev => prev + 1)
    const reduceQuantity = () => setQuantity(prev => prev > 0 ? prev - 1 : prev)
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
                <input onChange={handleQuantityChange} type="text" className="w-12 h-8 outline-none text-xs text-center p-2" value={quantity} placeholder="0" />
                <button className="p-2" onClick={increaseQuantity}>
                    <Plus className="w-4 h-4"/>
                </button>
            </div>

            <Button size='sm' loading className="w-full h-8 max-w-[12rem] py-1.5 uppercase text-xs rounded-none">
                Add to cart
            </Button>
        </div>
    )
}

function Dscription () {

    return (
        <div className="w-full">
            <div className="flex flex-col items-start gap-1 mb-2">
                <h1 className="text-2xl capitalize font-semibold">
                    Full Leather Varsity Jacket
                </h1>
                <h2 className="text-2xl capitalize font-medium">
                    $2,000
                </h2>
            </div>
            <TextMaxLine line={3}>
               ssumenda hic expedita suscipi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nihil iste officiis exercitationem mollitia asperiores nostrum laboriosam pariatur tempora expedita doloribus distinctio cumque dignissimos voluptates accusamus necessitatibus, totam eveniet esse quod ad voluptatem ullam consequuntur. Consectetur nihil blanditiis voluptate deleniti iste quis assumenda eaque odio cumque? Quos iure deleniti consequatur!
            </TextMaxLine>
        </div>
    )
}

function ColorPallete () {

    const [colorSelected, setColorSelected] = useState<string | null>('')
    const handleSetColor = (e: any) => setColorSelected(e.target.value)

    const colorList = [
        {color: 'red-500', id: '1', value: 'red'},
        {color: 'green-500', id: '1', value: 'green'},
        {color: 'purple-500', id: '1', value: 'purple'},
    ]

    return (
          <div>
            
            <h3 className="mb-1 text-xs font-bold uppercase ">colors:</h3>

            <div className="flex items-center gap-2">
                {
                    colorList.map((color, index) => (
                        <ColorComponent key={index} color={color.color} value={color.value} id={color.id} handleSetColor={handleSetColor} />
                    ))
                }
            </div>

            {colorSelected && <p className="text-[0.6rem] font-light capitalize">{colorSelected} color selected</p>}
          </div>
    )
}


function ColorComponent ({value, id, color, handleSetColor}: {value: any, id: any, color: string, handleSetColor: any}) {

    return (
      <div>
        <input 
            type="radio" 
            name='color-pallete' 
            className={`appearance-none w-8 rounded-md h-8 relative outline-none bg-${color} before:bg-${color} cursor-pointer checked:before:bg-${color} checked:border-4 before:content-[''] before:block before:w-8 before:h-8 before:rounded-md 
            checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:w-[85%] checked:before:h-[85%] checked:rounded-full`} 
            value={value}
            id={id}
            onChange={handleSetColor}
        />
      </div>
    )
}