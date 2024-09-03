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

export interface Address {
    address: string;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
}

export interface Discount {
    discount: number;
    setDiscount: React.Dispatch<React.SetStateAction<number>>;
}

export const CartProvider = createContext<CartType | null>(null);

export const AddressProvider = createContext<Address | null>(null);

export const DiscountProvider = createContext<Discount | null>(null);