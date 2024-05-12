

const Usermanagment = () => {
    return (
        <div className="-mt-[400px]">
            <div className="flex justify-center items-center">
                <input type="text" placeholder="Enter User Id" name="" id="" className="px-2 focus:outline-none text-white w-[550px] py-3  bg-[#222947]"/>
                <button className="px-8 py-3 text-white bg-blue-900">Search</button>
            </div>
            <div className="flex gap-1 items-center justify-center mt-4">
                <div className="bg-[#222947] rounded-md w-[250px] h-[400px]">
                <h1 className="bg-blue-900 text-white text-xl font-semibold py-2 text-center">User Old Data</h1>

               </div>

                <div className="bg-[#222947] rounded-md w-[400px]  h-[400px]">
                    <h1 className="bg-blue-900 text-white text-xl mb-5 font-semibold py-2 text-center">User New Data</h1>
                 <div className="space-y-9">
                      <div>
                            <label htmlFor="" className="text-white mx-2 ">User Name</label><br />
                            <input type="text" name="" placeholder="Enter Name" id="" className="bg-[#2e375e] mt-3 px-2 text-white w-[380px] py-3 rounded-sm mx-2 " />
                      </div>
                        <div>
                            <label htmlFor="" className="text-white mx-2 mt-5 ">Pin Number</label><br />
                            <input type="number" name="" id="" placeholder="Enter Pin Number" className="mt-3 bg-[#2e375e] px-2 text-white w-[380px] py-3 rounded-sm mx-2" />
                        </div>
                       <div>
                            <label htmlFor="" className="text-white mx-2 ">Account Number</label><br />
                            <input type="number" name="" id="" placeholder="Enter Account Number" className="mt-3 bg-[#2e375e] px-2 text-white w-[380px] py-3 rounded-sm mx-2" />

                       </div>
                 </div>
               </div>


            </div>
        {/* --------3 button here --------------------- */}
        <div className="flex gap-2 justify-center items-center my-4 ml-[250px]">
                <button className="bg-[#873e23] text-white px-7 rounded-sm">Edit Data</button>
                <button className="bg-green-400 text-white px-7 rounded-sm">Save Change</button>
                <button className="bg-[#e74141] text-white px-7 rounded-sm">Delete</button>
        </div>
        </div>
    );
};

export default Usermanagment;