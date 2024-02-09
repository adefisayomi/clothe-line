import { ToastType } from '@/components/CustomToast';
import { Toaster, toast } from 'sonner'


export default function useAlert () {

    const setAlert = (message: string, variant?: ToastType) => {
        if (variant) return toast[variant](message)
        return toast(message)
    }

    return {setAlert}
}