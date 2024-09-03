'use client'

interface QuantityInputProps {
    quantity: number;
    handleDecrement: () => void;
    handleIncrement: () => void;
}

export default function QuantityInput({ quantity, handleDecrement, handleIncrement }: QuantityInputProps) {

    return (
        <div>
            <div className="flex items-center rounded border border-gray-200">
                <button type="button" onClick={handleDecrement} className="size-10 leading-10 text-black font-medium transition hover:opacity-75">
                    &minus;
                </button>
                <p
                    id="Quantity"
                    className=" w-5 border-transparent text-center sm:text-sm "
                >{quantity}</p>

                <button onClick={handleIncrement} type="button" className="size-10 leading-10 text-black font-medium transition hover:opacity-75">
                    +
                </button>
            </div>
        </div>
    )
}