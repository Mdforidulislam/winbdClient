import { RiLuggageDepositFill } from "react-icons/ri";
import { PiHandWithdraw } from "react-icons/pi";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";

const Profile = () => {
    return (
        <div className="bg-[#0D0D0D] min-h-screen">
            <div>
                {/* nav profile  */}
                <div className="bg-[#09614F] h-[150px] flex justify-center items-center">
                    <h1 className="text-white py-4 text-3xl">Foridul</h1>
                </div>
                <div className="px-2">
                    {/* total Funds */}
                    <div className="bg-[#333333] px-2 py-1 mt-3">
                        <div className="text-left">
                            <h1 className="text-xl capitalize text-white mt-2"><h1>funds</h1></h1>
                        </div>
                        <div className="flex gap-4 mt-3 py-3 justify-between">
                                {/* Deposite  */}
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-4xl text-white"><RiLuggageDepositFill /></span>
                                <h1 className="text-white text-md">Deposite</h1>
                            </div>
                                {/* Withdraw */}
                            <div className="flex flex-col items-center justify-center">
                                <span  className="text-4xl text-white"><PiHandWithdraw /></span>
                                <h1 className="text-white text-md">Withdrawal</h1>
                            </div>
                                {/* Record */}
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-4xl text-white"><AiOutlineTransaction /></span>
                                <h1 className="text-white text-md">Transation Record</h1>
                            </div>
                        </div>
                    </div>
                    {/* Contact info  */}
                    <div className="bg-[#333333] px-2 mt-3">
                    <div className="text-left">
                            <h1 className="text-xl capitalize text-white mt-2"><h1>Contact</h1></h1>
                        </div>
                        <div className="flex gap-4 mt-3 justify-between py-3">
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-3xl text-white"><FaWhatsapp /></span>
                                <h1 className="text-white text-md">WhatsApp</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-3xl text-white"><MdOutlineMail /></span>
                                <h1 className="text-white text-md">Email</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-3xl text-white"><CiFacebook /></span>
                                <h1 className="text-white text-md">Facebook</h1>
                            </div>
                        </div>
                    </div>
                    {/* LogOut Page here */}
                    <div className="w-full bg-[#333333] mt-3">
                        <button className="py-3 rounded-md text-white text-xl">LogOut</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
