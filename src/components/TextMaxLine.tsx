import { cn } from "@/src/lib/utils"
import { useState } from "react"

export default function TextMaxLine ({children, line, className}: {children: string, line?: number, className?: string}) {

    const [read, setRead] = useState(false)
    const toggleRead = () => setRead(prev => !prev)
   
    return (
        <div className="w-full flex flex-wrap gap-1 items-center">
            <p className={cn("text-xs", className, read ? 'line-clamp-0' : `line-clamp-3` )}>
                {children}
            </p>
            <button onClick={toggleRead} className="bg-none text-xs lowercase font-medium underline">
                {read ? 'read less' : 'read more'}
            </button>
        </div>
    )
}