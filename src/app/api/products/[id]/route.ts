import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params: { id } }: { params: { id: string } }) {
    const res = await fetch(`http://localhost:5340/api/products/${id}`)
    const data = await res.json();
    if (data.error) {
        return NextResponse.error();
    }
    return NextResponse.json({ data });
}