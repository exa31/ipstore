"use client"

import ListCart from "@/components/cart/ListCart";
import OrderSummary from "@/components/cart/OrderSummary";
import { CartProvider } from "@/context";
import Link from "next/link";
import { useContext } from "react";

export default function Cart() {

    const cartContext = useContext(CartProvider);
    const { cart, setCart } = cartContext!;

    const subTotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

    return (
        <>
            {
                cart.length === 0 ?
                    <div className="flex w-max mx-auto mt-20 items-center flex-col">
                        <p className="text-black mb-4 text-4xl font-semibold">Cart is empty</p>
                        <Link href={'/shop'} className="block text-center rounded-lg w-full bg-black p-4 text-sm font-medium transition hover:scale-105 text-white border-2 border-black" >Go To Shop</Link>
                    </div> :
                    <div className="flex mx-auto my-10 container">
                        <div className="border-e p-8 border-e-gray-200 border-b border-t border-t-gray-100 border-b-gray-100">
                            <h1 className="font-semibold mb-8 text-2xl">Shopping Cart</h1>
                            <div className="flex pe-8 flex-col max-h-[500px] gap-8 overflow-y-auto ">
                                {cart.map((item, index) => {
                                    return (
                                        <ListCart data={item} key={index} />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="border p-14 border-gray-200 border-b border-t border-t-gray-100 border-b-gray-100">
                            <OrderSummary subTotal={subTotal} />
                        </div>
                    </div>
            }
        </>
    )
}   