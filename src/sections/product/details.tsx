import TextMaxLine from "@/components/TextMaxLine"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {Check} from 'lucide-react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {useState } from "react"


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
    return (
        <ul className="flex flex-col items-start gap-1">
            <li className="hover:underline text-xs"><Link href='#'>SHIPPING & RETURNS</Link></li>
            <li className="hover:underline text-xs"><Link href='#'>PAYMENT METHODS</Link></li>
            <li className="hover:underline text-xs"><Link href='#'>HELP AND CONTACT</Link></li>
        </ul>
    )
}

function AddToCart () {

    return (
        <div className="w-full ">
            <Button size='sm' className="w-full max-w-[12rem] h-fit py-1.5 uppercase text-xs rounded-none">
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
            <TextMaxLine className="text-xs" line={4}>
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