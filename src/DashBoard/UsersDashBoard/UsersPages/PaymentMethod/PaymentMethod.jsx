import { useEffect, useState } from "react";

const PaymentMethod = ({number}) => {
  const [method, setMehod] = useState([]); // store the all paymentmethod use for show data

  useEffect(() => {
    fetch("/method.json")
      .then((res) => res.json())
      .then((data) => setMehod(data));
  }, []);

  return (
    <div className="bg-[#333333] px-4 py-4 ">
      {/* payment method history */}
      <div className=" space-y-3">
        <h1 className="text-white capitalize border-l-4 border-green-500 pl-1">payment Method</h1>
      </div>
      <div className="grid grid-cols-3 gap-6  pt-3">
        {method?.slice(0,number).map((item, index) => (
          <div
            key={index}
            className="border flex w-full h-full items-center justify-center hover:border-[#DF8C45]"
          >
            <div className="text-center">
              <img width={60} height={60} src={item?.img} alt="" />
              <h1 className="text-white">{item?.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethod;
