'use client'

import { AddressProvider } from "@/context";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

export default function LayoutCheckout({ children }: { children: ReactNode }) {
    const [address, setAddress] = useState<string>('');
    const pathname = usePathname();

    return (
        <div className="container mx-auto">
            <div className="flex flex-col">
                <div className="flex justify-between  mt-10">
                    <div className={`flex items-center ${pathname === '/checkout/address' ? 'opacity-100' : 'opacity-30'}`}>
                        <div className="bg-black p-2 rounded-full me-2">
                            <FaMapMarkerAlt className="text-2xl text-white" />
                        </div>
                        <div className="flex flex-col">
                            <h5 className="text-lg font-medium">Step 1</h5>
                            <h4 className="text-2xl font-medium">Address</h4>
                        </div>
                    </div>
                    <div className={`flex items-center ${pathname === '/checkout/payment' ? 'opacity-100' : 'opacity-30'}`}>
                        <div className="bg-black p-2 rounded-full me-2">
                            <MdOutlinePayment className="text-2xl text-white" />
                        </div>
                        <div className="flex flex-col">
                            <h5 className="text-lg font-medium">Step 2</h5>
                            <h4 className="text-2xl font-medium">Payment</h4>
                        </div>
                    </div>
                </div>
            </div>
            <AddressProvider.Provider value={{ address, setAddress }}>
                {children}
            </AddressProvider.Provider>
        </div>
    )
};