import { Button } from "@/src/components/ui/button";
import Link from "next/link";




export function SingleImage () {

    return (
        <div className="flex flex-col items-start gap-2">
            <div className='md:max-h-[85vh] w-full h-screen'>
            <img
                src='https://www.off---white.com/BWStaticContent/53000/641d5fa5-2bc7-425f-a0f9-da62ea9b7793_fw24-show-tee-ask-legal-desk.jpg'
                alt='home image'
                className="object-cover h-full"
            />
        </div>

        <h1 className="scroll-m-20 text-lg font-extrabold tracking-tight uppercase">
            {"X-cape T-shirts"}
        </h1>
        <Link href='/sets/new-in'>
            <Button variant='outline' size='sm' className="w-1/2 md:w-fit ">
                Discover more
            </Button>
        </Link>
        </div>
    )
}