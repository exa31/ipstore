import Image from "next/image";
import QuantityInput from "./QuantityInput";
import { useContext } from "react";
import { CartProvider } from "@/context";
import axios from "axios";
import { formatRupiah } from "@/helper";
import { IoMdClose } from "react-icons/io";

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

    const handleRemove = async () => {
        const res = await axios.post('/api/cart/remove', {
            productId: data.product._id
        })
        if (res.status === 200) {
            const newCart = cart.filter((item: CartItems) => item.product._id !== data.product._id)
            return setCart(newCart)
        } else {
            return
        }
    }

    const handleDecrement = async () => {
        const res = await axios.post('/api/cart/reduce', {
            productId: data.product._id,
            quantity: 1
        })
        if (res.status === 200) {
            const product = cart.find((item) => item.product._id === data.product._id)!
            if (product.quantity === 1) {
                const newCart = cart.filter((item: CartItems) => item.product._id !== data.product._id)
                return setCart(newCart)
            } else {
                const newCart = cart.map((item: CartItems) => {
                    if (item.product._id === data.product._id) {
                        return { product: item.product, quantity: item.quantity - 1 }!
                    } else {
                        return item
                    }
                })
                return setCart(newCart)
            }
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
        <div className="flex md:gap-8 gap-4 flex-row items-center">
            <Image className="md:w-36 w-20" width={500} height={500} src={`https://backend-store-apple.vercel.app/images${data.product.image_thumbnail}`} alt={data.product.image_thumbnail} />
            <div className="flex md:flex-row flex-col md:gap-4">
                <div className='md:w-52'>
                    <h1 className="text-base font-medium">{data.product.name}</h1>
                    <p className="text-sm opacity-80">{data.product._id}</p>
                </div>
                <div className="flex md:flex-row flex-col md:items-center md:gap-4">
                    <QuantityInput quantity={data.quantity} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
                    <div className="flex items-center">
                        <h1 className="text-base w-32 p-2 font-medium">{formatRupiah(data.quantity * data.product.price)}</h1>
                        <IoMdClose onClick={handleRemove} className="w-10 hover:cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}