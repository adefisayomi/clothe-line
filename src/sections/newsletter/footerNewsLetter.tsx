import { Button } from "@/components/ui/button";



export default function FooterNewsLetter () {

    return (
        <div className="w-full p-1 border border-muted rounded-sm flex items-center justify-between">
            <input type="email" required name="subscribe" id="subscribe" className="bg-background flex-grow mr-1 border-0 outline-none text-xs" placeholder="my@email.com" />
            <Button type="submit" className=" h-7 py-1.5 text-xs rounded-sm" size='sm'>
                subscribe
            </Button>
        </div>
    )
}