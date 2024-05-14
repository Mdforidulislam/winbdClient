import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UpdateModal from "./UpdateModal";

const AddNumber = () => {
    const [allPaymentMethod, setAllPaymentMehod] = useState([])


  // here all the payment mehtod logo
  const paymenetLogo = {
    bkash: "https://i.ibb.co/FW8WKcg/image.png",
    nogod: "https://i.ibb.co/sWWFpwC/image-removebg-preview-74.png",
    rocket: "https://i.ibb.co/D7b7vpq/image.png",
    };
    

  // ================================ start input fild handlefunction =======================
  const handleAllValue = (e) => {
      e.preventDefault();
      
    // Access form data from event.target
    const formData = new FormData(e.target);
    const number = formData.get("number");
    const transactionType = formData.get("transactionType");
      
      
    const transactionMethod = formData.get("transactionMethod");
    const paymentLogoDynamice = paymenetLogo[transactionMethod]
    const paymenetList = { number, transactionType, transactionMethod, Logo: paymentLogoDynamice , author:'foridul' }
      
      //   ======================== add tranaction number ==========================
      
      axios.post("http://localhost:5000/addTransaction", paymenetList, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((response) => {
        console.log(response.data); // Logging the response data from the server
        if (response.data.message === 'insert data Sucessfully') {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User Sucessfully save",
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Payment Method Already exite",
          
          });
        }
      })
      .catch((error) => {
        console.error("There was a problem with the Axios operation:", error);
      });
    };

    // ========================= end the handle function ==========================================

    // ========================= geting paymentMethod face  ==============================
    
    useEffect(() => {
        axios.get('http://localhost:5000/getingPaymentmethod')
            .then(data => {
                setAllPaymentMehod(data.data.getingPaymentMehod);
                console.log(data.data);
        })
    },[])
    
    
    // ====================== configuration active and deactive and update ===========================

    const handleConfiguration = (number,id) => {
        console.log(status);
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
    }



  return (
    <div className=" mt-4 ">
      <div className=" ">
        <form action="" className="flex gap-4" onSubmit={handleAllValue}>
          {/* Type Your Transation Number Here  */}
          <div>
            <input
              type="text"
              name="number"
              placeholder="Enter your Number"
              className="px-4 text-white  w-[400px] py-3 rounded-md bg-[#222947] focus-visible:outline-none"
            />
          </div>

          {/*  Right Here  Transation Type / personal or agent */}
          <div className="">
            <select
              name="transactionType"
              className=" focus:outline-none  py-3 bg-[#222947] px-10 flex justify-center text-white rounded-md"
            >
              <option selected>Select personal or agent</option>
              <option value={"personal"}>Personal</option>
              <option value={"agent"}>Agent</option>
            </select>
          </div>

          {/* Type Transation Nogod or bkash etc... */}
          <div className="">
            <select
              name="transactionMethod"
              className="  py-3 bg-[#222947] px-10 flex justify-center text-white rounded-md"
            >
              <option selected>Select Method</option>
              <option value={'bkash'}> bkash</option>
              <option value={"nogod"}>Nagad</option>
              <option value={"rocket"}>Rocket</option>
            </select>
          </div>

          {/* Button for submition  */}
          <div>
            <button
              className="btn text-white bg-[#283673] hover:bg-[#4860c7] rounded-md"
              type="submit"
            >
              Add Payment System
            </button>
          </div>
        </form>
      </div>

      {/* All the PaymentMethod Card show here */}

          <div className="grid lg:grid-cols-2 gap-5 md:grid-cols-2 grid-cols-1 ">
              {
                  allPaymentMethod?.map((item) => (
                    <div key={item._id} className="shadow-md shadow-gray-700 mx-auto my-20 flex flex-col  items-center justify-center md:flex-row">
                    <div className="group border relative h-[160px] lg:w-[250px] sm:w-[350px]">
                      <img
                        width={100}
                        height={100}
                        className="h-full w-full border-l scale-105 transform rounded-lg bg-[#101733] "
                        src={item.Logo}
                        alt="card navigate ui"
                      />
                    </div>
                          
                    <div className=" space-y-1  rounded-br-lg border-r rounded-tr-lg  bg-black/70 py-8 px-6 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[300px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                      <div className="space-y-1  w-full">
                        <div className="flex justify-center items-center w-full h-full mb-7">
                         <div className="w-full ">
                            <p className="text-white text-left">Status: { item.status}</p>
                            <p className="text-white block w-full  text-md capitalize text-left">
                              {item.transactionType} : {item.number}
                            </p>
                               
                          </div>
                        </div>
                    </div>
                              
                     {/* update section and status change section here  */}
                      <div className="flex flex-wrap items-center justify-between">
                        <button onClick={()=>handleConfiguration('active',item._id)} className="border-b-2  text-green-400 border-green-700 hover:text-green-100">
                               Active
                        </button>
                        <button onClick={()=>handleConfiguration('deActive',item._id)} className="border-b-2  text-red-400 border-red-700  hover:text-red-100">
                                Deactive
                        </button>
                        <button   className="border-b-2  text-yellow-400 border-yellow-500 hover:text-yellow-100">
                        <UpdateModal id={item._id}/>
                        </button>
                      </div>
                    </div>
                  </div>
                  ))
              }
      </div>
    </div>
  );
};

export default AddNumber;
