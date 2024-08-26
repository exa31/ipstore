'use client';
import { CardProps } from "@/components/type";
import Image from "next/image";
import { useEffect, useState } from "react";
import { formatRupiah } from "@/helper/index";
import AnotherProducts from "@/components/shop/AnotherProducts";


export default function Detail({ params: { products } }: { params: { products: string } }) {
    const [product, setProduct] = useState({} as CardProps);
    const [images, setImages] = useState([] as string[]);
    const [isActiveImage, setIsActiveImage] = useState<string>('');

    useEffect(() => {
        fetch(`/api/products/${products}`, {
            cache: 'no-cache',
        }).then(res => res.json()).then(data => {
            setImages([...data.data.image_details, data.data.image_thumbnail]);
            setProduct(data.data);
            setIsActiveImage(data.data.image_thumbnail);
        }).catch(err => {
            console.log(err);
        })
    }, [products]);

    return (
        <>
            <div className="flex flex-col">

                <div className="flex container items-center mx-auto px-20 py-10">
                    <div className="flex flex-col gap-8 me-10">
                        {images?.map((image, index) => {
                            return (
                                <Image
                                    key={index}
                                    onClick={() => setIsActiveImage(image)}
                                    className={`w-20  ${isActiveImage === image ? 'scale-125 ' : 'opacity-50'}`}
                                    src={`http://localhost:5340/images${image}`}
                                    width={100}
                                    height={100}
                                    alt={product.name} />
                            )
                        })}
                    </div>
                    <div className="">
                        <Image
                            src={`http://localhost:5340/images${isActiveImage}`}
                            width={410}
                            className="object-cover w-96 h-[500px]"
                            height={516}
                            alt={product.name} />
                    </div>
                    <div className="flex-1 ms-10">
                        <h1 className="text-5xl font-bold">{product.name}</h1>
                        <div className="flex">
                            <p className="text-2xl font-semibold mt-4">{formatRupiah(product.price)}</p>
                            <p className="text-lg opacity-50 ms-4 line-through font-semibold mt-4">{formatRupiah(product.price + 1000000)}</p>
                        </div>
                        <p className="text-base text-justify mt-4">{product.description}</p>
                        <div className="flex mt-10 w-96 gap-8">
                            <button
                                className="block rounded-lg w-full p-4 text-sm font-medium transition hover:scale-105 text-black border-2 border-black"
                            >
                                Add to Watchlist
                            </button>
                            <button
                                className="block rounded-lg w-full bg-black p-4 text-sm font-medium transition hover:scale-105 text-white"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <AnotherProducts category={product.category?.name as string} />
                </div>
            </div>
        </>
    )
}