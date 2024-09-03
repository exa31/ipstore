import { cookies } from 'next/headers';
import { config } from '../../../../middleware';
import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';

export const GET = async (req: NextRequest, { params: { id } }: { params: { id: string } }) => {
    const token = cookies().get('jwt');
    const config = {
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token?.value}`
        }
    };
    try {
        const res = await fetch(`${process.env.API_ENDPOINT_DATA}/delivery-addresses/${id}`, config);
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.error();
    }
}

export const PUT = async (req: NextRequest, { params: { id } }: { params: { id: string } }) => {
    const token = cookies().get('jwt');
    const config = {
        headers: {
            Authorization: `Bearer ${token?.value}`
        }
    };
    try {
        const payload = await req.json();
        const { data } = await axios.put(`${process.env.API_ENDPOINT_DATA}/delivery-addresses/${id}`, payload, config);
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.error();
    }
};

export const DELETE = async (req: NextRequest, { params: { id } }: { params: { id: string } }) => {
    const token = cookies().get('jwt');
    const config = {
        headers: {
            Authorization: `Bearer ${token?.value}`
        }
    };
    try {
        const { data } = await axios.delete(`${process.env.API_ENDPOINT_DATA}/delivery-addresses/${id}`, config);
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.error();
    }
};