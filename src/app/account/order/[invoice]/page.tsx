'use client';

import { useEffect, useState } from "react";

interface Address {
    name: string,
    kelurahan: string,
    kecamatan: string,
    kabupaten: string,
    provinsi: string,
    detail: string,
    _id: string
}

interface Invoice {
    _id: string;
    user: {
        name: string,
        email: string
    };
    delivery_address: Address;
    quantity: number;
    total: number;
    tax: number;
    order: {
        token: string;
        order_items: {
            id: string,
            name: string,
            price: number,
            quantity: number
        }[];
    };
    payment_method: string;
    shipping: number;
    status_payment: string;
    discount: number;
    status_delivery: string;
};

export default function Invoice({ params: { invoice } }: { params: { invoice: string } }) {

    const [data, setData] = useState<Invoice>()!;
    useEffect(() => {
        fetch(`/api/invoice/${invoice}`, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => setData(data));
    }, [invoice]);
    return (
        <div className="container h-screen pt-12 mx-auto">
            < div className="container m-auto bg-base-200 rounded-2xl" >
                <div className="bg-base-300">
                    <h1 className="p-4 text-lg font-bold opacity-50 text-start">Invoices</h1>
                </div>
                <div className="p-12 overflow-x-auto">
                    <div className='grid grid-cols-2 gap-6'>
                        <h4 className='font-bold'>Payment Method</h4>
                        <p>{data?.payment_method}</p>
                        <h4 className='font-bold'>Status Payment</h4>
                        <p>{data?.status_payment}</p>
                        <h4 className='font-bold'>Order ID</h4>
                        <p>{data?._id}</p>
                        <h4 className='font-bold'>Total Amount</h4>
                        <p>{data?.total}</p>
                        <h4 className='font-bold'>Billed to</h4>
                        <div className="flex flex-col gap-6">
                            <div>
                                <h4>{data?.user.name}</h4>
                                <p>{data?.user.email}</p>
                            </div>
                            <div>
                                <p>Desa {data?.delivery_address.kelurahan}, Kecamatan {data?.delivery_address.kecamatan}, {data?.delivery_address.kabupaten}, {data?.delivery_address.provinsi}, {data?.delivery_address.detail}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}