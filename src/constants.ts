


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
export const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "clace-fa078.firebaseapp.com",
    projectId: "clace-fa078",
    storageBucket: "clace-fa078.appspot.com",
    messagingSenderId: "323117669192",
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  }