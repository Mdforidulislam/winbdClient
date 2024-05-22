import { useTheme } from "@nivo/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { CiHome } from "react-icons/ci";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";


const ConfirmPay = () => {
    const initialTime = 5 * 60; // 10 minutes in seconds
    const [timeRemaining, setTimeRemaining] = useState(initialTime); // set time function 
    const [localDat, setLocalData] = useState({}); // set data 
    const [showNumber, setShowNumber] = useState({}); // show the number form the database 
    const [inputValue, setInputValue] = useState(''); // set the value from input
    const [showmassage, setShowMassage] = useState(''); // set error massage 
    const [userNumber, setuserNumber] = useState(''); // set number 
    const [localUser, setLocaluser] = useState({}); // get local user data
    const [redirect, setRedirect] = useState(false);  // set redirection false or true valuse set for after 2 sec later redirection 
    
   
    

    // ==================== write function for timing calculation =====================
    useEffect(() => {
            
            const intervalId = setInterval(() => {
                if (timeRemaining >= 0) {
                    setTimeRemaining(prevTime => prevTime - 1); // Reduce time by 1 second
                    }
            }, 1000); // Run every second

        return () => clearInterval(intervalId); // Cleanup the interval
        
        }, [timeRemaining]);

        // Convert remaining time to minutes and seconds
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

    
    // BD time Function here


    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userData'));
        setLocaluser(userInfo);
    },[])
    

    // geting submit data form localstore hre
    
    useEffect(() => {
        const getingSubmInfo = localStorage.getItem('userTransaction')
        const convertParsData = JSON.parse(getingSubmInfo)
        console.log(convertParsData);
        setLocalData(convertParsData)
    }, [])
    


    // access the data here all the api or object 
 
    const author = localUser?.authorId;
    const transType = localDat.channel || '';
    const method = localDat.paymentMethod || '';
    const userName = localUser?.userName;

    console.log(userName, 'before call the number', userNumber);
    
    
    //  ================= geting userInfo here  =====================================

    useEffect(() => {
        const showUsnerInfo = async () => {
            if (userName) {
                try {
                    const searhUserData = await axios.get(`https://pay-winbd-server.vercel.app/getingRegUser?userName=${userName}`)
                    const getingUsers = searhUserData?.data?.phoneNumber;
                    setuserNumber(getingUsers);
                    console.log(searhUserData, 'geting number');
                } catch (error) { console.log(error); }
             }
        }
        showUsnerInfo();
    }, [userName]);



    // ===================================== show Number from payment Method  ===========================
    
    useEffect(() => {
        // Check if all necessary data is available
        if (author && transType && method) {
            const fetchData = async () => {
                try {
                    const response = await fetch(`https://pay-winbd-server.vercel.app/showPaymentNumber?author=${author}&transType=${transType}&method=${method}`);
                    const convert = await response.json();
                    setShowNumber(convert?.isExitePaymentMehtod)
                    console.log(convert);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
    
            fetchData();
        }
    }, [author, transType, method]);


   // ======================= insert transaction data to database =====================================

    const handleSubmiteInsert = async () => {
        const transactionInfo = {
            userName: userName,
            transactionId: inputValue,
            transactionType: localDat?.type,
            amount: localDat?.amount,
            number: userNumber,
            paymentMethod: localDat.paymentMethod,
            paymentChannel: localDat.channel,
            authorId: author,
        }

            // here are transaction save and alert section

        console.log(transactionInfo);
        
        
        if (Object.keys(transactionInfo).every(item => item)) {
            try {
            const insertData = await axios.post('https://pay-winbd-server.vercel.app/insertTransaction',transactionInfo);
                console.log(insertData.data);
                if (insertData.data.message === 'Transaction inserted successfully') {
                    setShowMassage(insertData.data.message)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your transaction succesfully send",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                if (insertData.data.message === 'transaction already exite') {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "transaction already exite!",
                      });
                }
           } catch (error) {
            console.error('Error:', error.message);
        }
        }   
    }

    // return the home page
    useEffect(() => {
        if (showmassage === 'Transaction inserted successfully') {
          const timer = setTimeout(() => {
            setRedirect(true);
          }, 1000); // 2000 milliseconds = 2 seconds
    
          return () => clearTimeout(timer); // Cleanup timeout if the component unmounts
        }
      }, [showmassage, minutes, seconds]);
    
      if (redirect) {
        return <Navigate to="/profile/user" replace={true} />;
      }


    console.log(showNumber);
    
    return (
        <div className="flex flex-col items-center  space-y-6 w-full py-5 px-4 bg-[#272727]  min-h-screen">
      <div className="w-full space-y-6 bg-[#313131] px-3 py-4 rounded-md">
        <div className="text-left space-y-4">
        <div className=" bg-[#313131]  rounded-md flex w-full h-full justify-between items-center">
            <h1 className="text-2xl text-white font-bold">
                   Transaction Details
            </h1>

               <span className="text-2xl text-white border rounded-full p-2 bg-[#15803D] border-[#15803D] cursor-pointer"><Link to={'/profile/user'}><CiHome />  </Link></span> 
                        
        </div>
          <div className="flex items-center space-x-2">
            <img src='https://img.freepik.com/free-vector/online-lending-isometric-composition-customer-with-mobile-device-during-getting-loan-blue_1284-29182.jpg?size=626&ext=jpg' alt="Payment Method" className="h-6" />
            <div>
                <p className=" text-white">Payment Method: {localDat?.paymentMethod}</p>
                
           </div>
          </div>
                <p className="text-white">Amount: ${localDat?.amount}</p>
                <p className={`${ localDat?.type  ? "hidden" : ""}`}>Payment Type: { localDat?.channel }</p>
                <p className={`${localDat?.type === 'withdraw'? 'hidden' : 'text-white' }`}>Payment Number: {showNumber?.number}</p>
                    
             <div className="text-white">
                <h1 className={`${localDat?.type === 'withdraw'? 'hidden' : 'text-white' }`}>Please paymenent to the account below within minutes <span  className="text-red-600">{minutes}</span> sec <span className="text-red-600">{seconds}</span></h1>
            </div>
        </div>
                 
         </div>
            
        <div className="w-full bg-[#313131]  rounded-md px-3 py-4">
          <div className={`${localDat.type === 'withdraw' ? 'hidden' :''}`}>
                <input
                type="text"
                onChange={(e)=>setInputValue(e.target.value)}   
                placeholder="Enter transaction ID"
                className="w-full py-2 px-3 bg-[#272727] focus:outline-none rounded-md text-white "
                />
           </div>
                <p className="text-gray- mt-4 text-white">Your Number: {userNumber}</p>
        </div>
      
      <button onClick={handleSubmiteInsert} disabled={showmassage === 'Transaction inserted successfully'} className={`bg-[#19A277] hover:bg-green-700 text-white font-semibold py-2 px-4 rounded w-full `} >
        Confirm {localDat?.type}
      </button>
    </div>
    );
};

export default ConfirmPay;