import React, { useState } from 'react';
import WidthTable from '../../../Components/Shared/TransitoinReqtabs.jsx/WidthTable';
import TransitionHistory from '../../../Components/Shared/TransitoinReqtabs.jsx/TransitionHistory';
import DepositeTable from '../../../Components/Shared/TransitoinReqtabs.jsx/DepositeTable';



const TransitionReq = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  const handleButtonClick = (buttonIndex, cardNumber) => {
    setActiveButton(buttonIndex);
    setActiveCard(cardNumber);
  };

  return (
    <div>
      <div className="flex justify-center gap-20 mx-4 my-8 bg-[#1C2340] py-5">
        <button
          className={`px-12 py-2 bg-[#1a285d]  hover:bg-[#3c497d]  ${activeButton === 1 ? 'bg-[#3a4fa3] text-white font-bold  ' : 'bg-[#1C2340] text-white  font-semibold capitalize transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1'}`}
          onClick={() => handleButtonClick(1, 1)}
        >
          Withdraw
        </button>



        <button
          className={`px-12 py-2 bg-[#1a285d]  hover:bg-[#233371] ${activeButton === 2 ? 'bg-[#3a4fa3] text-white font-bold' : 'bg-[#1C2340] text-white  font-semibold capitalize transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1'}`}
          onClick={() => handleButtonClick(2, 2)}
        >
        
          Deposit
        </button>
        <button
          className={`px-12 py-2 bg-[#1a285d]  hover:bg-[#233371]  ${activeButton === 3 ? 'bg-[#3a4fa3] text-white font-bold' : 'bg-[#1C2340] text-white  font-semibold capitalize transition ease-in-out duration-200 hover:-translate-x-1 hover:-translate-y-1'}`}
          onClick={() => handleButtonClick(3, 3)}
        >
          History
        </button>
      </div>

      {/* Card 1 */}
      <div className="flex  mt-12">
        <div className={`group relative mx-auto  ${activeCard !== 1 ? 'hidden' : ''}`}>

    <WidthTable/>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex mt-1">
        <div className={`group relative mx-auto  ${activeCard !== 2 ? 'hidden' : ''}`}>
        <DepositeTable/>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex -mt-[60px]">
        <div className={`group relative mx-auto ${activeCard !== 3 ? 'hidden' : ''}`}>
          {/* Card content */}
          <TransitionHistory/>
        </div>
      </div>
    </div>
  );
};

export default TransitionReq;
