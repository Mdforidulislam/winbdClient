import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Authentication/Authentication";
import Discount from "./Discount/Discount";

const PaymentMethod = ({number}) => {
  const [method, setMehod] = useState([]); // store the all paymentmethod use for show data
  const [paymentType, setPaymentType] = useState('bkash');
  console.log(paymentType);
  const { userPaymentMehtod, optionValue} = useContext(AuthContext); // call the context api 

  userPaymentMehtod(paymentType); // send the payment method

  useEffect(() => {
    fetch("/method.json")
      .then((res) => res.json())
      .then((data) => setMehod(data));
  }, []);

  return (
    <div className="bg-[#333333] px-4 py-4 bottom-to-top">
      {/* payment method history */}
      
      <div className=" ">
        <h1 className="text-white capitalize border-l-4 border-green-500 pl-1 text-sm">payment Method</h1>
      </div>
        <div className="grid grid-cols-3 gap-2  pt-3 ">
        {method?.slice(0,number).map((item, index) => (
          <div
            key={index}
            onClick={()=>setPaymentType(item.title)}
              className={`${paymentType === item?.title ? 'border-[#FFE43C] border text-[#FFE43C] rounded-sm flex w-full h-full items-center justify-center overflow-hidden':' overflow-hidden border border-gray-400 rounded-sm flex w-full h-full items-center justify-center hover:border-[#FFE43C] '}`}
          >
            <div className=" py-1 relative ">
              <img width={25} height={25} src={item?.img} alt="" />
              
              <h1 onClick={() => setPaymentType(item?.title)} className="text-white mt-1 hover:text-[#FFE43C] text-[10px] capitalize">{item?.title}</h1>
              {/* promotion option set here */}
              {
                optionValue === 'এক্সট্রা ১.৫% ডিপোজিট বোনাস'? <div className="absolute top-0 ml-3  ">
                <Discount/>
              </div> : null
              }
              
            </div>
             
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default PaymentMethod;
