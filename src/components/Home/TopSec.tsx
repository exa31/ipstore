import Image from "next/image";
import Link from "next/link";

export default function TopSec() {
    return (
        <>
            <div className="bg-[#211c24] 2xl:justify-center w-full lg:flex-row flex-col flex items-center" >
                <div className="flex flex-col lg:text-start text-center lg:pt-0 pt-6 me-10 ms-6 2xl:ms-0">
                    <h3 className="text-zinc-600 text-[25px]">Pro.Beyond.</h3>
                    <h1 className="text-[96px] text-white font-bold"><span className="font-thin">IPhone 14</span> Pro</h1>
                    <p className="text-[18px] text-zinc-600">Created to change everything for the better. For everyone</p>
                    <Link href={'/shop?category=iPhone'} className="bg-transparent border mx-auto lg:mx-0 py-3 rounded-lg border-white w-max px-14 mt-4 text-white">Shop Now</Link>
                </div>
                <Image src="/images/ip-home.png" className="lg:me-40 me-0" width={406} height={632} alt="Hero" />
            </div>
            <div className="grid lg:grid-cols-2">
                <div className="grid grid-cols-2">
                    <div className="col-span-2 order-1 lg:order-[0]">
                        <div className="flex lg:flex-row lg:pt-0 pt-6 flex-col items-center">
                            <Image src="/images/imac.webp" className="h-full lg:pb-0 pb-6" width={380} height={343} alt="Hero" />
                            <div className="flex justify-center w-full flex-col lg:text-start text-center px-10 pb-6">
                                <h3 className="text-5xl font-medium">iMac</h3>
                                <p className="text-sm font-medium mt-4 text-gray-700">The new iMac brings powerful performance and a stunning 4.5K Retina display in a sleek, all-in-one design. Perfect for both work and play.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:items-start items-center lg:col-span-1 col-span-2 z-10 bg-gray-100">
                        <Image src={"/images/headph-home.png"} width={400} className="w-max grow-0 h-80 py-8 lg:-translate-x-36" height={272} alt="headphone" />
                        <div className="w-full my-auto lg:-translate-x-24 pb-6 lg:text-start text-center">
                            <h3 className="text-3xl font-light">Apple AirPods <span className="font-medium">Max</span></h3>
                            <p className="text-gray-700 mt-2">{"Computational audio. Listen, it's powerful"}</p>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col  bg-stone-700 lg:col-span-1 col-span-2 items-center">
                        <Image src="/images/vp-home.png" className="h-max lg:w-44 w-96 lg:-translate-x-24" width={136} height={190} alt="Hero" />
                        <div className="flex lg:text-start text-center pb-6 flex-col lg:-translate-x-16">
                            <h3 className="text-3xl text-white font-light">Apple Vision <span className="font-medium">Pro</span></h3>
                            <p className="text-stone-400 mt-2 text-sm">An immersive way to experience entertainment</p>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col-reverse items-center overflow-hidden bg-stone-200">
                    <div className="flex justify-center lg:text-start lg:ms-10 text-center flex-col">
                        <h3 className="text-[64px] font-medium"><span className="font-thin">Mackbook</span> Air</h3>
                        <p className="text-sm text-gray-700">{'The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.'}</p>
                        <Link href={'/shop?category=MackBook'} className="bg-transparent w-max border border-black py-3 mt-4 px-14 rounded-lg lg:mx-0 mx-auto mb-6">Shop Now</Link>
                    </div>
                    <Image src="/images/mac-home.png" className="lg:translate-x-36 h-full" width={400} height={400} alt="Hero" />
                </div>
            </div>
        </>
    )
}