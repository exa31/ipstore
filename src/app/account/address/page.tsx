'use client'
import axios from "axios";
import Link from "next/link";
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

export default function Address() {

    const [address, setAddress] = useState<Address[]>([]);
    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const res = await fetch('/api/delivery-address');
                if (!res.ok) {
                    throw new Error()
                }
                const data = await res.json();
                if (data.status === 404) {
                    return
                }
                setAddress(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAddress()
    }, []);

    function handleDelete(id: string) {
        axios.delete(`/api/delivery-address/${id}`).then((res) => {
            const newAddress = address.filter((data) => {
                return data._id !== id
            })
            setAddress(newAddress)
        }).catch((err) => new Error(err))
    }
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="py-8 border-2">
                    <h1 className="text-center text-4xl font-bold">Address</h1>
                </div>
                {address.length === 0 ?
                    <div className="text-center text-xl font-medium mt-10">
                        <div >
                            Maaf belum ada alamat yang dibuat
                        </div>
                        <div className="flex justify-center m-4">
                            <Link href='/account/address/create-alamat' className="px-8 py-4 rounded-xl bg-black text-white ">Create</Link>
                        </div>
                    </div>
                    :
                    < div className="max-h-screen mx-10 overflow-x-auto " >
                        <table className="table">
                            <thead className="text-2xl py-4 border-b-2 font-semibold">
                                <tr>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Alamat
                                    </th>
                                </tr>
                            </thead>
                            {address.map((data, index) =>
                                <tbody className="text-lg py-4" key={index}>
                                    <tr>
                                        <td>{data.name}</td>
                                        <td> Desa {data.kelurahan}, Kecamatan {data.kecamatan}, {data.kabupaten}, {data.provinsi}, {data.detail}</td>
                                        <div>
                                            <td><Link className="btn rounded-2xl px-8 btn-warning" href={`/account/address/edit-alamat/${data._id}`}>Edit</Link></td>
                                            <td><button className="btn rounded-2xl px-8 btn-warning" onClick={() => handleDelete(data._id)}>Delete</button></td>
                                        </div>
                                    </tr>
                                </tbody>
                            )}
                        </table>
                        <div className="flex justify-start m-4">
                            <Link href='/account/address/create-alamat' className="w-40 rounded-2xl text-white btn btn-primary">Create alamat</Link>
                        </div>
                    </div >
                }
            </div>
        </>
    )
};