"use client"

import { useEffect, useState } from "react";
import Card from "./tabContent/Card";
import { CardProps } from "../type";

export default function DiscountSec() {

    const [data, setData] = useState<CardProps[]>([])

    useEffect(() => {
        fetch('/api/products?limit=4&skip=15').then(res => res.json()).then(data => {
            setData(data.products)
        }).catch(err => {
            throw new Error("Something went wrong: " + err) as Error

        })
    }, [])

    return (
        <div className="container px-14 mx-auto">
            <div className="flex flex-col items-center mt-20 justify-center gap-4">
                <h1 className="text-4xl font-bold text-center text-gray-900">Discount</h1>
                <p className="text-lg text-center text-gray-700">Get discount up to 50% for this items</p>
                <div className="container gap-4 mt-4 mx-auto grid grid-cols-4">
                    {data.map((item: CardProps, index: number) => {
                        return (
                            <Card key={index} data={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}