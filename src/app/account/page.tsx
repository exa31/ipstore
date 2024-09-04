'use client';

import { useSession } from "next-auth/react";

export default function Profile() {

    const { data } = useSession();

    return (
        <div className="flex flex-col w-full">
            <div className="py-8 border-2">
                <h1 className="text-center  text-4xl font-bold">Profile</h1>
            </div>
            <div>
                <div className="flex flex-row mx-10 justify-between">
                    <div className="w-1/2">
                        <p className="text-2xl py-4 border-b-2 font-semibold">Name</p>
                        <p className="text-lg py-4">{data?.user?.name}</p>
                    </div>
                    <div className="w-1/2">
                        <p className="text-2xl py-4 border-b-2 font-semibold">Email</p>
                        <p className="text-lg py-4">{data?.user?.email}</p>
                    </  div>
                </div>
            </div>
        </div>
    )
};