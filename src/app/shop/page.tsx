"use client";

import { CardProps } from "@/components/type";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import CardShop from "@/components/shop/Card";
import PaginationShop from "@/components/shop/Pagination";
import { useSearchParams } from "next/navigation";



export default function Shop() {

    const searchParams = useSearchParams();
    const q = searchParams.get('q');
    const category = searchParams.get('category');
    const [details, setDetails] = useState({
        count: 0,
        products: [],
        totalPage: 1
    });
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setCurrentPage(1);
    }, [category]);

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

            {loading ? <Loading />
                : details.count === 0 ? <h1 className="text-2xl text-center text-gray-600 mx-auto mt-10 mb-10 font-medium">No Products Found</h1>
                    :
                    <div>
                        <h1 className="text-2xl text-gray-600 mt-10 mb-10 font-medium">Selected Products: <span className="font-semibold text-black">{details.count}</span></h1>
                        <div className="grid grid-cols-3 gap-4">
                            {
                                details.products.map((product: CardProps, index: number) => {
                                    return (
                                        <CardShop key={index} data={product} />
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