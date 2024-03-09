


export const __dev = process.env.NODE_ENV === 'development'


export const errorMessage = (message: string) => {
    const payload = {
        success: false,
        data: null,
        message
    }
    if (__dev) console.log(payload)
    return payload
}

export const FLUTTERWAVE_PUBLIC_KEY= process.env.FLUTTERWAVE_PUBLIC_KEY!
export const CLIENT_SECRET='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'
export const CLIENT_ID='354404953427-durkgrhtbru2kuuroq2jnvv1q59lhedn.apps.googleusercontent.com'
export const firebaseConfig = process.env.firebaseConfig