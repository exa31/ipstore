import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const token = cookies().get('jwt')
    const config = {
        headers: {
            Authorization: `Bearer ${token?.value}`
        }
    }
    try {
        const res = await axios.get('http://localhost:5340/api/carts', config)
        return NextResponse.json(res.data)
    } catch (e) {
        return NextResponse.error()
    }
};