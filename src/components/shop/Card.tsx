'use client'

import Image from "next/image";
import { CardProps } from "../type";
import { formatRupiah } from "@/helper/index";
import { IoIosHeartEmpty } from "react-icons/io";
import { useState } from "react";
import { FcLike } from "react-icons/fc";
import Link from "next/link";

export default function CardShop({ data }: { data: CardProps }) {

    const [isFavorite, setIsFavorite] = useState(false)

    const handleLike = (e: React.MouseEvent<SVGAElement>): void => {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
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
                src={`http://localhost:5340/images${data.image_thumbnail}`}
                alt={data.name}
                width={500}
                priority={true}
                height={500}
                className="h-96 w-96 object-contain transition duration-500 group-hover:scale-105 p-0 overflow-hidden sm:h-72"
            />

            <div className="relative p-6 text-center">

                <h3 className="mt-4 text-lg font-medium text-gray-900">{data.name}</h3>

                <p className="mt-1.5 text-2xl font-semibold text-gray-700">{formatRupiah(data.price)}</p>

                <div className="mt-4 flex flex-col gap-5 justify-center">
                    <Link href={`/shop/${data._id}`}
                        className="block rounded-lg w-full bg-transparent p-4 text-sm font-medium transition hover:scale-105 text-black border-2 border-black"
                    >
                        See detail
                    </Link>
                    <button
                        className="block rounded-lg w-full bg-black p-4 text-sm font-medium transition hover:scale-105 text-white"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}