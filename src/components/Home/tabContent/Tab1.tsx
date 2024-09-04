import { useEffect, useState } from "react"
import Card from "./Card"
import { CardProps } from "../../type"

interface DataProduct {
    products: CardProps[]
    count: number
    totalPage: number
}

export default function Tab1() {

    const [data, setData] = useState<CardProps[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/products?limit=8')
            const data: DataProduct = await res.json()
            setData(data.products)
        }
        fetchData()
    }, [])
    return (
        <div className="container gap-4 mx-auto grid lg:grid-cols-4 sm:grid-cols-2">
            {data.map((item: CardProps, index: number) => {
                return (
                    <Card key={index} data={item} />
                )
            })}
        </div>
    )
}