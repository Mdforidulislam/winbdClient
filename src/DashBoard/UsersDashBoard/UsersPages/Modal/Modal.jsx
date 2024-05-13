import { useState } from "react";
import Profile from "../Profile/Profile";

export const Modal = ({
  nextStep,
  transactionTitle,
  transactionNumber,
  amount,
  userNumber
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="items-center justify-center">
      {/* for only profile and text section  */}
      <button
        onClick={() => setOpenModal(true)}
        className={`w-full justify-center py-2 ${
          nextStep ? "bg-[#0D6152]" : ""
        } text-white`}
      >
        {nextStep ? (
          nextStep
        ) : (
          <div
            className="flex items-center flex-wrap justify-around border-4 rounded-full"
            id="_ActiveAvatar_NavigateUI"
          >
            <div className="relative group">
              <img
                className="size-[40px] bg-slate-500 object-cover rounded-full"
                src="https://source.unsplash.com/300x300/?profile"
                alt="avatar navigate ui"
              />
              <span className="size-4 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
              <span className="size-4 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
            </div>
          </div>
        )}
      </button>

      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-end justify-center w-full  ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full h-[70%] ${nextStep?'h-[70%]' : 'h-[80%]'} rounded-t-sm bg-[#333333] text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          {/* transation details show with modal  */}
          
          {nextStep  ?  <div className="flex flex-col items-center justify-center space-y-6 w-full p-6">
            <div className="w-full space-y-6">
              <div className="text-left space-y-4">
                <h1 className="text-white text-lg font-semibold">
                  Transaction Details
                </h1>
                <p className="text-white">
                  Transaction Type: {transactionTitle}
                </p>
                <p className="text-white">
                  {transactionTitle} Number: {transactionNumber}
                </p>
                <p className="text-white">Amount: ${amount}</p>
                <div>
                  <input
                    type="text"
                    placeholder="Enter transaction ID"
                    className="w-full py-2 px-3 bg-gray-200 focus:outline-none rounded-md"
                  />
                </div>
                <p className="text-white">Your Number: {userNumber} </p>
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-md border border-gray-300 px-6 py-2 text-sm text-white hover:bg-gray-200 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-md bg-green-500 text-white py-2 px-6 hover:bg-green-600"
              >
                Make Payment
              </button>
            </div>
          </div> : <div><Profile /></div> }

           {/* profile importing here are  */}

        </div>
      </div>
    </div>
  );
};
