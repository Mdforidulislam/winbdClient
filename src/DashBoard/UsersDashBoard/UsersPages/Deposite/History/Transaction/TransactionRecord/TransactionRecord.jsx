import { useState } from "react";
import TransactionProgress from "./TransactionProgress/TransactionProgress";

// eslint-disable-next-line react/prop-types
const TransactionRecord = ({ setTransaction, transactio }) => {
    const [transactioTab, setTransactioTab] = useState(1)

    const handleTransactio = (index) => {
        setTransactioTab(index)
    }
    return (
        <div className="top-0 right-0 fixed w-full min-h-screen bg-[#fffefe8e]">
            <div className="flex justify-center items-center">
                <div className={`w-3/4 bg-[#111] min-h-screen  rounded-t-xl duration-500 ${transactio ? 'mt-28 duration-300' : 'mt-40 duration-300'}`}>
                    <div className="bg-[#eb343454]">
                        <div className="px-4 py-4 flex items-center justify-between text-[#fff] font-medium">
                            <h2>transaction record details</h2>
                            <p
                                onClick={() => setTransaction(false)}
                                className="text-xl cursor-pointer">close</p>
                        </div>

                        <div className="flex justify-center items-center ">
                            <div className="flex justify-center items-center text-center bg-[#26262693] cursor-pointer">
                                <div
                                    onClick={() => handleTransactio(1)}
                                    className={transactioTab === 1 ? "px-10 py-2 bg-[#0E735C] uppercase text-[#fff] duration-200" :
                                        "px-10 py-2 uppercase text-[#fff] duration-300"}>first tab
                                </div>

                                <div
                                    onClick={() => handleTransactio(2)}
                                    className={transactioTab === 2 ? "px-10 py-2 bg-[#0E735C] uppercase text-[#fff] duration-200" :
                                        "px-10 py-2 uppercase text-[#fff] duration-300"}
                                >second tab</div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="contents-tabs mt-6">
                            <div className={transactioTab === 1 ? "content active-content" : "content"}>
                                <TransactionProgress></TransactionProgress>
                            </div>
                            <div className={transactioTab === 2 ? "content active-content" : "content"}>
                                2
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionRecord;