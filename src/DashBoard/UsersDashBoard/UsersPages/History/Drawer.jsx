
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AuthContext } from "../../../../Authentication/Authentication";

const Drawer = ({ isOpen, onClose }) => {
  const [selectedStatus, setSelectedStatus] = useState("Processing");
  const [selectedPaymentType, setSelectedPaymentType] = useState("deposite");
  const [selectedDate, setSelectedDate] = useState("Today");
  const [userName,setUsername]=useState(''); // set users name here

  const { setUserSearchData } = useContext(AuthContext); // set users data with auth 

  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem('userData'))?.userName);
  },[])



  /// =========================== search value geting by default  ==================================

  useEffect(() => {
    const getingSearchValue = async () => {
      if ( userName ) {
        const getingResponse = await axios.get(`https://pay-winbd-server.vercel.app/userHistory?userName=${userName}`);
        const userSearchData = getingResponse?.data?.data;
        setUserSearchData(userSearchData); 
      }
    }
    getingSearchValue()
  },[userName,setUserSearchData])

    // save the status 
  const handleButtonClick = (type, value) => {
      const jsonValue = JSON.stringify(value);
      if (type === 'status') {
        setSelectedStatus(JSON.parse(jsonValue));
        localStorage.setItem('status', jsonValue);
      } else if (type === 'paymentType') {
        setSelectedPaymentType(JSON.parse(jsonValue));
        localStorage.setItem('paymentType',jsonValue );
      } else if (type === 'date') {
        setSelectedDate(JSON.parse(jsonValue));
        localStorage.setItem('date', jsonValue);
      }
    };
  
    if (!isOpen) {
      return null;
  }

  



  
  ///======================= search by filter data inser users search history data get ==========================
  const handleActiongetingValueGeting = async () => {
        try {
          if (selectedStatus && selectedPaymentType && selectedDate && userName ) {
            const getingResponse = await axios.get(`https://pay-winbd-server.vercel.app/userHistory?status=${selectedStatus}&paymentType=${selectedPaymentType}&date=${selectedDate}&userName=${userName}`);
            const userSearchData = getingResponse.data.data;
            setUserSearchData(userSearchData); 
           }
        } catch (error) { console.log(error) }
  };
  
    return (
      <div
      className={`fixed top-0  ${isOpen ? 'left-0 duration-300' : 'right-0'} w-full bg-gray-900 h-screen bg-opacity-90 transition-transform transform  duration-900`}
      style={{ zIndex: 50, transitionDuration: '3s' }} // Adjust duration as needed
    >
    <div className="">
        <div className="bg-gray-900 text-white w-full  p-6 rounded-lg shadow-lg  items-center ">
            <div className=" ">
            <div className="flex justify-between flex-row-reverse items-center h-full ">
                    <h2 className="text-xl font-bold mb-4">Transaction Record Filter</h2>
                    <button onClick={onClose} className="text-white mb-3 "><span className="text-white text-3xl"><IoIosArrowBack /></span></button>
            
                 </div>
          </div>
  
          <div className="mb-4 border-t-2 border-gray-500 py-6">
            <h3 className="text-lg mb-2">Status</h3>
            <div className="flex flex-wrap gap-2">
              {['Processing', 'Rejected', 'Approved', 'verify'].map(status => (
                <button
                  key={status}
                  onClick={() => handleButtonClick('status', status)}
                  className={`px-4 py-2 rounded ${selectedStatus === status ? 'bg-[#14805E]' : 'bg-gray-600'}`}
                >
                  <p className="capitalize">{status}</p>
                </button>
              ))}
            </div>
          </div>
  
          <div className="mb-4">
            <h3 className="text-lg mb-2">Payment Type</h3>
            <div className="flex flex-wrap gap-2">
              {['deposite', 'withdraw'].map(type => (
                <button
                  key={type}
                  onClick={() => handleButtonClick('paymentType', type)}
                  className={`px-4 py-2 rounded ${selectedPaymentType === type ? 'bg-[#14805E]' : 'bg-gray-600'}`}
                >
                 <h1 className="capitalize">{type}</h1>
                </button>
              ))}
            </div>
          </div>
  
          <div className="mb-4">
            <h3 className="text-lg mb-2">Date</h3>
            <div className="flex flex-wrap gap-2">
              {['Today', 'Yesterday', 'Last 7 days'].map(date => (
                <button
                  key={date}
                  onClick={() => handleButtonClick('date', date)}
                  className={`px-4 py-2 rounded ${selectedDate === date ? 'bg-[#14805E]' : 'bg-gray-600'}`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>
        </div>
  
          <div className="flex items-end px-6">
                <button
                  onClick={handleActiongetingValueGeting}
                  className="w-full bg-[#14805E] py-2 rounded text-center text-white"
                >
                  Confirm
                </button>
          </div>
         
        </div>
      </div>
    );
};
  
export default Drawer;