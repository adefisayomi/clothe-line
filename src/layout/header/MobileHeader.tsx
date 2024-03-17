import Logo from "@/src/components/Logo"
import UserMenu from "./userMenu/userMenu"
import {
  LogOut,
  Settings,
  SunMoon,
  User,
  Minus,
  Plus
} from "lucide-react"

import {
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
} from "@/src/components/ui/dropdown-menu"
import { ToggleThemeMode } from "@/src/components/themeProvider"
import Link from "next/link"
import Routes from "@/src/Routes"
import useAuth from "@/src/hooks/useAuth"
import { NavMenuItems } from "./NavMenu"

  
  export default function MobileHeader () {


    return (
        <div className="w-full flex items-center p-2 justify-between">
            <div className="flex-1"><Logo /></div>

            <div className="w-fit">
              <UserMenu component={<DropDownComponent />} />
            </div>
        </div>
    )
  }
  


  
function DropDownComponent() {

  const {signOut} = useAuth()

    return (
        <DropdownMenuContent className="w-52 overflow-y-auto max-h-[70vh]">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <Link href={Routes.profile}>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            </Link>

            <Link href={Routes.setting}>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            </Link>
            
          </DropdownMenuGroup>

          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Plus className="mr-2 h-3 w-3" />
                <span>Menu</span>
              </DropdownMenuSubTrigger>
              
              <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {
                  NavMenuItems.map((item, index) => (
                    
                      <Link href={item.link} key={index}>
                        <DropdownMenuItem className="capitalize text-xs border-b border-muted py-2 rounded-none">
                          <Plus className="mr-2 h-2 w-2" />
                          <span>{item.name}</span>
                        </DropdownMenuItem>
                      </Link>
                   
                  ))
                }
                 </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>


          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <SunMoon className="mr-2 h-4 w-4" />
                <span>Theme mode</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <ToggleThemeMode />
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={signOut}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
    )
  }
  