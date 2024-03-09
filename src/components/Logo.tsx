import Link from "next/link";
import { cn } from "../lib/utils";



export default function Logo ({className, big=false}: {className?: any, big?: boolean}) {

    return (
        <div className="w-fit">
            <Link href='/'>
                <h1 className="scroll-m-20 text-2xl md:text-4xl font-extrabold tracking-tight font-poppins">
                    Adefisayomi™<span className="text-lg">/clace</span>
                </h1>
            </Link>
        </div>
    )
}