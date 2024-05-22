import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { LuLayoutList } from "react-icons/lu";
import { MdOutlineAddBox } from "react-icons/md";
import ModalProgress from './TransactionProgress/ModalProgress';
import ModalInfoShow from './TransactionProgress/ModalInfoShow';

const Modal = ({ setIsOpenModalOpen, isModalOpen , historyModal }) => {
    const [activeTab, setActiveTab] = useState('tab1');

    const closeModal = () => {
        setIsOpenModalOpen(false);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div
            className={`fixed backdrop-blur-sm inset-0 z-50 flex items-end justify-center transition-transform duration-500 ${isModalOpen ? 'translate-y-28' : 'translate-y-[700px]'}`}
        >
            <div className="w-full h-screen bg-[#333333]">
                <div className="relative w-full">
                    {/* Header Part */}
                    <div className="bg-[#555555] rounded-t-2xl px-2 p-[0.1px]">
                        {/* Logo and Title */}
                        <div className="absolute -mt-9 flex justify-center w-full">
                            <div className="bg-gray-600 p-2 flex gap-2 rounded-xl">
                                <img
                                    width={25}
                                    height={25}
                                    src="https://img.b112j.com/bj/h5/assets/images/payment/bkash.png?v=1715679064603&source=mcdsrc"
                                    alt="Bkash"
                                />
                                <h1 className="text-white font-semibold text-sm">Bkash</h1>
                            </div>
                        </div>

                        {/* Close Button and Title */}
                        <div className="flex items-center justify-between h-full w-full pt-3 pb-8">
                            <div className="w-full">
                                <h2 className="font-semibold text-white text-center text-[1rem]">Transaction Record Details</h2>
                            </div>
                            <button onClick={closeModal}>
                                <span className="text-white text-2xl">
                                    <IoMdClose />
                                </span>
                            </button>
                        </div>

                        {/* Tab System */}
                        <div className="flex mb-4 relative bg-[#3B3B3B]">
                            <button
                                className={`flex-1 text-center ${activeTab === 'tab1' ? 'text-white z-40 py-[5px]' : 'text-white'}`}
                                onClick={() => handleTabClick('tab1')}
                            >
                                <div className="w-full flex justify-center">
                                    <span>
                                        <LuLayoutList />
                                    </span>
                                </div>
                            </button>
                            <button
                                className={`flex-1 text-center ${activeTab === 'tab2' ? 'text-white z-40 py-[5px]' : 'text-white'}`}
                                onClick={() => handleTabClick('tab2')}
                            >
                                <div className="w-full flex justify-center">
                                    <span>
                                        <MdOutlineAddBox />
                                    </span>
                                </div>
                            </button>
                            <div
                                className="absolute bottom-0 h-full bg-[#14805E] shadow-2xl rounded-md transition-transform duration-300 ease-in-out"
                                style={{
                                    width: '50%',
                                    transform: activeTab === 'tab1' ? 'translateX(0%)' : 'translateX(100%)',
                                }}
                            />
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="tab-content px-2">
                        {activeTab === 'tab1' && (
                            <div
                                className="transition-all duration-500"
                                style={{
                                    transform: 'translateX(0px)',
                                }}
                            >
                                
                                <ModalProgress historyModal={historyModal} />
                            </div>
                        )}
                        {activeTab === 'tab2' && (
                            <div
                                className="transition-all duration-500"
                                style={{
                                    transform: 'translateX(0px)',
                                }}
                            >
                               <ModalInfoShow historyModal={historyModal} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
