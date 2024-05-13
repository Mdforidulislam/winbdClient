import { useState } from "react";

export const Modal = ({nextStep}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
      <div className="items-center justify-center">
          
      <button
        onClick={() => setOpenModal(true)}
        className={`w-full justify-center py-2 ${nextStep? 'bg-[#0D6152]' : ''} text-white`}
      >
              {
                  nextStep? nextStep :   <div
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
              }
             
          </button>
          
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-end justify-center  ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full h-[70%] rounded-t-sm bg-[#333333] p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
         
            <h6 className="text-center text-sm font-medium opacity-70">
              Elevate your React projects with beautifully crafted components
              designed for TailwindCSS.
            </h6>
            <div className="flex gap-2">
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-md border border-rose-600 px-6 py-2 text-sm text-rose-600 hover:bg-rose-600 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-md bg-[#0D6152] text-white py-2 px-6 "
              >
                Payment 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
