'use client';
import { useEffect, useState } from "react";

import SideBar from "@/components/shop/SideBar";
import { usePathname } from "next/navigation";

interface categoriesType {
    name: string;
    id: string;
}

export default function ShopLayouts({ children }: { children: React.ReactNode, }) {

    const [categories, setCategories] = useState<categoriesType[]>([]);

    const pathname = usePathname();

    useEffect(() => {
        const categories = async () => {
            const res = await fetch('/api/categories');
            const data = await res.json();
            setCategories(data);
        }
        categories();
    }, []);

    return (
        <div className="flex px-4 mt-10 items-center sm:items-start container sm:mx-auto flex-col sm:flex-row">
            {
                pathname === '/shop' && <SideBar categories={categories} />
            }
            {children}
        </div >
    );
}