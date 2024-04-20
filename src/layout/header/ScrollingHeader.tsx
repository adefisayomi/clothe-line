import { Button } from "@/src/components/ui/button"
import { useSettings } from "@/src/hooks"



export default function HeaderScrollingText () {

    const {subscriptionRef} = useSettings()
    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight, // Scroll to the bottom of the page
          behavior: 'smooth' // Smooth scrolling behavior
        })
        subscriptionRef.current.focus()
    }

    return (
        <div className="bg-background overflow-hidden border-b border-muted p-2 sticky top-0 z-50" id="header-scroll-text-container">
            <p id="header-scroll-text" className="cursor-default text-xs font-mono bg-background">
                Subscribe to our newsletter and be the first know when we release a new product - 
                <Button size='sm' className="p-1 px-3 h-fit rounded-full" onClick={scrollToBottom}>subscribe</Button>
            </p>
        </div>
    )
}