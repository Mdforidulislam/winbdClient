
import "./LogIn.css"
import { useForm } from "react-hook-form";


// icon
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";



const LogIn = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const rediection = useNavigate()

   const onSubmit = data => {
       console.log(data)

       // che the vaildation users 
       
       const usersRole = 'admin';
       console.log(usersRole,'check the user role');
   
           if (!usersRole) {
               rediection('/login')
           } else {
               switch (usersRole) {
                   case 'admin':
                       rediection('/dashboard/admin');
                       break;
                   case 'subAdmin':
                       rediection('/dashboard/subAdmin');
                       break;
                   case 'user':
                       rediection('/profile/user');
                       break;
                   default:
                       rediection('/login')
                       break;
               }
           }
    };

    

    return (
        <div className="kenburns-top">
            <div className="relative w-full h-[800px] bg-black/90 mt-0 ">
                <div className=" w-1/2 absolute  h-[400px] my-auto bg-black  bg1 top-20  left-72  text-white  ">
                    <h1 className="pl-40 pt-20 text-5xl font-bold">Logo</h1>
                    <h1 className="pl-40 pt-10 text-5xl font-bold">Sign In</h1>
                    <div className="pt-20 pl-40 flex gap-10 ">
                        <FaFacebook className="text-3xl hover:text-5xl " />
                        <FaGoogle className="text-3xl hover:text-5xl" />
                    </div>

                </div>
                <div className="w-1/3  absolute h-[550px] top-20 right-40 bg-white rounded-3xl  ">
                    <div className=" ">
                        <FaUserAlt className=" text-7xl flex border-2 ml-48 -mt-5 bg-black rounded-full text-white " />

                    </div>
                    <div className="pl-16">
                        <form onSubmit={handleSubmit(onSubmit)} className='mt-10 mb-5 '>
                            <div className='text-center mb-5  '>
                                <div className="flex justify-center items-center gap-4 max-w-96 w-full h-[80px] px-10  bg-black rounded-full text-center ">
                                    <SiAmazonsimpleemailservice className=" text-3xl text-white" />
                                    <input className='w-full placeholder:text-slate-500 placeholder:font-medium rounded-xl leading-6 text-lg font-medium  py-3 px-4' placeholder="Enter Your User Id" {...register("email", { required: true })} type="email" id="" />
                                    {errors.email && <span className='text-red-600'>Enter Your Email Here</span>}
                                </div>

                            </div>
                            <div className='text-center '>
                                <div className="flex justify-center items-center gap-4  max-w-96 w-full h-[80px] px-10  bg-black rounded-full text-center border-0 outline-none " >
                                    <RiLockPasswordLine className=" text-3xl text-white" />
                                    <input className='w-full placeholder:text-slate-500 placeholder:font-medium rounded-xl leading-6 text-lg font-medium  py-3 px-4' placeholder="Enter Your Password" {...register("password", { required: true })} type="password" id="" />
                                    {errors.password && <span className='text-red-600'>Password dont match</span>}
                                </div>
                            </div>
                            <div className=' text-center mt-5 -ml-20 '>
                                <Button
                                    divClass="hover:bg-teal-500 "
                                    btnClass="hover:bg-black hover:text-white">Sign In</Button>
                            </div>
                        </form>
                        <div className="absolute md:text-2xl font-semibold  md:font-bold pl-20 text-black "> <p className="my-4">New Here ? Please </p>
                            <div className=' text-center mt-5  '>
                                <Link to="/register">
                                    <Button
                                        divClass="hover:bg-teal-500 "
                                        btnClass="hover:bg-black hover:text-white">Sign Up</Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default LogIn;