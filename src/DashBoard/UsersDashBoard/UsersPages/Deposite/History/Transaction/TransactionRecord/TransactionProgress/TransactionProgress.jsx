
const TransactionProgress = () => {
    return (
        <div className="px-12 py-4">
            <div className="flex items-center justify-between">
                <h2 className="text-[#fff] text-lg font-medium">Transaction Progress</h2>
                <button className="px-4 py-2 text-sm bg-[#d3d337] uppercase font-medium text-[#fff] rounded shadow">any thing 000</button>
            </div>

            <div className="py-8 flex items-center gap-7">
                <div className="bg-[red]">
fff
                </div>

                <div className="space-y-2 w-full">
                    <div className="space-y-2">
                        <p className="text-[#ffffffa9]">1254/35</p>
                        <div className="bg-[#ffffff3d] py-3 px-4 flex items-center justify-between rounded text-[#fff]">
                            <h2>Processing Deposit</h2>
                            <p>15.16.18</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-[#ffffffa9]">3254/35</p>
                        <div className="bg-[#ffffff3d] py-3 px-4 flex items-center justify-between rounded text-[#fff]">
                            <h2>Deposit Information Recive</h2>
                            <p>15.16.32</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-[#ffffffa9]">2254/35</p>
                        <div className="bg-[#ffffff3d] py-3 px-4 flex items-center justify-between rounded text-[#fff]">
                            <h2>Deposit Information</h2>
                            <p>15.16.35</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TransactionProgress;