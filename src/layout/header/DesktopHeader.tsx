import Logo from "@/src/components/Logo";
import { Button } from "@/src/components/ui/button";
import Cart from "@/src/sections/cart";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu"
import React from "react";
import UserMenu from "./userMenu/userMenu";
import Routes from "@/src/Routes";
import { useRouter } from "next/router";
import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger } from "@/src/components/ui/dropdown-menu";
import { LogOut, Settings, SunMoon, User } from "lucide-react";
import useAuth from "@/src/hooks/useAuth";
import { ToggleThemeMode } from "@/src/components/themeProvider";
import { NavMenuItems } from "./NavMenu";




export default function DesktopHeader () {

  const router = useRouter()
  const restrictedRoutes = ['login', 'signup']

    return (
        <div className=" flex flex-col items-center ">

            <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-5">
                <Button variant='link' size='sm' className="p-0">
                    Nigeria $ / En
                </Button>

                <Link href={Routes.contact} className='text-xs hover:underline ' >
                    Contact us
                </Link>
            </div>
            <div ><Logo /></div>

            <div className="flex items-center gap-5">
              {
                !router.route.includes("checkout") && <Cart />
              }
              <UserMenu component={<DropDownComponent />} />
            </div>
            </div>

            {
              !restrictedRoutes.includes(router.asPath.split('/').pop()!) && <div className="mt-4"> <NavigationMenuComponent /></div>
            }

            
        </div>
    )
}





function NavigationMenuComponent() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="capitalize gap-3">
        {
          NavMenuItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <Link href={item.link} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.name}
                </NavigationMenuLink>
              </Link>
          </NavigationMenuItem>
          ))
        }

      </NavigationMenuList>
    </NavigationMenu>
  )
}

function DropDownComponent () {

  const {signOut} = useAuth()

  return (
    <DropdownMenuContent className="w-60">
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
