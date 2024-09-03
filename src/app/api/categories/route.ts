import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        const res = await fetch(`${process.env.API_ENDPOINT_DATA}/categories`);
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
};