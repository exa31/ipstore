"use client"

import { useEffect, useState } from "react";
import { CardProps } from "../type";
import CardShop from "./Card";

export default function AnotherProducts({ category }: { category: string }) {

    const [data, setData] = useState<CardProps[]>([])

    useEffect(() => {
        fetch(`/api/products?limit=4&skip=0&category=${category}`).then(res => res.json()).then(data => {
            setData(data.products)
        }).catch(err => {
            throw new Error("Something went wrong: " + err) as Error
        })
    }, [category])

    return (
        <div className="container px-14 mx-auto">
            <div className="flex flex-col items-center mt-20 justify-center gap-4">
                <h1 className="text-4xl font-bold text-center text-gray-900">Related Products</h1>
                <div className="container gap-4 mt-4 mx-auto grid grid-cols-4">
                    {data.map((item: CardProps, index: number) => {
                        return (
                            <CardShop key={index} data={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}