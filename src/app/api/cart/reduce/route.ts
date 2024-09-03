import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface Data {
    productId: string
}

export const POST = async (req: NextRequest) => {
    const token = cookies().get('jwt')
    const data: Data = await req.json()
    const config = {
        headers: {
            Authorization: `Bearer ${token?.value}`
        }
    }
    try {
        const res = await axios.post(`${process.env.API_ENDPOINT_DATA}/carts/reduce`, {
            productId: data.productId
        }, config)
        return NextResponse.json({ message: 'Item reduced from cart', data: res.data })
    } catch (e) {
        return NextResponse.error()
    }
}