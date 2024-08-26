'use client';
import { useEffect, useState } from "react";

import SideBar from "@/components/shop/SideBar";
import { usePathname } from "next/navigation";

interface categoriesType {
    name: string;
    id: string;
}

export default function ShopLayouts({ children }: { children: React.ReactNode }) {

    const [categories, setCategories] = useState<categoriesType[]>([]);

    const pathname = usePathname();

    useEffect(() => {
        const categories = async () => {
            const res = await fetch('http://localhost:5340/api/categories');
            const data = await res.json();
            setCategories(data);
        }
        categories();
    }, []);

    return (
        <div className="flex container mx-auto">
            {
                pathname === '/shop' && <div><SideBar categories={categories} /></div>
            }
            {children}
        </div >
    );
}