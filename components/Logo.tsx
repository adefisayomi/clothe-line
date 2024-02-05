import Link from "next/link";



export default function Logo () {

    return (
        <div className="w-fit">
            <Link href='/'>
                <h1 className="scroll-m-20 text-2xl lg:text-4xl font-extrabold tracking-tight font-poppins">
                    Adefisayomi<span className="text-lg">/clace</span> 
                </h1>
            </Link>
        </div>
    )
}