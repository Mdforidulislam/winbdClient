import { RiLuggageDepositFill } from "react-icons/ri";
import { PiHandWithdraw } from "react-icons/pi";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Authentication/Authentication";
import { IoIosLogOut } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { MdForwardToInbox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { TfiReload } from "react-icons/tfi";
import { AiTwotoneEye } from "react-icons/ai";


const Profile = ({setOpenModal}) => {
    const [userName,setUserName]= useState('')
    const { role, setRole ,setrediectionDW} = useContext(AuthContext);
    

    const handleLogOutAction = () => {
        localStorage.removeItem('userData') 
        setRole(undefined)
    }

    useEffect(() => {
        const userName = JSON.parse(localStorage.getItem('userData'))?.userName;
        setUserName(userName);

    },[])

    return (
        <div className="bg-[#0D0D0D] pb-3">
        <div className="w-full h-full relative">
            {/* nav profile */}
            <div className="bg-black relative w-full " style={{ backgroundImage: 'url("https://img.b112j.com/bj/h5/assets/images/member-header-bg.png?v=1715679064603")', backgroundPosition: 'buttom center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height:'150px' }}>
                <div className="bg-black bg-opacity-10 p-4">
                    <div onClick={() => setOpenModal(false)} className="-mr-3 -mt-6 absolute right-0">
                        <div className="bg-black rounded-full p-5">
                            <span className="w-full justify-end flex text-xl text-white"><RxCross1 /></span>
                        </div>
                    </div>
                    <div className="flex w-full  items-center gap-2 py-10">
                        <div className="ml-6">
                            <img className="w-[60px] h-[60px]" src="https://img.b112j.com/bj/h5/assets/images/vip/bdt/normal.png?v=1715679064603" alt="" />
                        </div>
                        <div>
                            <h1 className="text-white text-sm capitalize text-left">{userName}</h1>
                            <div><span className="text-white bg-[#333333] p-1 rounded-full text-[12px]">VIP points (VP) 0 | My VIP >></span></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* profile items */}
            <div className="px-2 ">
                {/* wallet section */}
                <div className="flex justify-between bg-[#333333] px-2 rounded-md py-4 mb-3 items-center">
                    <div className="flex items-center gap-5">
                        <span className="text-[11px] text-[#afc4bd] capitalize">main wallet</span>
                        <span className="text-[14px] text-[#a6c9be]"><TfiReload /></span>
                        <span className="text-[14px] text-[#9fc2b7]"><AiTwotoneEye /></span>
                    </div>
                    <div>
                        <span className="text-[#F2DF1A] text-[14px]">৳ 0</span>
                    </div>
                </div>

                {/* total funds */}
                <div className="bg-[#333333] px-2 rounded-md">
                    <div className="text-left border-b pb-2 border-gray-500 pt-2">
                        <h1 className="text-md capitalize text-white flex gap-1 items-center"><span className="text-[#09614F] font-bold w-1 bg-[#09614F]">|</span> funds</h1>
                    </div>
                    <div className="flex gap-4 mt-1 py-3 justify-around px-2">
                        {/* Deposit */}
                        <div className="flex flex-col items-center justify-center">
                            <img width={35} src="https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-deposit.png?v=1715679064603" alt="" />
                            <h1 className="text-white text-[12px]">Deposit</h1>
                        </div>
                        {/* Withdrawal */}
                        <div className="flex flex-col items-center justify-center">
                            <img width={35} src="https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-withdrawal.png?v=1715679064603" alt="" />
                            <h1 className="text-white text-[12px]">Withdrawal</h1>
                        </div>
                    </div>
                </div>

                {/* history section */}
                <div className="bg-[#333333] px-2 rounded-md mt-3">
                    <div className="text-left border-b pb-2 border-gray-500 pt-1">
                        <h1 className="text-md capitalize text-white flex gap-1 items-center"><span className="text-[#09614F] font-bold w-1 bg-[#09614F]">|</span> history</h1>
                    </div>
                    <div className="flex gap-4 mt-1 py-3 justify-between px-2">
                        {/* Betting records */}
                        <div className="flex flex-col items-center justify-center">
                            <img width={35} src="https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-bet-records.png?v=1715679064603" alt="" />
                            <h1 className="text-white text-[12px]">Betting Records</h1>
                        </div>
                        {/* Turnover */}
                        <div className="flex flex-col items-center justify-center">
                            <img width={35} src="https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-turnover.png?v=1715679064603" alt="" />
                            <h1 className="text-white text-[12px]">Turnover</h1>
                        </div>
                        {/* Transaction records */}
                        <div className="flex flex-col items-center justify-center">
                            <img width={35} src="https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-records.png?v=1715679064603" alt="" />
                            <h1 className="text-white text-[12px]">Transaction Records</h1>
                        </div>
                    </div>
                </div>

                {/* profile info */}
                <div className="bg-[#333333] px-2 rounded-md mt-3">
                    <div className="text-left border-b pb-2 border-gray-500 pt-1">
                        <h1 className="text-md capitalize text-white flex gap-1 items-center"><span className="text-[#09614F] font-bold w-1 bg-[#09614F]">|</span> profile</h1>
                    </div>
                    <div className="flex gap-4 mt-1 py-3 justify-between px-2">
                        {/* Personal Info */}
                        <div className="flex flex-col items-center justify-center">
                            <img width={35} src="https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-profile.png?v=1715679064603" alt="" />
                            <h1 className="text-white text-[12px]">Personal Info</h1>
                        </div>
                        {/* Reset Password */}
                        <div className="flex flex-col items-center justify-center">
                            <img width={35} src="https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-resetpasswords.png?v=1715679064603" alt="" />
                            <h1 className="text-white text-[12px]">Reset Password</h1>
                        </div>
                        {/* Inbox */}
                        <div className="flex flex-col items-center justify-center">
                            <img width={35} src="https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-inbox.png?v=1715679064603" alt="" />
                            <h1 className="text-white text-[12px]">Inbox</h1>
                        </div>
                        {/* Referral */}
                        <div className="flex flex-col items-center justify-center">
                            <img width={35} src="https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-referral.png?v=1715679064603" alt="" />
                            <h1 className="text-white text-[12px]">Referral</h1>
                        </div>
                    </div>
                </div>

                {/* contact info */}
                <div className="bg-[#333333] px-2 rounded-md mt-3">
                    <div className="text-left border-b pb-2 border-gray-500 pt-1">
                        <h1 className="text-md capitalize text-white flex gap-1 items-center"><span className="text-[#09614F] font-bold w-1 bg-[#09614F]">|</span> contact</h1>
                    </div>
                    <div className="flex gap-4 mt-1 py-3 justify-between px-2">
                        {/* Personal Info */}
                        <div className="flex flex-col items-center justify-center">
                            <img width={35} src="https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-whatsapp.png?v=1715679064603" alt="" />
                            <h1 className="text-white text-[12px]">WhatsApp</h1>
                        </div>
                        {/* Reset Password */}
                        <div className="flex flex-col items-center justify-center">
                            <img width={35} src="https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-email.png?v=1715679064603" alt="" />
                            <h1 className="text-white text-[12px]">Email</h1>
                        </div>
                        {/* Inbox */}
                        <div className="flex flex-col items-center justify-center">
                            <img width={35} src="https://img.b112j.com/bj/h5/assets/images/icon-set/theme-icon/icon-facebook-messenger.png?v=1715679064603" alt="" />
                            <h1 className="text-white text-[12px]">Facebook</h1>
                        </div>
                    </div>
                </div>

                {/* LogOut Button */}
                <div onClick={handleLogOutAction} className="w-full bg-[#333333] mt-3 h-full rounded-md">
                    <button className="py-3 rounded-md text-white text-sm flex justify-center w-full items-center gap-3">
                        <span className="text-white text-xl"><IoIosLogOut /></span>
                        Log out
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Profile;
