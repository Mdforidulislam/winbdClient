import UsertableList from "./UsertableList";


const AllUser = () => {
    return (
        <div className="-mt-[350px]">
            <h1 className="text-4xl uppercase font-bold text-center">All Users</h1>
            <div className="flex justify-center">
                <hr className="border-2 border-gray-300 w-[320px] mt-2" />
            </div>

            <div>
                <UsertableList/>
            </div>
        </div>
    );
};

export default AllUser;