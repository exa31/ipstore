'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { SessionProvider, signOut } from "next-auth/react";
import { CartProvider } from "@/context";
import { useState } from "react";

interface CartItems {
  product: {
    _id: string;
    name: string;
    price: number;
    image_thumbnail: string;
  }
  quantity: number;
}[];


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [cart, setCart] = useState<CartItems[]>([]);


  const pathname: string = usePathname();
  return (
    <html className="scroll-smooth " lang="en">
      <body className={`${inter.className} `}>
        <CartProvider.Provider value={{ cart, setCart }}>
          <SessionProvider>
            <AntdRegistry >
              <main className="flex flex-col">
                {pathname !== '/login' && pathname !== '/register' && <div className={`sticky top-0 z-40 w-full `} ><Navbar /></div>}
                {children}
              </main>
              <div className="mt-auto">
                {pathname !== '/login' && pathname !== '/register' && <Footer />}
              </div>
            </AntdRegistry>
          </SessionProvider>
        </CartProvider.Provider>
      </body>
    </html >
  );
}
