import { FaCalculator } from "react-icons/fa6";


const AddtransitionCard = () => {
   

    return (
        <div className="max-w-screen-xl mx-auto">
          

            <div className="grid lg:grid-cols-2 gap-5 md:grid-cols-2 grid-cols-1 ">

                {/* ---------------- card number 1 ---------------------- */}

                <div className="shadow-md shadow-gray-700 mx-auto my-20 flex flex-col  items-center justify-center md:flex-row">
                    <div className="group border relative h-[160px] lg:w-[250px] sm:w-[350px]">
                        <img width={100} height={100} className="h-full w-full border-l scale-105 transform rounded-lg bg-[#101733] " src="https://i.ibb.co/FW8WKcg/image.png" alt="card navigate ui" />

                    </div>
                    <div className=" space-y-1  rounded-br-lg border-r rounded-tr-lg  bg-black/70 p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[300px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                        <div className="space-y-1">
                            <p className="text-white text-xl font-semibold">Junaiet</p>
                            <div className="flex items-center gap-3 justify-center">
                                <FaCalculator className="text-white" />
                                <p className="text-white">01882239828</p>

                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-between">
                            <button className="border-b-2  text-green-400 border-green-700 hover:text-green-100">Active</button>
                            <button className="border-b-2  text-red-400 border-red-700  hover:text-red-100">Deactive</button>
                            <button className="border-b-2  text-yellow-400 border-yellow-500 hover:text-yellow-100">Update </button>

                        </div>
                    </div>
                </div> 

                {/* ---------------- card number 2 ---------------------- */}

                <div className="shadow-md shadow-gray-700  mx-auto my-20 flex flex-col  items-center justify-center md:flex-row">
                    <div className="group border relative h-[160px] lg:w-[250px] sm:w-[350px]">
                        <img width={10} height={10} className="h-full w-full border-l scale-105 transform rounded-lg bg-[#101733] " src="https://i.ibb.co/sWWFpwC/image-removebg-preview-74.png" alt="card navigate ui" />

                    </div>
                    <div className=" space-y-1  rounded-br-lg border-r rounded-tr-lg  bg-black/70 p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[300px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                        <div className="space-y-1">
                            <p className="text-white text-xl font-semibold">Junaiet</p>
                            <div className="flex items-center gap-3 justify-center">
                                <FaCalculator className="text-white" />
                                <p className="text-white">01882239828</p>

                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-between">
                            <button className="border-b-2  text-green-400 border-green-700 hover:text-green-100">Active</button>
                            <button className="border-b-2  text-red-400 border-red-700  hover:text-red-100">Deactive</button>
                            <button className="border-b-2  text-yellow-400 border-yellow-500 hover:text-yellow-100">Update </button>

                        </div>
                    </div>
                </div> 
               

            </div>
           {/* ---------------- card number 3 ---------------------- */}
            <div className=" mx-auto  flex flex-col  items-center justify-center md:flex-row">
                <div className="group border shadow-md shadow-gray-700  relative h-[160px] lg:w-[250px] sm:w-[350px]">
                    <img width={8} height={8} className="h-full w-full border-l scale-105 transform rounded-lg bg-[#101733] " src="https://i.ibb.co/D7b7vpq/image.png" alt="card navigate ui" />

                </div>
                <div className=" space-y-1 shadow-md shadow-gray-700   rounded-br-lg border-r rounded-tr-lg  bg-black/70 p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[300px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                    <div className="space-y-1">
                        <p className="text-white text-xl font-semibold">Junaiet</p>
                        <div className="flex items-center gap-3 justify-center">
                            <FaCalculator className="text-white" />
                            <p className="text-white">01882239828</p>

                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                        <button className="border-b-2  text-green-400 border-green-700 hover:text-green-100">Active</button>
                        <button className="border-b-2  text-red-400 border-red-700  hover:text-red-100">Deactive</button>
                        <button className="border-b-2  text-yellow-400 border-yellow-500 hover:text-yellow-100">Update </button>

                    </div>
                </div>
            </div> 

            
            
        </div>
    );
};

export default AddtransitionCard;