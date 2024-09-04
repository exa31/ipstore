import axios from "axios";
import { cookies } from "next/headers";

import { NextResponse } from "next/server";

export async function middleware(request: Request) {
    const cookie = cookies().get('jwt')
    try {
        const res = await axios.post(`${process.env.API_ENDPOINT_USER}/auth/validation`, {
            token: cookie?.value
        })
        if (res.data.status === 401) {
            const response = NextResponse.redirect(new URL('/login', request.url));
            response.cookies.set('next-auth.session-token', '', { path: '/', expires: new Date(0) });
            response.cookies.set('next-auth.csrf-token', '', { path: '/', expires: new Date(0) });
            cookies().delete('jwt')
            return response;
        } else {
            return NextResponse.next()
        }
    } catch (error) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: ['/cart', '/checkout/:path*'],
}