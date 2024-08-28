import { createContext } from "react";
interface CartItems {
    product: {
        _id: string;
        name: string;
        price: number;
        image_thumbnail: string;
    }
    quantity: number;
}[];


export interface CartType {
    cart: CartItems[];
    setCart: React.Dispatch<React.SetStateAction<CartItems[]>>;
}

export const CartProvider = createContext<CartType | null>(null);