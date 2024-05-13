import { useEffect, useState } from "react";
import { Modal } from "../../../../Components/Shared/Modal/Modal";

const Amount = ({number}) => {

    const [amount, setAmount] = useState([]); // set the amount in here for send or slected

    useEffect(() => {
        fetch('/amount.json').then(res => res.json()).then(data => setAmount(data))
    },[])

    return (
        <div className="bg-[#333333] px-4 py-4 ">
            {/* Payment Method use here  */}
            <div>
                <div>
                    <h1 className="text-white">Amount</h1>
                </div>
                <div className="grid grid-cols-4 gap-5 mt-3">
                    {
                        amount?.slice(0,number).map((item, index) => (
                            <div key={index} className="border w-full h-full items-center justify-center py-2 px-6 hover:border-yellow-500">
                                <h1 className="text-white">{item?.amount}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Input File Here  */}

            <div className="py-2">
                <input className="w-full h-full py-3 px-3 bg-[#272528]" placeholder="$" type="text" />
            </div>

            {/* Notification here  */}

            <div className="bg-[#060C0D] rounded-sm py-3">
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

            {/* modal here */}
            <div className="mt-3">
                <Modal nextStep='Next Step'/>
            </div>

        </div>
    );
};

export default Amount;