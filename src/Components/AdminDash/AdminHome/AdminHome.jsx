import Charts from "../../Charts/Charts";
import DashboardCard from "../../DashboardCard/DashboardCard";

const AdminHome = () => {
    return (
        <div className="w-full h-full">
            <div className="flex justify-between items-center px-10">
                <div>
                    <h1 className="text-xl font-bold pb-4">Hello, Admin</h1>
                    <data className="text-slate-500 text-base font-medium ">16 March  2024</data>
                </div>
                <div className="space-x-4">
                    <input className="border-2 border-slate-700 text-xl font-semibold py-2 rounded-full text-center" type="text " placeholder="Search" />
                    <button className="btn border-2 px-4 py-2 rounded-2xl text-xl font-semibold border-stone-700 text-white bg-teal-600 hover:text-teal-600 hover:bg-white ">+ Add New Sub Admin </button>

                </div>
            </div>
            <div className=" grid grid-cols-4 gap-5">
                <DashboardCard
                    sectionName={"Sub Admin"}
                    total={9}
                    recentTotal={6}
                />
                <DashboardCard
                    sectionName={"Total User"}
                    total={156}
                    recentTotal={90}
                    Style={"bg-teal-600/80"}
                />
                <DashboardCard
                    sectionName={"Total Income "}
                    total={"789$"}
                    recentTotal={"580$"}
                    Style={"bg-slate-600/80"}

                />
                <DashboardCard
                    sectionName={"Total Withdraw"}
                    total={"450$"}
                    recentTotal={"230$"}
                    Style={"bg-orange-600/80"}

                />

            </div>
            <div>
                <Charts />
            </div>

        </div>
    );
};

export default AdminHome;