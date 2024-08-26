"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {

    const pathname: string = usePathname();

    return (
        <footer className="bg-stone-950">
            <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <a
                        className="inline-block rounded-full bg-slate-600 p-2 text-white shadow transition hover:bg-slate-800 sm:p-3 lg:p-4"
                        href="#"
                    >
                        <span className="sr-only">Back to top</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

                <div className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div className="md:flex md:items-center md:gap-12">
                            <a className="block text-teal-600" href="#">
                                <h1 className="text-3xl font-bold text-white">cyber</h1>
                            </a>
                        </div>

                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
                        </p>
                    </div>

                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                            <Link className={` transition hover:text-white ${pathname === '/' ? 'text-white' : 'text-gray-500'}`} href="/"> Home </Link>
                        </li>

                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Shop </a>
                        </li>

                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
                        </li>

                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact Us </a>
                        </li>

                        <li>
                            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
                        </li>
                    </ul>
                </div>

                <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                    Copyright &copy; 2022. All rights reserved.
                </p>
            </div>
        </footer>
    )
}