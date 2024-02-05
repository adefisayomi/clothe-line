import {
    Cloud,
    CreditCard,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
    Menu
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Logo from "@/components/Logo"
import { ScrollArea } from "@/components/ui/scroll-area"
import UserMenu from "./userMenu/userMenu"
  
  export default function MobileHeader () {

    return (
        <div className="w-full flex items-center">
            <div className="flex-grow"><Logo /></div>

            <ScrollArea className="h-fit max-h-screen w-fit max-w-md">
            <UserMenu />
            </ScrollArea>
      </div>
    )
  }
  