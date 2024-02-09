import { Toaster } from "sonner"
import { useTheme } from "next-themes"


export type ToastType = "success" | "info" | "warning" | "error"







export default function CustomToast () {

  const {theme} = useTheme()
  
    return (
        <Toaster
          position="top-right"
          richColors
          theme={theme}
          toastOptions={{
            cancelButtonStyle: {
              fontSize: '14px',
              background: 'none',
            }
          }}
        />
    )
}