import Image from "next/image";
import QuantityInput from "./QuantityInput";
import { useContext } from "react";
import { CartProvider } from "@/context";
import axios from "axios";

interface CartItems {
    product: {
        _id: string;
        name: string;
        price: number;
        image_thumbnail: string;
    }
    quantity: number;
}

export default function ListCart({ data }: { data: CartItems }) {

    const cartContext = useContext(CartProvider);
    const { cart, setCart } = cartContext!;

    const removeItem = async () => { }

    const handleDecrement = async () => {
        const res = await axios.post('/api/cart/reduce', {
            productId: data.product._id,
            quantity: 1
        })
        if (res.status === 200) {
            cart.map((item: CartItems) => {
                if (item.product._id === data.product._id && item.quantity > 1) {
                    const newCart = cart.map((item: CartItems) => {
                        if (item.product._id === data.product._id) {
                            return { product: item.product, quantity: item.quantity - 1 }!
                        } else {
                            return item
                        }
                    })
                    return setCart(newCart)
                } else {
                    const newCart = cart.filter((item: CartItems) => item.product._id !== data.product._id)
                    return setCart(newCart)
                }
            })
        } else {
            return
        }
    }

    const handleIncrement = async () => {
        const res = await axios.post('/api/cart/add', {
            productId: data.product._id,
            quantity: 1
        })
        if (res.status === 200) {
            const existProduct = cart.find((item) => item.product._id === data.product._id)
            if (existProduct) {
                const newCart = cart.map((item: CartItems) => {
                    if (item.product._id === data.product._id) {
                        return { product: item.product, quantity: item.quantity + 1 }!
                    } else {
                        return item
                    }
                })
                return setCart(newCart)
            } else
                return setCart([...cart, { product: data.product, quantity: 1 }])
        } else {
            return
        }
    }

    return (
        <div className="flex gap-8">
            <Image className="w-40" width={500} height={500} src={`http://localhost:5340/images${data.product.image_thumbnail}`} alt={data.product.image_thumbnail} />
            <div>
                <h1>{data.product.name}</h1>
                <p>{data.product._id}</p>
            </div>
            <QuantityInput quantity={data.quantity} />
        </div>
    )
}