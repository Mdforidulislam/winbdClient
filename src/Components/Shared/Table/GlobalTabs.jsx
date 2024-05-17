import React, { useState } from 'react';
import PaymentMethod from '../../../DashBoard/UsersDashBoard/UsersPages/PaymentMethod/PaymentMethod';
import DepositeChennel from '../../../DashBoard/UsersDashBoard/UsersPages/DepositeChanel/DepositeChennel';
import Amount from '../../../DashBoard/UsersDashBoard/UsersPages/Amount/Amount';
import WithDraw from '../../../DashBoard/UsersDashBoard/UsersPages/Withdraw/WithDraw';
import Desposite from '../../../DashBoard/UsersDashBoard/UsersPages/Desposite/Desposite';
import History from '../../../DashBoard/UsersDashBoard/UsersPages/History/History';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('deposit');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="">
            {/* Tab buttons */}
            <div className="px-4 bg-[#0C745C] py-4">
            <div className="flex  border-gray-200 bg-[#054D3F] rounded-md">
                <button
                    className={`tab-btn flex-1 py-2  text-sm font-semibold focus:outline-none focus:border-transparent ${activeTab === 'deposit' ? 'text-white  bg-[#2C9F87] shadow-lg rounded-md' : 'text-white'}`}
                    onClick={() => handleTabChange('deposit')}
                    >
                        Deposit
                    
                </button>
                <button
                    className={`tab-btn flex-1 py-2 text-sm font-semibold focus:outline-none focus:border-transparent ${activeTab === 'withdraw' ? 'text-white  bg-[#2C9F87] shadow-lg rounded-md' : 'text-white '}`}
                    onClick={() => handleTabChange('withdraw')}
                >
                   Withdraw
                </button>
                <button
                    className={`tab-btn flex-1 py-2 text-sm font-semibold focus:outline-none focus:border-transparent ${activeTab === 'history' ? 'text-white  bg-[#2C9F87] shadow-lg rounded-md-' : 'text-white '}`}
                    onClick={() => handleTabChange('history')}
                >
                    History
                </button>
            </div>
               </div>

            {/* Tab content */}
            <div className="  rounded">
                {activeTab === 'withdraw' && (
                    <div className="tab-pane space-y-3">
                        <WithDraw/>
                    </div>
                )}
                {activeTab === 'deposit' && (
                    <div className="tab-pane">
                        <Desposite/>
                    </div>
                )}
                {activeTab === 'history' && (
                    <div className="tab-pane">
                        <History/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs;
