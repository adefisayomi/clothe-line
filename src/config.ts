import {initializeApp, type FirebaseOptions} from 'firebase/app'
import { firebaseConfig } from './constants';

export const app = initializeApp(firebaseConfig as FirebaseOptions);