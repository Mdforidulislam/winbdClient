import { useContext, useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Authentication/Authentication";
import { BsInfoCircleFill } from "react-icons/bs";
import "../style.css"

const Amount = ({number,withdraw,deposite}) => {

    const [amount, setAmount] = useState([]); // set the amount in here for send or slected
    const [sumAmount, setSumAmount] = useState(0); // 
   
    const { userAmountInfo ,handleAction, error , channel} = useContext(AuthContext); // recive the amount 
    userAmountInfo(sumAmount); // total sum of amount 

    useEffect(() => {
        fetch('/amount.json').then(res => res.json()).then(data => setAmount(data))
    },[])

    // =================== sum the amount here ===================

    const handleSumAllAmount = (amount) => {

        setSumAmount(sumAmount +amount )
    }

   // handle change value 
    const onchangeHandleValue = (event) => {
        event.preventDefault();
        const newAmount = parseInt(event.target.value);
        if (withdraw) {
            setSumAmount(sumAmount)
        } else {
            if (!isNaN(newAmount)) {
                setSumAmount(newAmount);
            } else {
                setSumAmount(0); // Reset to 0 if input is not a number
            }
        }
       
    }
    console.log(sumAmount);
    console.log(channel);

    return (
        <div className="bg-[#333333] px-4 py-4 bottom-to-top">
            {/* Payment Method use here  */}
            <div>
                <div className="flex justify-between w-full h-full">
                    <h1 className="text-white capitalize border-l-4 border-green-500 pl-1 rounded-sm">Amount</h1>
                    <div className="text-gray-400">
                    {
                        channel === 'sendmoney' 
                            ? <><span className="text-2xl">৳</span> 500.00 - <span className="text-2xl">৳</span> 10,000.00</> 
                            : <><span className="text-2xl">৳</span> 500.00 - <span className="text-2xl">৳</span> 25,000.00</>
                    }
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-5 mt-3">
                    {
                        amount?.slice( channel ==='sendmoney' ? 0 :0 , channel ==='sendmoney' ? 7 : number).map((item, index) => (
                            <div key={index} className="rounded-sm border w-full h-full items-center  justify-center py-2 px-4 hover:border-[#FFE43C]  hover:text-[#FFE43C]">
                                <h1 onClick={()=>handleSumAllAmount(item.amount)} className="hover:text-[#FFE43C] text-white">{item?.amount}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Input File Here  */}

            <div className="py-2 my-3">
                <input className="w-full h-full py-3 px-3 bg-[#272528] text-white text-right placeholder:text-left focus:outline-none"
                value={sumAmount} 
                placeholder="$" 
                type="text" 
                onChange={onchangeHandleValue}
                />
                <p className="text-red-600">{ sumAmount ? '': error}</p>
            </div>

            {/* Notification here  */}

            <div className="bg-[#060C0D] rounded-sm py-3 px-3">
                <div className="flex">
                    <div>
                        <span className="text-white text-2xl"><BsInfoCircleFill /></span>
                    </div>
                <div className="text-white px-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, iusto?</p>
                    <div>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                         </ul>
                    </div>
                </div>
               </div>
            </div>

            {/* button  here */}
            <div className="mt-3">
                <button onClick={()=>handleAction(sumAmount)} className="text-white justify-center flex w-full py-2 bg-[#0D6152] rounded-md">{sumAmount ? <Link to={'/profile/confirmpay'}>Next</Link> :'next'}</button>
            </div>

        </div>
    );
};

export default Amount;