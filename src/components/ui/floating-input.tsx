import { cn } from "@/src/lib/utils"
import * as React from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    component?: any
  }

const FloatingInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
        <div className="relative">
            <input
                placeholder=" "
                type={type}
                className={cn(
                "block h-11 w-full rounded-none border border-input bg-background py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 px-2.5 pb-2.5 pt-6  peer",
                className
                )}
                ref={ref}
                {...props}
            />
            <label htmlFor="floating_outlined" className="absolute text-xs text-gray-500 dark:text-gray-400 duration-100 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4rtl:peer-focus:left-auto start-1">
                {label}
            </label>
        </div>
    )
  }
)
FloatingInput.displayName = "FloatingInput"

const FloatingInputButton = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, component, ...props }, ref) => {
    return (
        <div className="relative">
            <input
                placeholder=" "
                type={type}
                className={cn(
                "block h-12 w-full rounded-md border border-input bg-background py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 px-2.5 pb-2.5 pt-6  peer",
                className
                )}
                ref={ref}
                {...props}
            />
            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-2 scale-75 top-2 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                {label}
            </label>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 mr-2">
                  {component}
            </div>
        </div>
    )
  }
)
FloatingInputButton.displayName = "FloatingInputButton"

export { FloatingInput, FloatingInputButton }