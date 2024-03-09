import { CLIENT_ID, CLIENT_SECRET } from "@/src/constants"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import type {AuthOptions} from 'next-auth'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
    }),
  ]
} as AuthOptions

export default NextAuth(authOptions)