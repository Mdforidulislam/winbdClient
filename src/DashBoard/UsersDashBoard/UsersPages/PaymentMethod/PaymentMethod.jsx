import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Authentication/Authentication";
import '../style.css'
const PaymentMethod = ({number}) => {
  const [method, setMehod] = useState([]); // store the all paymentmethod use for show data
  const [paymentType, setPaymentType] = useState('bkash');
  console.log(paymentType);
  const { userPaymentMehtod } = useContext(AuthContext); // call the context api 
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
        <h1 className="text-white capitalize border-l-4 border-green-500 pl-1">payment Method</h1>
      </div>
        <div className="grid grid-cols-3 gap-3  pt-3 ">
        {method?.slice(0,number).map((item, index) => (
          <div
            key={index}
            onClick={()=>setPaymentType(item.title)}
              className={`${paymentType === item?.title ? 'border-[#FFE43C] border-2 text-[#FFE43C] rounded-md flex w-full h-full items-center justify-center':'border border-gray-400 rounded-md flex w-full h-full items-center justify-center hover:border-[#FFE43C] '}`}
          >
            <div className="px-4 py-2 ">
              <img width={35} height={35} src={item?.img} alt="" />
              
              <h1 onClick={() => setPaymentType(item?.title)} className="text-white mt-2 hover:text-[#FFE43C] text-[12px]">{item?.title}</h1>
       
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethod;
