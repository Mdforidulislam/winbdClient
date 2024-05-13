import { useState } from "react";
import TransactionRecord from "./TransactionRecord/TransactionRecord";

const Transaction = () => {
    const [transactio, setTransaction] = useState(false)
    return (
        <div className="xl:px-24 lg:px-20 md:px-18 sm:px-14 px-12 py-2">
            <div>
                <button 
                onClick={() =>setTransaction(true)}
                className="px-4 py-2 border hover:bg-[red] hover:text-[#fff] duration-300">Transaction Record</button>

                <div>
                    {
                        transactio ?
                            <>
                                <TransactionRecord setTransaction={setTransaction} transactio={transactio}></TransactionRecord>
                            </>
                            :
                            <>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Transaction;