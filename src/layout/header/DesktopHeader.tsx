import Logo from "@/components/Logo";
import UserMenu from "./userMenu/userMenu";
import Cart from "@/src/cart";




export default function DesktopHeader () {

    return (
        <div className="w-full flex flex-col">
            <div className="w-full flex items-center justify-between">
                <Logo />

                <div className="flex items-center gap-3">
                    <UserMenu />
                    <Cart />
                </div>
            </div>
        </div>
    )
}