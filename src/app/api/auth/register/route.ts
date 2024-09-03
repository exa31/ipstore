import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const data = await req.json()
    try {
        const res = await axios.post(`${process.env.API_ENDPOINT_USER}/register`, {
            email: data.email,
            password: data.password,
            name: data.name
        })
        return NextResponse.json(res.data)
    } catch (e) {
        return NextResponse.error()
    }
};