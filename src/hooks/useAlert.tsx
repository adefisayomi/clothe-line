import { ToastType } from '@/src/components/CustomToast';
import { toast } from 'sonner'


export default function useAlert () {

    const setAlert = (message: string, variant?: ToastType) => {
        if (variant) return toast[variant](message)
        return toast(message, {duration: 4000})
    }

    return {setAlert}
}