import Link from "next/link";
import { useResponsive } from "../hooks";



export default function Logo () {

    const isDesktop = useResponsive() === 'desktop'

    return (
        <Link href='/'>
        <div className="w-fit cursor-pointer">
            {
                isDesktop ? 
                <h1 className="scroll-m-20 text-2xl md:text-4xl font-extrabold tracking-tight font-poppins">
                    Adefisayomi™<span className="text-lg">/clace</span>
                </h1> : 
                <h1 className="scroll-m-20 text-2xl md:text-4xl font-extrabold tracking-tight font-poppins">
                    clace™
                </h1>
            }
        </div>
        </Link>
    )
}