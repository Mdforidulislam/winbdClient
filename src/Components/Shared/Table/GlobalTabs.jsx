import React, { useContext, useState } from 'react';
import PaymentMethod from '../../../DashBoard/UsersDashBoard/UsersPages/PaymentMethod/PaymentMethod';
import DepositeChennel from '../../../DashBoard/UsersDashBoard/UsersPages/DepositeChanel/DepositeChennel';
import Amount from '../../../DashBoard/UsersDashBoard/UsersPages/Amount/Amount';
import WithDraw from '../../../DashBoard/UsersDashBoard/UsersPages/Withdraw/WithDraw';
import Desposite from '../../../DashBoard/UsersDashBoard/UsersPages/Desposite/Desposite';
import History from '../../../DashBoard/UsersDashBoard/UsersPages/History/History';
import { AuthContext } from '../../../Authentication/Authentication';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('deposit');
    
    const {setOptionValue, optionValue } = useContext(AuthContext);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

     console.log(optionValue);
    return (
        <div className=" ">
            {/* Tab buttons */}
            <div className="px-4 bg-[#14805E] py-4 top-14 sticky z-10">
                <div className="flex  border-gray-200 bg-[#054D3F] rounded-md relative">
                    <button
                                className={`tab-btn flex-1 py-1  text-[12px]  focus:outline-none focus:border-transparent ${activeTab === 'deposit' ? 'text-white z-20 shadow-lg rounded-md duration-500' : 'text-white'}`}
                                onClick={() => handleTabChange('deposit')}
                                >
                                    Deposit                  
                    </button>
                    
                    <button
                                className={`tab-btn flex-1 py-1 text-[12px] font-semibold focus:outline-none focus:border-transparent ${activeTab === 'withdraw' ? 'text-white  z-20 shadow-lg duration-500' : 'text-white '}`}
                                onClick={() => handleTabChange('withdraw')}
                            >
                            Withdraw
                    </button>
                    <button
                                className={`tab-btn flex-1 py-1 text-[12px] font-semibold focus:outline-none focus:border-transparent ${activeTab === 'history' ? 'text-white z-20 shadow-lg rounded-md duration-500' : 'text-white '}`}
                                onClick={() => handleTabChange('history')}
                            >
                                History
                    </button>

                    {/* here animation slide  */}
                    <div
                       className='absolute bg-[#34AF83] h-full w-1/3 rounded-md transition-transform duration-500'
                       style={{
                           transform: 
                               activeTab === 'deposit' ? 'translateX(0%)' : 
                               activeTab === 'withdraw' ? 'translateX(100%)' : 
                               'translateX(200%)',
                       }}
                    >
                        
                      </div>
                    </div>
            </div>
            <div>
                {/* promotion option */}
                <div className="bg-[#36BC8B] h-full w-full py-2 flex justify-between items-center px-4 relative">
                    <div className="flex items-center gap-2 ">
                        <img 
                            className="w-3" 
                            src="https://img.b112j.com/bj/h5/assets/images/icon-set/icon-selectpromotion.svg?v=1715679064603" 
                            alt="Select promotion" 
                        />
                        <p className="text-white text-[12px]">Select promotion</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <select onClick={(e)=>setOptionValue(e.target.value)} className=" w-[150px] text-[11px] absolute text-white px-2 py-1 rounded bg-transparent focus:outline-none right-0">
                            {/* number one option */}
                            <option value="এক্সট্রা ১.৫% ডিপোজিট বোনাস" className='text-[#36BC8B] bg-[#333333] hover:bg-[#2C9F87] text-[10px]  right-0' selected>এক্সট্রা ১.৫% ডিপোজিট বোনাস</option>
                            {/* number 2 option */}
                            <option value="১০০% রিফান্ড বোনাস" className='text-[#36BC8B] bg-[#333333]  hover:bg-[#2C9F87] text-[10px]right-0'>১০০% রিফান্ড বোনাস</option>
                            {/* number 3 option */}
                            <option value="৫০% স্পোর্টস রিফান্ড" className='text-[#36BC8B] bg-[#333333] hover:bg-[#2C9F87] text-[10px]right-0'>৫০% স্পোর্টস রিফান্ড</option>
                            {/* number 4 option */}
                            <option value="স্লট ও ফিশিং-এ ১০০% বোনাস" className='text-[#36BC8B] bg-[#333333]  hover:bg-[#2C9F87] text-[10px] right-0'>স্লট ও ফিশিং-এ ১০০% বোনাস</option>
                            {/* number 5 option */}
                            <option value="২৫% লাইভ ক্যাসিনো & টেবিল ক্যাশব্যাক" className='text-[#36BC8B] bg-[#333333] hover:bg-[#2C9F87] text-[10px] right-0'>২৫% লাইভ ক্যাসিনো & টেবিল ক্যাশব্যাক</option>
                            {/* number 6 option */}
                            <option value="৮১০,০০০ লাইভ ক্যাসিনো & টেবিল গেম" className='text-[#36BC8B] bg-[#333333] hover:bg-[#2C9F87] text-[10px] right-0'>৮১০,০০০ লাইভ ক্যাসিনো & টেবিল গেম</option>
                            {/* number 7 option */}
                            <option value="৮১০,০০০ স্লট এবং ফিশিং রিলোড বোনাস" className='text-[#36BC8B] bg-[#333333] hover:bg-[#2C9F87] text-[10px] right-0'>৮১০,০০০ স্লট এবং ফিশিং রিলোড বোনাস</option>
                        </select>
                   </div>
                </div>
                
            </div>

            {/* Tab content */}
            <div className="  rounded ">
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
