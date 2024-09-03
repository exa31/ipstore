'use client'

import { DiscountProvider } from "@/context";
import { formatRupiah } from "@/helper";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react";

interface OrderSummaryProps {
    subTotal: number
}

interface EventTargetCheckCode extends FormEvent<HTMLFormElement> {
    target: HTMLFormElement & {
        code: {
            value: string;
        };
    }
}

export default function OrderSummary({ subTotal }: OrderSummaryProps) {

    const [isDiscount, setIsDiscount] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const dicsountProvider = useContext(DiscountProvider)
    const { setDiscount } = dicsountProvider!


    const checkCode = (e: EventTargetCheckCode) => {
        e.preventDefault()
        if (e.target.code.value.toUpperCase() === 'DISCOUNT') {
            setIsDiscount(true)
            setError(false)
        } else {
            setError(true)
            e.target.code.value = ''
        }
    }

    const tax = 200000
    const shipping = 20000
    const total = subTotal + tax + shipping
    const afterDiscount = total / 4


    return (
        <div>
            <h1 className="font-bold mb-8 text-2xl">Order Summary</h1>
            <label className="form-control w-full max-w-xs ">
                <div className="label">
                    <span className="label-text">Discount code / Promo code</span>
                </div>
                {isDiscount && <span className="text-green-500">Discount applied</span>}
                {error && <span className="text-red-500">Invalid code</span>}
                <form className="flex border py-3 px-6 " onSubmit={checkCode}>
                    <input type="text" name="code" placeholder="Code" className="uppercase outline-none w-full max-w-xs" />
                    <button type="submit" className=" border-s border-s-gray-600 ps-3">Check</button>
                </form>
            </label>
            <div className="flex justify-between items-center mt-4">
                <span className="text-lg">Subtotal</span>
                <span className="text-lg font-semibold">{formatRupiah(subTotal)}</span>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span className="text-lg">Tax</span>
                <span className="text-lg font-semibold">{formatRupiah(tax)}</span>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span className="text-lg">Shipping & Handling</span>
                <span className="text-lg font-semibold">{formatRupiah(shipping)}</span>
            </div>
            {isDiscount &&
                <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-semibold">Discount</span>
                    <span className="text-lg font-semibold">{formatRupiah(afterDiscount)}</span>
                </div>
            }
            <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg font-semibold">{formatRupiah(isDiscount ? total - afterDiscount : total)}</span>
            </div>
            <Link href="/checkout/address"
                onClick={() => setDiscount(isDiscount ? afterDiscount : 0)}
                className="block mt-6 text-center rounded-lg w-full bg-black p-4 text-sm font-medium transition hover:scale-105 text-white border-2 border-black"
            >
                Checkout
            </Link>
        </div >
    )
}