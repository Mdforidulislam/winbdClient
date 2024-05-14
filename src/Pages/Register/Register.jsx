
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




// icon


import Button from "../../Components/Button/Button";
import app from './../../Firebase/Firebase.config';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const auth = getAuth(app);


    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((res) => {

                const user = res.user;
                console.log("user", user);

            })
            .catch((error) => {
                console.log(error);

            });

    };
    return (
        <div className=" w-full h-full flex min-h-screen bg-[#131932]">

            <div className=" w-[600px]  bg-[#1C2340] mx-auto  h-full mt-6 py-4 rounded-2xl">

                <h1 className="text-center text-white text-xl font-medium mb-10">Sign Up to <span className="text-2xl text-teal-500 font-bold">Name</span></h1>
                <div className="pl-20 my-5 ">
                    <form onSubmit={handleSubmit(onSubmit)} className=' px-16 '>
                        <div className=' '>
                            <div className="  max-w-80 w-full h-[80px]  space-y-1  ">
                                <label className=" text-white text-base font-semibold">Enter Your Name</label>
                                <div>
                                    <input className='w-full border-2 border-slate-500/40 placeholder:text-slate-500 placeholder:font-medium   text-base font-medium  py-1 px-2' placeholder="Enter Your Name" {...register("name", { required: true })} type="text" id="" />
                                    {errors.name && <span className='text-red-600'>Enter Your Name Here</span>}
                                </div>
                            </div>

                        </div>
                        <div className=' '>
                            <div className="  max-w-80 w-full h-[80px]  space-y-1  ">
                                <label className=" text-white text-base font-semibold">Enter Your Email</label>
                                <div>
                                    <input className='w-full border-2 border-slate-500/40 placeholder:text-slate-500 placeholder:font-medium   text-base font-medium  py-1 px-2' placeholder="Enter Your Email" {...register("email", { required: true })} type="email" id="" />
                                    {errors.email && <span className='text-red-600'>Enter Your Email Here</span>}
                                </div>
                            </div>

                        </div>

                        <div className=' '>
                            <div className="  max-w-80 w-full h-[80px]  space-y-1  ">
                                <label className=" text-base text-white font-semibold">Enter Your Password</label>
                                <div>
                                    <input className='w-full border-2 border-slate-500/40 placeholder:text-slate-500 placeholder:font-medium  focus:border-orange-400  text-base font-medium  py-1 px-2' placeholder="Enter Your Password" {...register("password", { required: true })} type="password" id="" />
                                    {errors.password && <span className='text-red-600'>Enter Your Password Here</span>}
                                </div>
                            </div>
                        </div>
                        <div className=' '>
                            <div className="  max-w-80 w-full h-[80px]  space-y-1  ">
                                <label className=" text-base text-white font-semibold">Confirm Your Password</label>
                                <div>
                                    <input className='w-full border-2 border-slate-500/40 placeholder:text-slate-500 placeholder:font-medium  focus:border-orange-400  text-base font-medium  py-1 px-2' placeholder="Re-type Your Password" {...register("password", { required: true })} type="password" id="" />
                                    {errors.password && <span className='text-red-600'>Enter Your Password Here</span>}
                                </div>
                            </div>
                            <div className="  max-w-80 w-full h-[80px]  space-y-1  ">
                                <label className=" text-base text-white font-semibold">Confirm Your Phone Number</label>
                                <div className="flex">
                                    <input className='w-[260px] border-2 border-slate-500/40 placeholder:text-slate-500 placeholder:font-medium  focus:border-orange-400  text-base font-medium   px-2' placeholder="Type Your Phone Number" {...register("number", { required: true })} type="number" id="" />
                                    {errors.number && <span className='text-red-600'>Enter Your Phone Here</span>}
                                    <button className="border-2 px-2  hover:bg-[#131932]  font-semibold text-white">Send Otp</button>
                                </div>
                            </div>
                        </div>
                        <div className=' text-center mt-5 -ml-20 '>
                            <Button
                                divClass="hover:bg-teal-600 "
                                btnClass="hover:bg-[#131932] text-white">Sign Up</Button>
                        </div>
                    </form>
                    <div className="ml-24 text-white mt-4">
                        <h1 className="text-base font-medium">Already Have An Account? <span className="text-xl text-teal-500 font-bold">Sign In</span></h1>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Register;