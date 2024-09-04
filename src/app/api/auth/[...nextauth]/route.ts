import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { cookies } from "next/headers"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios"

const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req): Promise<any> {
                const login = await axios.post(`${process.env.API_ENDPOINT_USER}/login`, {
                    email: credentials?.email,
                    password: credentials?.password,
                })
                const data = login.data
                if (!data.token) {
                    return null
                } else {
                    const expires = new Date();
                    expires.setMonth(expires.getMonth() + 1);
                    cookies().set('jwt', data.token, { secure: true, sameSite: 'strict', path: '/', expires });
                    const user = { name: data.name, email: credentials?.email }
                    return user
                }
            }
        })
        // ...add more providers here
    ],
    callbacks: {
        async signIn({ account, profile, }) {
            if (account?.provider === 'credentials') {
                return true
            }
            if (account?.provider === 'google') {
                try {
                    const login = await fetch(`${process.env.API_ENDPOINT_USER}/signin`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: profile?.email,
                        })
                    })
                    const data = await login.json()
                    if (!data.token) {
                        return '/register'
                    }
                    profile!.name = data.name!
                    const expires = new Date();
                    expires.setMonth(expires.getMonth() + 1);
                    cookies().set('jwt', data.token, { secure: true, sameSite: 'strict', path: '/', expires });
                    return true
                } catch (error) {
                    return '/register'
                }
            }
            return false;
        },
        async redirect({ url, baseUrl }): Promise<string> {
            return baseUrl
        },
    },
    secret: process.env.SECRET,
    pages: {
        signIn: '/login',
        error: '/login',
        newUser: '/register'
    }
}


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };