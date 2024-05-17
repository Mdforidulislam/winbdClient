import "./LogIn.css";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/Authentication";

const LogIn = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const { loginUserNamePassword , role} = useContext(AuthContext)
  const navigate = useNavigate();
    console.log(role,'from login page');
    // login working here ========================

    const onSubmit = (data) => {
        loginUserNamePassword(data.userName, data.password);  
  };

    // Check the validation of users based on their roles
    if (role === 'user') {
      navigate('/profile/user', { replace: true });
    } else if (role === 'subAdmin') {
      navigate('/dashboard/subAdmin', { replace: true });
    } else if (role === 'admin') {
      navigate('/dashboard/admin', { replace: true });
    }



  return (
    <div className=" w-full flex min-h-screen bg-[#111114]">
      <div className=" h-full w-full px-4 md:flex justify-center items-center md:min-h-screen ">
        <div className=" md:w-1/3 md:bg-gray-900 md:p-6 md:rounded-lg">
          {/* here header desing login system and logo desing  */}
            <div className="w-full text-white bg-[#2B282B] mb-6 ">
                <h1 className="w-full flex justify-center items-center py-2 mt-3 text-xl capitalize font-bold ">login</h1>
            </div>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            {/* fast fild here */}
            <div className=" ">
              <div className="w-full">
                <div>
                  <input
                    className="w-full  font-medium  py-3 px-2 bg-[#2B282B] rounded-t-sm text-sm placeholder:text-white focus:outline-none text-white"
                    placeholder="username "
                    {...register("userName", { required: true })}
                    type="text"
                    id=""
                  />
                  {errors.userName && (
                    <span className="text-red-600">insert username</span>
                  )}
                </div>
              </div>
            </div>
            {/* 2nd fild here */}
            <div className=" ">
              <div className=" w-full">
                <div>
                  <input
                    className="w-full  font-medium  py-3 px-2 bg-[#2B282B] rounded-t-sm text-sm placeholder:text-white focus:outline-none text-white border-t border-gray-500"
                    placeholder="password"
                    {...register("password", { required: true })}
                    type="password"
                    id=""
                  />
                  {errors.password && (
                    <span className="text-red-600">
                      Inter your password
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* login button here */}

            <div className=" text-center ">
              <button className="text-white w-full bg-[#0D7360] py-2 rounded-sm mt-12">Login</button>
            </div>
             {/* sing up link here */}
          </form>
          <div className=" text-white mt-4 text-sm justify-center flex w-full">
            <h1 className="">
              <span>Don&apos;t Have An Account?</span>
              <Link to={'/register'}>
                <span className="text-sm text-teal-500 font-bold">Sign Up</span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
