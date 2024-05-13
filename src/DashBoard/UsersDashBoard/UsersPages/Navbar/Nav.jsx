import { MdKeyboardArrowLeft } from "react-icons/md";
import { Modal } from "../Modal/Modal";


const Nav = () => {
  return (
    <div>
      <div className="flex justify-between w-full h-full items-center px-4">
        {/* left arro here */}
        <div className="text-3xl text-white">
          <MdKeyboardArrowLeft />
        </div>
        {/* users id here  */}
        <div >
          <h1 className="text-white">Foridul</h1>
        </div>
        {/* profile icons here  */}
        <div>
        
          {/* modal inport here  */}
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Nav;
