import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import HeaderScrollingText from "./ScrollingHeader";
import useResponsive from "@/src/hooks/useResponsive";




export default function Header () {

    const isDesktop = useResponsive() === 'desktop'

    return (
        <div className="w-full relative flex flex-col gap-2 ">
            <HeaderScrollingText />
            {
                isDesktop ? 
                <div className="w-full max-w-9xl mx-auto py-2">
                    <DesktopHeader />
                </div>
                 : 
                 <div>
                    <MobileHeader />
                 </div>
            }
        </div>
    )
}
