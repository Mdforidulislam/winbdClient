import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const UpdateModal = ({id}) => {
  const [openModal, setOpenModal] = useState(false); // modal handlle

    // update the number with modal handle button here 
    const handleSubmiteNumber = (event) => {
        event.preventDefault();
        const number = event.target.number.value;

        console.log(number);
        // update api call here
        axios.patch("http://localhost:5000/updatePaymentMethod/", {number,id}, {
            headers: {
              "Content-Type": "application/json",
            }
          })
          .then((response) => {
            console.log(response.data); // Logging the response data from the server
            if (response.data.message === 'update data sucessfully') {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Number Sucessfully Update",
                showConfirmButton: false,
                timer: 1500
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "don't update the number",
              
              });
            }
          })
          .catch((error) => {
            console.error("There was a problem with the Axios operation:", error);
          });
        
    };
    

  return (
    <div className="mx-auto w-fit">
      <button
        onClick={() => setOpenModal(true)}
        className="border-b-2   text-orange-300  hover:text-red-100"
      >
        Update
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "visible opacity-100" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`flex justify-center items-center absolute w-2/6 h-2/6 rounded-lg 
          bg-[#1C2340] p-6 drop-shadow-lg  ${
            openModal
              ? "scale-1 opacity-1 duration-300"
              : "scale-0 opacity-0 duration-150"
          }`}
        >
          <div className="w-5/6 ">
            {/* all the update file here  */}

            <div>
              <form onSubmit={handleSubmiteNumber} action="" className="space-y-8">
                <input
                  type="text"
                  name="number"
                  placeholder="Insert edite number "
                  className="w-full py-2 px-4 bg-slate-800 text-white "
                              />
                       <div className="flex justify-between">
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-md border border-rose-600 px-6 py-[6px] text-rose-600 duration-150 hover:bg-rose-600 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpenModal(false)}
                type="submit"                
                className=" rounded-md bg-indigo-600 hover:bg-indigo-700 px-6 py-[6px] text-white"
              >
                Update Number
              </button>
            </div>       
              </form>
            </div>       
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
