'use client'

import Image from "next/image";
import { CardProps } from "../type";
import { formatRupiah } from "@/helper/index";
import { IoIosHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CardLikes({ data, removeFavorite }: { data: CardProps, removeFavorite: (id: string) => void }) {

    const [isFavorite, setIsFavorite] = useState(true)
    const { status } = useSession()
    const router = useRouter()

    const handleLike = (e: React.MouseEvent<SVGAElement>): void => {
        setIsFavorite(false)
        removeFavorite(data._id)
    };

    return (
        <div className="group relative block overflow-hidden rounded-lg bg-slate-100">
            <button
                className="z-10 w-full rounded-full text-gray-900 transition hover:text-gray-900/75"
            >
                {isFavorite ?
                    <FcLike onClick={handleLike} className="ms-auto my-2 hover:cursor-pointer me-4 text-2xl " />
                    :
                    <IoIosHeartEmpty onClick={handleLike} className="ms-auto hover:cursor-pointer text-black my-2 me-4 text-2xl " />
                }
            </button>

            <Image
                src={`https://backend-store-apple.vercel.app/images${data.image_thumbnail}`}
                alt={data.name}
                width={500}
                height={500}
                className="h-96 w-96 object-contain transition duration-500 group-hover:scale-105 p-0 overflow-hidden sm:h-72"
            />

            <div className="relative p-6 text-center">

                <h3 className="mt-4 text-lg font-medium text-gray-900">{data.name}</h3>

                <p className="mt-1.5 text-2xl font-semibold text-gray-700">{formatRupiah(data.price)}</p>

                <form className="mt-4 flex justify-center">
                    <Link href={`/shop/${data._id}`}
                        className="block rounded-lg w-full bg-black p-4 text-sm font-medium transition hover:scale-105 text-white"
                    >
                        See Detail
                    </Link>
                </form>
            </div>
        </div>
    )
}