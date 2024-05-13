import React, { useState } from 'react';
import GlobalTransition from '../../../Components/Shared/GlobalTransition';

const TransitionReq = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  const handleButtonClick = (buttonIndex, cardNumber) => {
    setActiveButton(buttonIndex);
    setActiveCard(cardNumber);
  };

  return (
    <div>
      <div className="flex justify-center gap-20 ">
        <button
          className={`px-12 py-2 ${activeButton === 1 ? 'bg-[#233371] text-white font-bold' : 'bg-[#1C2340] text-white border-b font-semibold'}`}
          onClick={() => handleButtonClick(1, 1)}
        >
          Deposit
        </button>
        <button
          className={`px-12 py-2 ${activeButton === 2 ? 'bg-[#233371] text-white font-bold' : 'bg-[#1C2340] text-white border-b font-semibold'}`}
          onClick={() => handleButtonClick(2, 2)}
        >
          Withdraw
        </button>
        <button
          className={`px-12 py-2 ${activeButton === 3 ? 'bg-[#233371] text-white font-bold' : 'bg-[#1C2340] text-white border-b font-semibold'}`}
          onClick={() => handleButtonClick(3, 3)}
        >
          History
        </button>
      </div>

      {/* Card 1 */}
      <div className="flex  mt-12">
        <div className={`group relative   ${activeCard !== 1 ? 'hidden' : ''}`}>
        
          <GlobalTransition/>

        </div>
      </div>

      {/* Card 2 */}
      <div className="flex bg-yellow-600">
        <div className={`group relative mx-auto max-w-[350px] overflow-hidden bg-gradient-to-r from-[#3b99f1] via-[#4FB5FF] to-[#4FB5FF] px-6 py-6 text-white shadow ${activeCard !== 2 ? 'hidden' : ''}`}>
          <h1 className='bg-blue-400 py-12 px-12'>hello world</h1>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex bg-gray-500">
        <div className={`group relative mx-auto max-w-[350px] overflow-hidden bg-gradient-to-r from-[#3b99f1] via-[#4FB5FF] to-[#4FB5FF] px-6 py-6 text-white shadow ${activeCard !== 3 ? 'hidden' : ''}`}>
          {/* Card content */}
          <h1 className='bg-red-400 py-12 px-12'>hello world</h1>
        </div>
      </div>
    </div>
  );
};

export default TransitionReq;
