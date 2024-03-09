import {getAuth, GoogleAuthProvider, signOut, getAdditionalUserInfo, signInWithPopup,deleteUser, signInWithEmailAndPassword,createUserWithEmailAndPassword, sendPasswordResetEmail, FacebookAuthProvider} from 'firebase/auth'
import { errorMessage } from '../constants'
import { getFirebaseError } from '../utils/firebaseErrors'
import useAlert from './useAlert'
import { app } from '../config'


export const auth = getAuth(app)
// 


async function handleSignOut (setAlert: any) {
    try {
        const currentUser = await auth.currentUser
        if (currentUser) {
            await signOut(auth)
            setAlert(` "👋 See you later buddy!"`)
            return;
        }
        else {
            return setAlert(`"But 😲 ! You are not logged in"`)
        }
    }
    catch(err: any) {
        const {message, code} = err
        setAlert(getFirebaseError(code) || message, 'error')
        return errorMessage(err)
    }
}

async function handleGoogleAuth (setAlert: any) {
    try {
        
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        // 
        const res = await signInWithPopup(auth, provider)
        const user = res.user;
        const isNewUser = getAdditionalUserInfo(res)?.isNewUser
        // 
        if (isNewUser) setAlert(`"Welcome onboard buddy!"`)
        setAlert(`"Welcome back ${user.displayName?.split(' ')[0]}"`)
        return ({
            success: true,
            message: `users data`,
            data: user
        })
    }
    catch(err: any) {
        const {message, code} = err
        setAlert(getFirebaseError(code) || message, 'error')
        return errorMessage(err)
    }
}



async function handleLoginWithEmailAndPassword (email: string, password: string, setAlert: any) {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        const user = res.user

        setAlert(`"Welcome back ${user.displayName ? user.displayName : 'buddy'} "`)
        return ({
            success: true,
            message: `welcome ${user.displayName}`,
            data: user
        })
    }
    catch(err: any) {
        const {message, code} = err
        setAlert(getFirebaseError(code) || message, 'error')
        return errorMessage(err)
    }
}


export async function handleSignupWithEmailAndPassword (email: string, password: string, setAlert: any) {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user

        setAlert(`"Welcome onboard buddy!"`)
        return ({
            success: true,
            message: `Logged in as ${user.displayName}`,
            data: user
        })
    }
    catch(err: any) {
        const {message, code} = err
        setAlert(getFirebaseError(code) || message, 'error')
        return errorMessage(err)
    }
}


async function sendResetPasswordLink (email: string, setAlert: any) {
    try {
        await sendPasswordResetEmail(auth, email)
        setAlert({message: `Password reset link sent to ${email}`})
        return ({
            success: true,
            email
        })
    }
    catch(err: any) {
        const {message, code} = err
        setAlert(getFirebaseError(code) || message, 'error')
        return errorMessage(err)
    }
}

// // 
// async function handleFacebookLogin (setAlert) {
//     try {
        
//         const provider = new FacebookAuthProvider();
//         provider.setCustomParameters({
//             'display': 'popup'
//           });
//         // 
//         const res = await signInWithPopup(auth, provider)
//         console.log(res)
//         const user = res.user; 
//         const isNewUser = getAdditionalUserInfo(res)?.isNewUser
//         const credentials = GoogleAuthProvider.credentialFromResult(res)
//         const token = credentials?.accessToken;
//         // 
//         if (isNewUser) {
//             await deleteUser(user)
//             setAlert(`Buddy 😉 ! You are new here.`)
//             return
//         }
//         setAlert(`Welcome 😊 ${user.displayName}`)
//         return ({
//             success: true,
//             message: `users data`,
//             data: user
//         })
//     }
//     catch(err) {
//         const {message, code} = err
//         setAlert(firebaseErrors[code] || message, 'error')
//         return errorMessage(err)
//     }
// }

export default function useAuth () {

    const {setAlert} = useAlert()

    return ({
        auth,
        signOut: () => handleSignOut(setAlert),
        googleAuth: () => handleGoogleAuth(setAlert),
        signinWithEmailAndPassword: (email: string, password: string) => handleLoginWithEmailAndPassword(email, password, setAlert),
        sendResetPasswordLink: (email: string) => sendResetPasswordLink(email, setAlert),
        signupWithEmailAndPassword: (email: string, password: string) => handleSignupWithEmailAndPassword(email, password, setAlert),
        // facebookLogin: () => handleFacebookLogin(setAlert)
    })
}