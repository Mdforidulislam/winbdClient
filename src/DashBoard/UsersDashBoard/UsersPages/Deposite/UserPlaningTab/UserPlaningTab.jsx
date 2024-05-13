import { useState } from "react";


import WithDraw from "../WithDraw/WithDraw";
import History from "../History/History";
import Deposit from "../Deposite";
const User_planing_tab = () => {
    const [toggle, setToggle] = useState(1)
    const handleToggle = (index) => {
        setToggle(index)
    }
    return (
        <>
            <div className="xl:flex lg:flex items-center justify-center xl:bg-transparent lg:bg-transparent bg-[#0E735C] xl:py-4 lg:py-4 xl:border-b-0 lg:border-b-0 border-b-8 border-[#262626]">

                <div className="flex items-center justify-center  rounded-md cursor-pointer xl:py-0 lg:py-0 py-6">
                    <div
                        onClick={() => handleToggle(1)}
                        className={toggle === 1 ? "active-tabs duration-200" :
                            "tabs border border-[#ffffff23] duration-300"}>
                        Deposit
                    </div>

                    <div onClick={() => handleToggle(2)}
                        className={toggle === 2 ? "active-tabs duration-300" :
                            "tabs border border-[#ffffff23] duration-300"}>
                        Withdraw
                    </div>

                    <div onClick={() => handleToggle(3)}
                        className={toggle === 3 ? "active-tabs duration-300" :
                            "tabs border border-[#ffffff23] duration-300"}>
                        History
                    </div>
                </div>

            </div>



            <div className="">
                <div className="contents-tabs mt-6">
                    <div className={toggle === 1 ? "content active-content" : "content"}>
                        <Deposit></Deposit>
                    </div>
                    <div className={toggle === 2 ? "content active-content" : "content"}>
                        <WithDraw></WithDraw>
                    </div>
                    <div className={toggle === 3 ? "content active-content" : "content"}>
                        <History></History>
                    </div>
                </div>
            </div>
        </>


    );
};

export default User_planing_tab;