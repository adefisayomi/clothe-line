import { memo, useState } from "react"



function TextMaxLine ({children, line=2, label, className}: {children: any, line?: number, label?: string, className?: any}) {

    const [read, setRead] = useState(false)
    const toggleRead = () => setRead(prev => !prev)

    return (
        <div>
            {children}
        </div>
        // <div className={`${className} relative`}>
        // <span className={`line-clamp-${line * (read ? 0 : 1)}`}>
        //     {children}
        // </span>
        // <button className="text-nowrap text-xs underline lowercase absolute right-0 bottom-0 bg-background px-2" onClick={toggleRead}>
        //     {label || read ? 'read less' : 'read more'}
        // </button>
        // </div>
    )
}

export default memo(TextMaxLine)