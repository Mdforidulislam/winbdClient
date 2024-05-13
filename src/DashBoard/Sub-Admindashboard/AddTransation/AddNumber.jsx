
import AddtransitionCard from "./AddNumberCard";


const AddNumber = () => {

    return (
        <div className="max-w-screen-xl mx-auto mt-6">
         <div className="flex justify-center items-center gap-5">
                <div>
                    <input type="text" name="" id="" placeholder="Enter your Name" className="px-4 text-white  w-[250px] py-3 rounded-md bg-[#222947]" />
                </div>
                <div>
                    <input type="number" name="" id="" placeholder="Enter your Number" className="px-4 text-white  w-[400px] py-3 rounded-md bg-[#222947]" />

                </div>

                <div>
                    <select className=" w-[400px] py-3 bg-[#222947] px-2 text-white rounded-md">
                        <option disabled selected>Select Transition</option>
                        <option><img className="w-12" src="https://i.ibb.co/PTsg8ZT/image.png" alt="" /> Bkase</option>
                        <option>Nagad</option>
                        <option>Rocket</option>
                    </select>
                </div>

                <div>
                    <button className="btn text-white bg-[#283673] px-12 py-3 hover:bg-[#4860c7] rounded-md">Submit</button>
                </div>
         </div>

            <AddtransitionCard/>

        </div>
    );
};

export default AddNumber;