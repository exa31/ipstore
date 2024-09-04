'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LayoutProfile({
    children
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    return (
        <div className="flex mt-14 container min-h-screen w-full mx-auto">
            {!pathname.startsWith('/account/order/') &&
                <div className="border">
                    <div className="w-28 rounded-full mx-auto mt-10">
                        <Image
                            alt="Tailwind CSS Navbar component"
                            src="/images/avatar.png"
                            width={500}
                            className="rounded-full  w-full"
                            height={500} />
                    </div>
                    <div className="flex mt-10 items-center flex-col">
                        <Link className="px-10 py-2" href={'/account'}>Profile</Link>
                        <Link className="px-10 py-2" href={'/account/address'}>Address</Link>
                        <Link className="px-10 py-2" href={'/account/order'}>Order</Link>
                    </div>
                </div>
            }
            <div className="border w-full">
                {children}
            </div>
        </div>
    )
};