import Link from "next/link";
import { CgAppleWatch } from "react-icons/cg";
import { MdLaptopMac, MdOutlinePhoneIphone } from "react-icons/md";
import { TbDeviceAirpods, TbDeviceIpad } from "react-icons/tb";

export default function CategorySec(): JSX.Element {
    return (
        <div className="container mx-auto mt-20">
            <h3 className="font-medium text-2xl ms-14">Browse By Category</h3>
            <div className="grid grid-cols-5 mt-10 justify-items-center">
                <Link href={"/shop?category=iPhone"} className="py-10 w-40 rounded-2xl bg-stone-200 flex flex-col items-center">
                    <MdOutlinePhoneIphone className="text-5xl " />
                    <h5 className="text-base font-medium">iPhone</h5>
                </Link>
                <Link href={"/shop?category=iPad"} className="py-10 w-40 rounded-2xl bg-stone-200 flex flex-col items-center">
                    <TbDeviceIpad className="text-5xl" />
                    <h5 className="text-base font-medium">iPad</h5>
                </Link>
                <Link href={"/shop?category=MacBook"} className="py-10 w-40 rounded-2xl bg-stone-200 flex flex-col items-center">
                    <MdLaptopMac className="text-5xl" />
                    <h5 className="text-base font-medium">Mac Book</h5>
                </Link>
                <Link href={"/shop?category=Apple Watch"} className="py-10 w-40 rounded-2xl bg-stone-200 flex flex-col items-center">
                    <CgAppleWatch className="text-5xl" />
                    <h5 className="text-base font-medium">Apple Watch</h5>
                </Link>
                <Link href={"/shop?category=AirPods"} className="py-10 w-40 rounded-2xl bg-stone-200 flex flex-col items-center">
                    <TbDeviceAirpods className="text-5xl" />
                    <h5 className="text-base font-medium">AirPods</h5>
                </Link>
            </div>
        </div>
    )
}