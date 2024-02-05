import HeaderScrollingText from "./ScrollingHeader";
import useResponsive from "@/src/hooks/useResponsive";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";




export default function Header () {

    const isDesktop = useResponsive() === 'desktop'

    return (
        <div className="w-full relative flex flex-col gap-2 ">
            <HeaderScrollingText />

            <div className="p-1 md:p-2 w-full max-w-[95rem] mx-auto">
            {
                isDesktop ? (
                        <DesktopHeader />
                ) : (
                        <MobileHeader />
                )
            }
            </div>
        </div>
    )
}
