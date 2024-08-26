export default function Banner() {
    return (
        <div className="mt-20" style={{
            backgroundImage: "url('/images/banner.jpg')",
            width: "100%",
            height: '448px',
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className="flex flex-col mt-28 ms-20 me-auto">
                <h1 className="text-[96px] text-white font-bold"><span className="font-thin">Big Summer</span> Sale</h1>
                <p className="text-[18px] text-zinc-400">Created to change everything for the better. For everyone</p>
                <button className="bg-transparent border py-3 rounded-lg border-white w-max px-14 mt-6 text-white">Shop Now</button>
            </div>
        </div>
    )
}