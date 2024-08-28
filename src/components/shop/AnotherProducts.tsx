/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useState } from "react";
import { CardProps } from "../type";
import CardShop from "./Card";

export default function AnotherProducts({ category }: { category: string }) {

    const [products, setProducts] = useState<CardProps[]>([])
    const [count, setCount] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true)
    const [skip, setSkip] = useState<number>(0)

    useEffect(() => {
        setLoading(true)
        fetch(`/api/products?limit=8&skip=${skip * 8}&category=${category}`).then(res => res.json()).then(data => {
            setProducts([...products, ...data.products])
            setCount(data.count)
            setLoading(false)
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }, [category, skip])

    return (
        <div className="container px-14 mx-auto">
            <div className="flex flex-col items-center mt-20 justify-center gap-4">
                <h1 className="text-4xl font-bold text-center text-gray-900">Related Products</h1>
                <div className="container mb-20 gap-4 mt-4 mx-auto grid grid-cols-4">
                    {products.map((item: CardProps, index: number) => {
                        return (
                            <CardShop key={index} product={item} />
                        )
                    })}
                </div>
            </div>
            <div className="flex justify-center mb-10">
                {loading ? <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                    :
                    <button className={`block rounded-lg  bg-transparent p-4 text-sm font-medium transition hover:scale-105 text-black border-2 ${products.length === count && 'hidden'} border-black`} onClick={() => {
                        setSkip(skip + 1)
                        setLoading(true)
                    }}>Load More</button>
                }

            </div>
        </div>
    )
}