import Banner from "@/components/Home/banner";
import CategorySec from "@/components/Home/CategorySec";
import DiscountSec from "@/components/Home/DiscountSec";
import TabHomeSec from "@/components/Home/TabHomeSec";
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
        <div className="bg-[#211c24] hidden  2xl:justify-center w-full sm:flex items-center" >
          <div className="flex flex-col me-10 ms-auto 2xl:ms-0">
            <h3 className="text-zinc-600 text-[25px]">Pro.Beyond.</h3>
            <h1 className="text-[96px] text-white font-bold"><span className="font-thin">IPhone 14</span> Pro</h1>
            <p className="text-[18px] text-zinc-600">Created to change everything for the better. For everyone</p>
            <Link href={'/shop?category=iPhone'} className="bg-transparent border py-3 rounded-lg border-white w-max px-14 mt-4 text-white">Shop Now</Link>
          </div>
          <Image src="/images/ip-home.png" className="me-40" width={406} height={632} alt="Hero" />
        </div>
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-2">
            <div className="col-span-2">
              <div className="flex">
                <Image src="/images/imac.webp" className="h-full" width={380} height={343} alt="Hero" />
                <div className="flex justify-center me-10 flex-col">
                  <h3 className="text-5xl font-medium">iMac</h3>
                  <p className="text-sm font-medium mt-4 text-gray-700">The new iMac brings powerful performance and a stunning 4.5K Retina display in a sleek, all-in-one design. Perfect for both work and play.</p>
                </div>
              </div>
            </div>
            <div className="flex bg-gray-100">
              <Image src={"/images/headph-home.png"} width={104} className="w-max" height={272} alt="headphone" />
              <div className="flex justify-center ms-16 me-14 flex-col">
                <h3 className="text-3xl font-light">Apple AirPods <span className="font-medium">Max</span></h3>
                <p className="text-gray-700 mt-2">{"Computational audio. Listen, it's powerful"}</p>
              </div>
            </div>
            <div className="flex bg-stone-700 items-center">
              <Image src="/images/vp-home.png" className="h-max" width={136} height={190} alt="Hero" />
              <div className="flex ms-4 me-4 flex-col">
                <h3 className="text-3xl text-white font-light">Apple Vision <span className="font-medium">Pro</span></h3>
                <p className="text-stone-400 mt-2 text-sm">An immersive way to experience entertainment</p>
              </div>
            </div>
          </div>
          <div className="flex bg-stone-200">
            <div className="flex justify-center ms-10 flex-col">
              <h3 className="text-[64px] font-medium"><span className="font-thin">Mackbook</span> Air</h3>
              <p className="text-sm text-gray-700">{'The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.'}</p>
              <Link href={'/shop?category=MackBook'} className="bg-transparent w-max border border-black py-3 mt-4 px-14 rounded-lg">Shop Now</Link>
            </div>
            <Image src="/images/mac-home.png" className="h-full overflow-hidden" width={380} height={343} alt="Hero" />
          </div>
        </div>
        <CategorySec />
        <TabHomeSec />
        <DiscountSec />
        <Banner />
      </main>
    </>
  );
}
