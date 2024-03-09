import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import {
  DropdownMenuItem,
  DropdownMenuSubContent,
} from "./ui/dropdown-menu"
 

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
        {children}
    </NextThemesProvider>
  )
}



export function ToggleThemeMode () {
  const { setTheme } = useTheme()

  return (
    <DropdownMenuSubContent>
    <DropdownMenuItem onClick={() => setTheme('dark')}>
      <Moon className="mr-2 h-4 w-4" />
      <span>Dark mode</span>
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme('light')}>
      <Sun className="mr-2 h-4 w-4" />
      <span>Light mode</span>
    </DropdownMenuItem>
  </DropdownMenuSubContent>
  )
}
