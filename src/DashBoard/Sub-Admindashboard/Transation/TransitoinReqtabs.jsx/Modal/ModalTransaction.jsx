import axios from "axios";
import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { IoCloseSharp } from "react-icons/io5";

const ModalTransaction = ({item}) => {
    const [openModal, setOpenModal] = useState(false);


    const handleActionUpdate = async (status) => {
        status.preventDefault();
        const transactionid = status.target.tnxid.value;
        console.log(transactionid, 'check the form value ');
        try {

            const updateResponsce = await axios.put(`http://localhost:5000/transactionFeedback?status=${transactionid}&id=${item._id}`);
            const getingResponsce = updateResponsce.data;
            console.log(getingResponsce);
            if (getingResponsce.message === 'Request status updated successfully') {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Transaction id update succesfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            if (getingResponsce.message === 'Transaction not found') {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            }

        } catch (error) {
            console.log(error);
        }
    }
    console.log(item);
    

    const updateTheTransactionRequest = async (status) => {
        try {
            const updateResponsce = await axios.put(`http://localhost:5000/transactionFeedback?status=${status}&id=${item._id}`);
            const getingResponsce = updateResponsce.data;
            console.log(getingResponsce);

            if (getingResponsce.message === 'Request status updated successfully') {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "status update Succesfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            if (getingResponsce.message === 'Transaction not found') {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
            }

        } catch (error) {
            console.log(error);
        }
    }



    return (
      <div className=" flex w-72 items-center justify-start">
        <div onClick={() => setOpenModal(true)} className="box-1">
                    <span><IoSendSharp /></span>
        </div>
        <div
          onClick={() => setOpenModal(false)}
          className={`fixed z-[100] flex items-center justify-center ${
            openModal ? "opacity-1 visible" : "invisible opacity-0"
          } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
        >
          <div
            onClick={(e_) => e_.stopPropagation()}
            className={`absolute w-[600px] rounded-lg bg-[#131932]  p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
              openModal
                ? "opacity-1 translate-y-0 duration-300"
                : "translate-y-20 opacity-0 duration-1000"
            }`}
          >
                    <div  className="flex flex-col items-center justify-center space-y-4 w-full py-8 px-6">

                        <div className=" flex justify-end w-full -mt-3 ">
                            <span onClick={() => setOpenModal(false)} className="text-black text-2xl bg-red-600 "><IoCloseSharp /></span>
                        </div>
                        
                {/* show the modal info here  */}
                    {
                       item?.transactionType === 'deposite' ?  <div className="w-full flex justify-between gap-5">
                       <button onClick={()=>updateTheTransactionRequest("Approved")} className="bg-green-700 px-8 py-3 rounded-md  w-full">Approved</button>    
                       <button onClick={()=>updateTheTransactionRequest("verify")} className="bg-yellow-400 px-8 py-3 rounded-md  text-black w-full">verify</button>    
                       <button onClick={()=>updateTheTransactionRequest("Rejected")} className="bg-red-500 px-8 py-3 rounded-md  w-full">Rejected</button>   
                            </div> :
                                
                    //  withdraw section here 
                          <div className="w-full">
                            <form onSubmit={handleActionUpdate} action="" className="space-y-3 w-full">
                                <input className="w-full py-2 px-3 rounded bg-black focus:outline-none  " name="tnxid" type="text" placeholder="Transaction number" />
                                <button className="bg-green-700 px-8 py-3 rounded-md ml-2 w-full" type="submit">Confirm</button> 
                            </form>
                    </div>
                                
     
                    }    
                        
                  
                        
                
            </div>
          </div>
        </div>
      </div>
    );
};

export default ModalTransaction;