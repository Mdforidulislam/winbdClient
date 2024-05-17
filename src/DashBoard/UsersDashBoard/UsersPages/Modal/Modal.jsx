import { useContext, useState } from "react";
import Profile from "../Profile/Profile";
import { AuthContext } from "../../../../Authentication/Authentication";

export const Modal = () => {
  const {modalAction} = useContext(AuthContext)
  const [openModal, setOpenModal] = useState(false);
  console.log(modalAction,'check the context modal');
  
  return (
    <div className="items-center justify-center">
          {/* for only profile and text section  */}
      <button
        onClick={() => setOpenModal(true)}
        className={`w-full justify-center py-2 "bg-[#0D6152]"  text-white`}
      >
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
      
      </button>

      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-end justify-center w-full  ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full h-[100%] rounded-t-sm bg-[#333333] text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
           <div onClick={()=>setOpenModal(false)}><Profile /></div> 

           {/* profile importing here are  */}

        </div>
      </div>
    </div>
  );
};
