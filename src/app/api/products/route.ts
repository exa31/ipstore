import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {

    const category = req.nextUrl.searchParams.get('category')
    const skip = req.nextUrl.searchParams.get('skip')
    const q = req.nextUrl.searchParams.get('q')
    const limit = req.nextUrl.searchParams.get('limit')
    const response = await fetch(`http://localhost:5340/api/products?limit=${limit}&skip=${skip}&category=${category || ''}&q=${q || ''}`)
    const data = await response.json()
    if (!data) {
        return NextResponse.error()
    }
    return NextResponse.json(data)
}
