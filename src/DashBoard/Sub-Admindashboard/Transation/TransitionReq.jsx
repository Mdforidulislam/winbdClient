import React, { useState } from 'react';
import DepositeTable from './TransitoinReqtabs.jsx/DepositeTable';
import TransitionHistory from './TransitoinReqtabs.jsx/TransitionHistory';
import Withdraw from './TransitoinReqtabs.jsx/Withdraw';


const tabs = [
  { id: 1, label: 'Withdraw', component: <Withdraw/> }, // Replace null with your Withdraw component
  { id: 2, label: 'Deposit', component: <DepositeTable/> },
  { id: 3, label: 'History', component: <TransitionHistory /> }
];

const TransitionReq = () => {
  const [activeTab, setActiveTab] = useState(2); // Default active tab index

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="mx-4 my-8 bg-[#1C2340] py-5">
      <div className="flex justify-center gap-20">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`px-6 py-2 bg-[#1a285d] hover:bg-[#3c497d] ${activeTab === tab.id ? 'bg-[#3a4fa3] text-white font-bold' : 'bg-[#1C2340] text-white font-semibold hover:bg-[#233371]'} capitalize transition ease-in-out duration-200`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Render active tab content */}
      <div className="mt-14">
        {tabs.map(tab => (
          <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
            {tab.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransitionReq;
