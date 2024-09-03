import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const token = cookies().get('jwt');
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token?.value}`
        }
    }
    try {
        const data = await fetch(`${process.env.API_ENDPOINT_USER}/user`, config);
        const user = await data.json();
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.error();
    }
}