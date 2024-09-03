import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params: { id } }: { params: { id: string } }) {
    const res = await fetch(`${process.env.API_ENDPOINT_DATA}/products/${id}`)
    const data = await res.json();
    if (data.error) {
        return NextResponse.error();
    }
    return NextResponse.json({ data });
}