export default async function Profile() {

    return (
        <div className="flex flex-col w-full">
            <div className="py-8 border-2">
                <h1 className="text-center  text-4xl font-bold">Profile</h1>
            </div>
            <div>
                <div className="flex flex-row mx-10 justify-between">
                    <div className="w-1/2">
                        <p className="text-2xl py-4 border-b-2 font-semibold">Name</p>
                        <p className="text-lg py-4">John Doe</p>
                    </div>
                    <div className="w-1/2">
                        <p className="text-2xl py-4 border-b-2 font-semibold">Email</p>
                        <p className="text-lg py-4">bloodsuker18@gmail.com</p>
                    </  div>
                </div>
            </div>
        </div>
    )
};