import { ReactNode, useEffect } from "react"
import Header from "./header"
import Footer from "./footer/footer"
import { useSettings } from "../hooks"
import { useRouter } from "next/router"



type PropsLayout = {
    children: ReactNode,
    disableHeader?: boolean,
    disableFooter?: boolean,
}

export default function Layout ({children, disableFooter=false, disableHeader=false}: PropsLayout) {

   
    const {user} = useSettings()
    const router = useRouter()
    const restrictedRoutes = ['login', 'signup', 'resetPassword']
    useEffect(() => {
        const currentRoute = router.route.split('/').pop()
        if (user && restrictedRoutes.includes(currentRoute as string)) {
            router.push('/')
        }
    }, [user, router.route])

    return (
        <div className="w-full min-h-screen flex flex-col gap-2">
            { disableHeader ? null : <div className=""> <Header /> </div>}

            <div className="flex-grow">
                {children}
            </div>

            { disableFooter ? null : <div className="border-t border-muted mt-16"><Footer /></div>}
        </div>
    )
}