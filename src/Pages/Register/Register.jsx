
import { useForm } from "react-hook-form";
import Button from "../../Components/Button/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";


const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const AfterRegiset = useNavigate();

    /// get the author id for register user
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const refParam = urlParams.get('ref');

    const onSubmit = async data => {
        console.log(data)

        if (data?.password !== data?.confirmpassword) {
            setErrorMessage("password don't match");
            return;
        } 

        const userInfoList = {
            userName: data?.name,
            password: data?.password,
            phoneNumber: data?.number,
            authorId: refParam
        }

        if (Object.values(userInfoList).every(item => item) || !Object.values(userInfoList).length === 0) {
            const registerUser = await axios.post('http://localhost:5000/insertUsers', userInfoList)
            console.log(registerUser.data);
            if (registerUser.data.message === 'data insert Successfully to database') {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "User Sucessfully register",
                  showConfirmButton: false,
                  timer: 1500
                });

            } 
            
            if (registerUser.data.message === 'user Already register') {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "user Already register",
                  });
            }
        }
    };


    return (
        <div className=" w-full h-full min-h-screen bg-[#0F0F11] ">

            <div className="">
            <div className="">
                {/* header makeing here  */}
                <div className="w-full h-full flex justify-center items-center py-4 bg-[#29292B] mb-3">
                    <h1 className="text-2xl text-white  capitalize ">sing up</h1>
                </div>
                    <div className="">
                        {/* form start here */}
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full'>

                    <div className="mb-2 px-3 ">
                                {/* fild number 1  */}
                        <div className='flex w-full bg-[#29292B] px-3 py-2 gap-3 items-center'>
                                <label htmlFor="" className="text-white text-xl">username</label>
                            <div className="w-full">
                                    <input className=' w-full bg-[#29292B] py-2 focus:outline-none  px-3 text-white placeholder:text-sm' placeholder="4-15 digit allow number" {...register("name", { required: true })} type="text" id="" />
                                    {errors.name && <span className='text-red-600'>Enter Your Name Here</span>}
                                        
                            </div>
                        </div>

                         {/*  fild number 2*/}
                         <div className='flex w-full bg-[#29292B] px-3 py-2 gap-3 items-center border-t border-gray-500 '>
                            <label htmlFor="" className="text-white text-xl capitalize">password</label>
                            <div className="">
                                <div>
                                    <input className='w-full bg-[#29292B] py-2  focus:outline-none  px-3 text-white' placeholder="6-20 char allow number" {...register("password", { required: true })} type="password" id="" />
                                    {errors.password && <span className='text-red-600'>Enter Your Password Here</span>}
                                </div>
                            </div>
                        </div>

                        {/* fild number 3 */}
                        <div>
                            <div className=' flex w-full bg-[#29292B] px-3 py-2 gap-3 items-center border-t border-gray-500 '>
                                <label htmlFor="" className="text-white text-xl capitalize">confirm password</label>
                                    <div>
                                        <input className='w-full bg-[#29292B] py-2  focus:outline-none  px-3 text-white' placeholder="Re-type Your Password" {...register("confirmpassword", { required: true })} type="password" id="" />
                                            {errors.password && <span className='text-red-600'>Re Type Your Password Here</span>}
                                            {errorMessage && <span className='text-red-600'>{errorMessage}</span>}
                                    </div>
                                </div>
                       </div>     
                     </div>
                        {/* end fast section  */}
                            
                        {/* fild number 4 */}
                        <div className=" px-3 w-full h-full mt-6">
                                
                                    <div className="  flex w-full bg-[#29292B] px-3 py-2 gap-3 items-center">
                                        <label htmlFor="" className="text-white text-xl capitalize">phone number</label>
                                            <div>
                                                <input className='w-full bg-[#29292B] py-2  focus:outline-none  px-3 text-white' placeholder="Phone Number" {...register("number", { required: true })} type="text" id="" />
                                                    {errors.number && <span className='text-red-600'>Enter Your Phone Here</span>}
                                           </div>
                                            
                                    </div>
                               <div className="flex w-full mt-5">
                                    <div className="w-full">
                                        <input className=" w-full bg-[#29292B] py-2  focus:outline-none  px-3 text-white" placeholder="OTP Number "  type="text" />
                                    </div>
                                    <div className=" w-2/4">
                                        <h1 className="  w-full text-white flex justify-center items-center h-full bg-slate-600 px-1">Send OTP</h1>
                                    </div>
         
                                </div>
                            {/* singup button  */}
                            
                            <div className='w-full mt-4'>
                                    <button className="w-full  py-2 text-white bg-[#0C6C5A] rounded-md capitalize ">confirm</button>
                            </div>
                            
                     </div>
                </form>
                    
                    <div className=" flex justify-center w-full">
                            <h1 className=" text-white mt-3 text-sm">Already Have An Account? <Link to={'/login'}>
                                <span className="text-sm text-teal-500 font-bold">login</span></Link></h1>
                    </div>
                </div>

            </div>
            </div>


        </div>
    );
};

export default Register;