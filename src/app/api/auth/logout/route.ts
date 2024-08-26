import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
    const token = cookies().get('jwt');

    return axios.post('http://localhost:5340/auth/logout', {}, {
        headers: {
            Authorization: `Bearer ${token?.value}`
        }
    })
        .then(() => {
            cookies().delete('jwt');
            return NextResponse.json({ message: 'Logged out' });
        })
        .catch((error) => {
            console.error('Error during logout:', error);
            return NextResponse.json({ message: 'Logout failed', error: error.message }, { status: 500 });
        });
};