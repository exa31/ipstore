"use client";

import { CardProps } from "@/components/type";
import { useEffect, useRef, useState } from "react";
import Loading from "./loading";
import CardShop from "@/components/shop/Card";
import PaginationShop from "@/components/shop/Pagination";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";




export default function Shop() {

    const [show, setShow] = useState(false);
    const { status } = useSession()
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const q = searchParams.get('q');
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

    const [details, setDetails] = useState({
        count: 0,
        products: [],
        totalPage: 1
    });
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [favorite, setFavorite] = useState<{ _id: string }[]>([]);

    useEffect(() => {
        setCurrentPage(1);
    }, [category, q]);

    if (show) {
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
        }
        timeoutIdRef.current = setTimeout(() => {
            setShow(false);
        }, 2000);
    }

    useEffect(() => {
        if (status !== 'authenticated') {
            return
        }
        const checkFavorite = async () => {
            try {
                const res = await fetch('/api/like')
                if (res.status === 200) {
                    const data = await res.json()
                    setFavorite(data)
                }
            } catch (error) {
                console.log(error)
                return
            }
        }
        checkFavorite()
    }, [status])

    useEffect(() => {
        setLoading(true);
        fetch(`/api/products?category=${category || ''}&limit=12&skip=${12 * (currentPage - 1)}&q=${q || ''}`).then(res => res.json()).then(data => {
            setDetails({
                count: data.count,
                products: data.products,
                totalPage: data.page
            })
            setLoading(false)
        })
    }, [category, currentPage, q]);
    return (
        <>

            {loading ? <>
                <div className="w-full">
                    <Loading />
                </div>
            </>
                : details.count === 0 ? <h1 className="text-2xl text-center text-gray-600 mx-auto mt-10 mb-10 font-medium">No Products Found</h1>
                    :
                    <div>
                        <div className={`fixed left-0 z-50 p-10 m-10 rounded-e-full bottom-0 text-white bg-slate-500 transition-all duration-300 ${show ? '-translate-x-0' : '-translate-x-[200%]'}`}>
                            Product Success Added to Cart 👍👍👍
                        </div>
                        <h1 className="text-2xl text-gray-600 mt-10 mb-10 font-medium">Selected Products: <span className="font-semibold text-black">{details.count}</span></h1>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                            {
                                details.products.map((product: CardProps, index: number) => {
                                    return (
                                        <CardShop key={index} setShow={setShow} product={product} favorite={favorite} />
                                    )
                                })
                            }
                        </div>
                        <PaginationShop currentPage={currentPage} onPageChange={setCurrentPage} totalPages={details.totalPage} />
                    </div>
            }
        </>
    )
}