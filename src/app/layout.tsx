'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import { SearchQueryContext } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname: string = usePathname();
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <SessionProvider>
          <AntdRegistry >
            {pathname !== '/login' && pathname !== '/register' && <div className={`sticky top-0 z-40 w-full `} ><Navbar /></div>}
            {children}
            <div className="mt-auto">
              {pathname !== '/login' && pathname !== '/register' && <Footer />}
            </div>
          </AntdRegistry>
        </SessionProvider>
      </body>
    </html>
  );
}
