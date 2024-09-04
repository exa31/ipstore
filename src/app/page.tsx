import Banner from "@/components/Home/banner";
import CategorySec from "@/components/Home/CategorySec";
import DiscountSec from "@/components/Home/DiscountSec";
import TabHomeSec from "@/components/Home/TabHomeSec";
import TopSec from "@/components/Home/TopSec";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cyber Apple Store",
  description: "Reseller Apple products",
  authors: [{ name: "Moh. Eka Syafrino Nazhifan" }]
};

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <TopSec />
        <CategorySec />
        <TabHomeSec />
        <DiscountSec />
        <Banner />
      </main>
    </>
  );
}
