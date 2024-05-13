import { useState } from "react";
import DepositNumber from "../DepositeNumber/DepositeNumber";



const DepositChannel = () => {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState("")

    const handleOpen = (info) => {
        setOpen(true)
        setOpen2(info)

    }
    return (
        <>
            <div className="xl:border-b-0 lg:border-b-0 border-b-8 border-[#262626]">
                <div className="xl:px-24 lg:px-20 md:px-18 sm:px-14 px-12 xl:pb-0 lg:pb-0 pb-6">
                    <div className='border-b border-[#ffffff28] pb-3'>
                        <h2 className="text-lg font-medium border-l-4 rounded text-[#fff] border-[#0E735C] px-2">Deposit Channel</h2>
                    </div>

                    <div className='mt-4 flex items-center gap-4'>
                        <button
                            onClick={() => handleOpen("Cash Out","017")}
                            className='py-2 px-6 border group border-[#9b9b9b] rounded capitalize font-medium text-[#fff] hover:text-[yellow] hover:border-[yellow] duration-300'>Cash Out</button>
                        <button
                            onClick={() =>handleOpen("Send Money")}
                            className='py-2 px-6 border border-[#9b9b9b] rounded capitalize font-medium text-[#fff] hover:text-[yellow] hover:border-[yellow] duration-300'>Send Money</button>
                    </div>
                </div>

            </div>

            <div>
                {
                    open ?
                        <>
                            <DepositNumber
                                title={"case out number"} number={"+8801746770324"} open={open} setOpen={setOpen}></DepositNumber>
                        </>
                        :
                        <></>
                }
            </div>

            <div>
                {
                    open ?
                        <>
                            <DepositNumber
                                title={"send money"} number={"+8801746770324"} open2={open2} setOpen={setOpen}></DepositNumber>
                        </>
                        :
                        <></>
                }
            </div>
        </>
    );
};

export default DepositChannel;