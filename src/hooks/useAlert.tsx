import { ToastType } from '@/src/components/CustomToast';
import { ReactNode } from 'react';
import { toast } from 'sonner'


export default function useAlert () {

    const setAlert = (message: any, variant?: ToastType) => {
        if (variant) return toast[variant](message)
        return toast(message, {duration: 10000})
    }

    const setPrompt = (component: ReactNode) => {
        return toast(component, {duration: 50000000, unstyled: true, classNames: {toast: 'bg-slate-100 p-2, w-full max-w-lg'}})
    }

    return {setAlert, setPrompt}
}
