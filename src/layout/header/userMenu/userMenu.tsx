import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/src/components/ui/avatar"
  import {
    DropdownMenu,
    DropdownMenuTrigger,
  } from "@/src/components/ui/dropdown-menu"
import { useSettings } from "@/src/hooks"
import { ReactNode } from "react"
import Link from "next/link"
import Routes from "@/src/Routes"
import { Button } from "@/src/components/ui/button"
import { useRouter } from "next/router"




  
  export default function UserMenu ({component}: {component: ReactNode}) {

    const {user} = useSettings()
    const router = useRouter()
    const restrictedRoutes = ['login', 'signup']

    return (
      <>
      {
        !restrictedRoutes.includes(router.asPath.split('/').pop()!) ? !user ? (
          <Link href={Routes.login}>
            <Button variant='link' >
              Login
            </Button>
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Avatar className=" border-2 border-muted rounded-full w-10 h-10 p-[2px]">
                <AvatarImage src={user?.photoURL!} alt={user?.displayName!} className="w-10 h-10 object-cover rounded-full border-2 p-[2px]" />
                <AvatarFallback className="bg-background text-lg uppercase" >{user?.displayName?.slice(0, 2)}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            {component ? component : null}
          </DropdownMenu>
        ) : null
      }
      </>
      
    )
  }
  