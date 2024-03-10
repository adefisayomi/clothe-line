import Link from "next/link";
import { cn } from "../lib/utils";
import { useRouter } from "next/router";



export default function Logo ({className, onClick}: {className?: any, onClick?: any}) {

    const router = useRouter()
    const handleClick = () => onClick || router.push('/')

    return (
        <div className="w-fit cursor-pointer" onClick={handleClick}>
            <h1 className="scroll-m-20 text-2xl md:text-4xl font-extrabold tracking-tight font-poppins">
                Adefisayomi™<span className="text-lg">/clace</span>
            </h1>
        </div>
    )
}