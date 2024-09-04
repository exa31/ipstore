'use client'

import ListOrder from "@/components/checkout/ListOrder";
import PaymentSummary from "@/components/checkout/PaymentSummary";
import { AddressProvider, CartProvider } from "@/context";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Payment() {

    const cartProvider = useContext(CartProvider);
    const addressProvider = useContext(AddressProvider);
    const { address, setAddress } = addressProvider!;
    const { cart, setCart } = cartProvider!;

    const subTotal = cart.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
    }, 0);

    return (
        <div>
            <h3 className="text-3xl font-semibold my-10">Summary</h3>
            <div className="grid grid-cols-2">
                <div className="max-h-[500px] gap-8 overflow-y-auto ">
                    {cart.map((item, index) => {
                        return (
                            <ListOrder data={item} key={index} />
                        )
                    })}
                </div>
                <PaymentSummary setCart={setCart} subTotal={subTotal} setAddress={setAddress} addressId={address} />
            </div>
        </div>
    )
};