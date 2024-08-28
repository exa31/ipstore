"use client"

import ListCart from "@/components/cart/ListCart";
import { CartProvider } from "@/context";
import { useContext } from "react";

export default function Cart() {

    const cartContext = useContext(CartProvider);
    const { cart, setCart } = cartContext!;

    return (
        <div className="flex mx-auto my-10  container">
            <div className="h-[800px]">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <div className="flex  m-4 flex-col max-h-[750px] gap-8 overflow-y-scroll">
                    {cart.map((item, index) => {
                        return (
                            <ListCart data={item} key={index} />
                        )
                    })}
                </div>
            </div>
            <div>
                {/* Konten lainnya */}
            </div>
        </div>

    )
}   