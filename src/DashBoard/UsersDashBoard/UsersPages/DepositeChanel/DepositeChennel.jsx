import { useContext, useState } from "react";
import { BiSolidLike } from "react-icons/bi";


import { AuthContext } from "../../../../Authentication/Authentication";
import '../style.css';

const DepositeChennel = () => {
    const [depositeChanel, setDepositeChanel] = useState('cashout')

    const { userDepositeChanel } = useContext(AuthContext); // call the context api 
    userDepositeChanel(depositeChanel); // send data with api context api 

    console.log(depositeChanel);
    return (
        <div className="bg-[#333333] px-4 py-4 bottom-to-top">
            <div >
                <div>
                    <h1 className="text-white capitalize border-l-4 border-green-500 pl-1 rounded-sm text-sm">Deposite Chennel</h1>
                </div>
                <div className="flex gap-3 mt-4">

                    <button className={`border py-2 px-5 rounded-sm text-white hover:border-[#FFE43C] capitalize text-[12px] relative ${depositeChanel == 'cashout' ? 'border-[#FFE43C] border text-[#FFE43C]' : ''}`} onClick={() => setDepositeChanel('cashout')}>
                        Cash Out
                        <span className="absolute left-0 text-[18px] bg-[#76BD6A]"><BiSolidLike /></span>
                    </button>
                    
                    <button className={ `border py-2 px-5 rounded-sm text-white hover:border-[#FFE43C] capitalize text-[12px] ${depositeChanel =='sendmoney'? 'border-[#FFE43C] border text-[#FFE43C]' : ''}`} onClick={() => setDepositeChanel('sendmoney')}>sendm..</button>
                    
                    <button className={ `border py-2 px-5 rounded-sm text-white hover:border-[#FFE43C] capitalize text-[12px] ${depositeChanel =='payment'? 'border-[#FFE43C] border text-[#FFE43C]' : ''}`} onClick={() => setDepositeChanel('payment')}>payment</button>
                    
                </div>
            </div>
        </div>
    );
};

export default DepositeChennel;