import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface Data {
    productId: string,
    quantity: number
}

export async function POST(req: NextRequest) {
    const token = cookies().get('jwt')
    const data: Data = await req.json()
    const config = {
        headers: {
            Authorization: `Bearer ${token?.value}`
        }
    }
    if (!token) {
        return NextResponse.error()
    }
    try {
        const res = await axios.post('http://localhost:5340/api/carts', {
            productId: data.productId,
            quantity: data.quantity
        }, config)
        return NextResponse.json({ message: 'Item added to cart', data: res.data })
    } catch (e) {
        return NextResponse.error()
    }
}