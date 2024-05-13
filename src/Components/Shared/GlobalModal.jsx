import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';

export const GlobalModal = () => {
    const [openModal, setOpenModal] = useState(false);
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = data => {
        console.log(data)

    };
    return (
        <div className=" flex w-72 items-center justify-start">
            <button onClick={() => setOpenModal(true)} className="rounded-md mt-4 bg-indigo-600 px-4 py-[6px] text-white">
                Add Sub-Admin
            </button>
            <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100`}>
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-[600px] rounded-lg bg-[#131932]  p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${openModal ? 'opacity-1 translate-y-0 duration-300' : 'translate-y-20 opacity-0 duration-1000'}`}>
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-3 px-16 '>
                            <div className=' '>
                                <div className="  max-w-80 w-full h-[80px]  space-y-1  ">
                                    <label className=" text-white text-base font-semibold">Enter User Name</label>
                                    <div>
                                        <input className='w-full border-2 border-slate-500/40 placeholder:text-slate-500 placeholder:font-medium  leading-6 text-lg font-medium  py-3 px-4' placeholder="Enter Your Email" {...register("name", { required: true })} type="text" id="" />
                                        {errors.email && <span className='text-red-600'>Enter Your Email Here</span>}
                                    </div>
                                </div>

                            </div>
                            <div className=' '>
                                <div className="  max-w-80 w-full h-[80px]  space-y-1  ">
                                    <label className=" text-base text-white font-semibold">Enter User Password</label>
                                    <div>
                                        <input className='w-full border-2 border-slate-500/40 placeholder:text-slate-500 placeholder:font-medium  leading-6 text-lg font-medium  py-3 px-4' placeholder="Enter Your Password" {...register("password", { required: true })} type="password" id="" />
                                        {errors.password && <span className='text-red-600'>Enter Your Password Here</span>}
                                    </div>
                                </div>
                            </div>
                            <div className=' '>
                                <div className="  max-w-80 w-full h-[80px]  space-y-1  ">
                                    <label className=" text-base text-white font-semibold">Enter User Phone Number</label>
                                    <div>
                                        <input className='w-full border-2 border-slate-500/40 placeholder:text-slate-500 placeholder:font-medium  leading-6 text-lg font-medium  py-3 px-4' placeholder="Enter Your Password" {...register("password", { required: true })} type="number" id="" />
                                        {errors.number && <span className='text-red-600'>Enter Your Password Here</span>}
                                    </div>
                                </div>
                            </div>
                            <div className=' text-center mt-5  '>
                                <Button
                                    divClass="hover:bg-white "
                                    btnClass="hover:bg-[#131932] text-white">Sign In</Button>
                            </div>
                        </form>



                    </div>
                </div>
            </div>
        </div>
    );
}