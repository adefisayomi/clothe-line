import { ReactNode } from "react"
import Header from "./header/header"
import Footer from "./footer/footer"



type PropsLayout = {
    children: ReactNode,
    disableHeader?: boolean,
    disableFooter?: boolean,
}

export default function Layout ({children, disableFooter=false, disableHeader=false}: PropsLayout) {

    return (
        <div className="w-full min-h-screen flex flex-col gap-2">
            <div className="mb-8">{ !disableHeader && <Header /> }</div>

            <div className="flex-grow w-full max-w-[95rem] mx-auto ">{children}</div>

            { !disableFooter && <div className="max-w-[95rem] mx-auto"><Footer /></div>}
        </div>
    )
}