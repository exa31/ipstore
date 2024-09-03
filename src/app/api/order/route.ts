import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
    const body = await req.json()
    const token = cookies().get('jwt')
    const config = {
        headers: {
            Authorization: `Bearer ${token?.value}`
        }
    }
    try {
        const { data } = await axios.post(`${process.env.API_ENDPOINT_DATA}/orders`, body, config)
        return NextResponse.json(data)
    } catch (error) {
        console.log(error)
        return NextResponse.error()
    }
};

export const GET = async (req: NextRequest, res: NextResponse) => {
    const token = cookies().get('jwt')
    const config = {
        headers: {
            Authorization: `Bearer ${token?.value}`
        }
    }
    try {
        const { data } = await axios.get(`${process.env.API_ENDPOINT_DATA}/orders`, config)
        return NextResponse.json(data)
    } catch (error) {
        console.log(error)
        return NextResponse.error()
    }
}