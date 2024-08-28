export default function Loading(): JSX.Element {
    return (
        <div className="bg-white">
            <div className="container px-6 py-10 mx-auto animate-pulse">
                <div className="flex">
                    <div className="w-96 h-[500px] bg-gray-300 rounded-lg dark:bg-gray-600">                    </div>
                    <div className="flex-1 mt-20 ms-10">
                        <h1 className="h-14 w-56 bg-gray-300 rounded-lg dark:bg-gray-600"></h1>
                        <div className="flex">
                            <p className="h-3 bg-gray-300 rounded-lg dark:bg-gray-600"></p>
                            <p className="h-3 bg-gray-300 rounded-lg dark:bg-gray-600"></p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="h-3 w-full bg-gray-300 rounded-lg dark:bg-gray-600"></p>
                            <p className="h-3 w-full bg-gray-300 rounded-lg dark:bg-gray-600"></p>
                            <p className="h-3 w-full bg-gray-300 rounded-lg dark:bg-gray-600"></p>
                            <p className="h-3 w-full bg-gray-300 rounded-lg dark:bg-gray-600"></p>
                            <p className="h-3 w-full bg-gray-300 rounded-lg dark:bg-gray-600"></p>
                            <p className="h-3 w-full bg-gray-300 rounded-lg dark:bg-gray-600"></p>
                            <p className="h-3 w-full bg-gray-300 rounded-lg dark:bg-gray-600"></p>
                            <p className="h-3 w-full bg-gray-300 rounded-lg dark:bg-gray-600"></p>
                        </div>
                        <div className="flex mt-10 w-96 gap-8">
                            <button
                                className="h-8 w-20 bg-gray-300 rounded-lg dark:bg-gray-600"
                            >

                            </button>
                            <button
                                className="h-8 w-20 bg-gray-300 rounded-lg dark:bg-gray-600"
                            >

                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}