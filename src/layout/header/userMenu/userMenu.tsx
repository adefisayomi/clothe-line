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
              <Avatar className=" border-2 border-muted rounded-full w-9 h-9 ">
                <AvatarImage src={user?.photoURL!} alt={user?.displayName!} />
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
  