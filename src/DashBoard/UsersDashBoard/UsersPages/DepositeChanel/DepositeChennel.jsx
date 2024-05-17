import { useContext, useState } from "react";
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
                    <h1 className="text-white capitalize border-l-4 border-green-500 pl-1 rounded-sm">Deposite Chennel</h1>
                </div>
                <div className="flex gap-4 mt-4">

                    <button className={ `border py-2 px-5 rounded-md text-white hover:border-[#FFE43C] capitalize ${depositeChanel =='cashout'? 'border-[#FFE43C] border-2 text-[#FFE43C]' : ''}`} onClick={() => setDepositeChanel('cashout')}>Cash Out</button>
                    
                    <button className={ `border py-2 px-5 rounded-md text-white hover:border-[#FFE43C] capitalize ${depositeChanel =='sendmoney'? 'border-[#FFE43C] border-2 text-[#FFE43C]' : ''}`} onClick={() => setDepositeChanel('sendmoney')}>sendm..</button>
                    
                    <button className={ `border py-2 px-5 rounded-md text-white hover:border-[#FFE43C] capitalize ${depositeChanel =='payment'? 'border-[#FFE43C] border-2 text-[#FFE43C]' : ''}`} onClick={() => setDepositeChanel('payment')}>payment</button>
                    
                </div>
            </div>
        </div>
    );
};

export default DepositeChennel;