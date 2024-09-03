import { formatRupiah } from "@/helper";
import Image from "next/image";

interface OrderItems {
    product: {
        _id: string;
        name: string;
        price: number;
        image_thumbnail: string;
    }
    quantity: number;
}

export default function ListOrder({ data }: { data: OrderItems }) {
    return (
        <div className="flex gap-8 items-center">
            <Image className="w-20" width={500} height={500} src={`https://backend-store-apple.vercel.app/images${data.product.image_thumbnail}`} alt={data.product.image_thumbnail} />
            <div className='w-52'>
                <h1 className="text-base font-medium">{data.product.name}</h1>
            </div>
            <h1 className="text-base w-32 p-2 font-medium">{formatRupiah(data.quantity * data.product.price)}</h1>
        </div>
    )
}