import { useRouter, useSearchParams } from "next/navigation";

export default function SideBar({ categories, }: { categories: { name: string, id: string }[] }) {

    const router = useRouter();

    const searchParams = useSearchParams();

    const selectedCategory = searchParams.get('category') || 'Select Category';

    const handleReset = () => {
        router.replace('/shop');
    }


    return (
        <div className="w-1/8 me-20 md:sticky mx-auto top-20">
            <label htmlFor="category" className="block text-sm font-medium text-gray-900"> Category </label>
            <select
                name="category"
                id="category"
                value={selectedCategory}
                className="mt-1.5 w-full py-3 outline-none rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                onChange={(e) => {
                    router.push(`?category=${e.target.value}`)
                }}
            >
                <option value="Select Category" disabled >Select Category</option>
                {categories.map((category, index) => (
                    <option key={index} value={category.name}>{category.name}</option>
                ))}
            </select>
            <div className="mx-auto">
                <button onClick={handleReset} className="mt-8 bg-black px-8 py-2 rounded-lg text-white">Reset</button>
            </div>
        </div>
    )
}