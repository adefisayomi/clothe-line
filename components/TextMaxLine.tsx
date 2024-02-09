import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function TextMaxLine ({children, line, className}: {children: string, line?: number, className?: string}) {

    const [read, setRead] = useState(false)
    const toggleRead = () => setRead(prev => !prev)
    const [maxStyle, setMaxStyle] = useState(read ? 'line-clamp-0' : `line-clamp-${line}`)

    useEffect(() => {
        if (read) setMaxStyle('line-clamp-none')
        else setMaxStyle(`line-clamp-${line}`)
    }, [read, line])
   
    return (
        <div className="w-full flex flex-wrap gap-1 items-center">
            <p className={cn("text-xs", className, maxStyle )}>
                {children}
            </p>
            <button onClick={toggleRead} className="bg-none text-xs lowercase font-medium underline">
                {read ? 'read less' : 'read more'}
            </button>
        </div>
    )
}