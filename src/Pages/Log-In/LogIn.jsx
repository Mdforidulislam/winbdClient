
import "./LogIn.css"
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


// icon
import { FaUserAlt } from "react-icons/fa";
import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import app from "../../Firebase/Firebase.config";
// import app from './../../Firebase/Firebase.config';



const LogIn = () => {
    const [label, setlabel] = useState(false)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const rediection = useNavigate()
<<<<<<< HEAD

   const onSubmit = data => {
       console.log(data)

       // che the vaildation users 
       
       const usersRole = 'subAdmin';
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
=======
    const auth = getAuth(app);
    const onSubmit = data => {
        console.log(data)


        // sign in
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((res) => {
                // Signed in 
                const loggedUser = res.user;
                console.log(loggedUser);

            })
            .catch((error) => {
                console.error(error);
            });




        // firebase authentication 

        // che the vaildation users 

        const usersRole = 'admin';
        console.log(usersRole, 'check the user role');

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
>>>>>>> aa6546e78eadc84f73f807426e7753540c8b58eb
    };



    return (
        <div className=" w-full flex min-h-screen bg-[#131932]">

            <div className=" w-[600px]  bg-[#1C2340] mx-auto  h-full mt-20 rounded-2xl">
                <div className=" mb-4">
                    <FaUserAlt className=" text-7xl flex border-2 ml-64 -mt-5 bg-black rounded-full text-white " />

                </div>
                <h1 className="text-center text-white text-xl font-medium mb-10">Log In to <span className="text-2xl text-teal-500 font-bold">Name</span></h1>
                <div className="pl-20 my-5 ">
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-3 px-16 '>

                        <div className=' '>
                            <div className="  max-w-80 w-full h-[80px]  space-y-1  ">
                                <label className=" text-base text-white font-semibold">Enter Your Email</label>
                                <div>
                                    <input className='w-full border-2 border-slate-500/40 placeholder:text-slate-500 placeholder:font-medium  focus:border-orange-400  text-base font-medium  py-2 px-2' placeholder="Enter Your Email" {...register("email", { required: true })} type="email" id="" />
                                    {errors.email && <span className='text-red-600'>Enter Your Email Here</span>}
                                </div>
                            </div>
                        </div>

                        <div className=' '>
                            <div className="  max-w-80 w-full h-[80px]  space-y-1  ">
                                <label className=" text-base text-white font-semibold">Enter Your Password</label>
                                <div>
                                    <input className='w-full border-2 border-slate-500/40 placeholder:text-slate-500 placeholder:font-medium  focus:border-orange-400 leading-6 text-lg font-medium  py-2 px-2' placeholder="Enter Your Password" {...register("password", { required: true })} type="password" id="" />
                                    {errors.password && <span className='text-red-600'>Enter Your Password Here</span>}
                                </div>
                            </div>
                        </div>
                        <div className="text-white">
                            <button className=" font-normal">Forget Your Password?</button>
                        </div>
                        <div className=' text-center mt-5 -ml-20 '>
                            <Button
                                divClass="hover:bg-teal-600 "
                                btnClass="hover:bg-[#131932] text-white">Sign In</Button>
                        </div>
                    </form>
                    <div className="ml-24 text-white mt-4">
                        <h1 className="text-base font-medium">Don&apos;t Have An Account? <Link><span className="text-xl font-bold text-teal-500">Sign Up</span></Link></h1>
                    </div>
                </div>

            </div>


        </div >

    );
};

export default LogIn;