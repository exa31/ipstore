'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { SessionProvider, signOut } from "next-auth/react";
import { CartProvider, DiscountProvider } from "@/context";
import { useState } from "react";
import Script from "next/script";

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
  const [discount, setDiscount] = useState<number>(0);

  const pathname: string = usePathname();

  return (
    <html className="scroll-smooth " lang="en">
      <head>
        <Script type="text/javascript"
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={process.env.MIDTRANS_CLIENT_KEY}></Script>
      </head>
      <body className={`${inter.className} `}>
        <DiscountProvider.Provider value={{ discount, setDiscount }}>
          <CartProvider.Provider value={{ cart, setCart }}>
            <SessionProvider>
              <AntdRegistry >
                <main className="flex flex-col min-h-screen">
                  {pathname !== '/login' && pathname !== '/register' && (
                    <div className={`sticky top-0 z-20 w-full `}>
                      <Navbar />
                    </div>
                  )}
                  {children}
                  <div className="mt-auto">
                    {pathname !== '/login' && pathname !== '/register' && <Footer />}
                  </div>
                </main>
              </AntdRegistry>
            </SessionProvider>
          </CartProvider.Provider>
        </DiscountProvider.Provider>
      </body>
    </html >
  );
}
