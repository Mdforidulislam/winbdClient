import axios from "axios";
import { createContext, useEffect, useState } from "react";
import saveUserInfoLocalStore from "./saveUserDataLocal";
import getLocalUserData from "./getLocalStore";

export const AuthContext = createContext(null);

const Authentication = ({ children }) => {

  const [userInfo, setUserInfo] = useState(getLocalUserData()) // store the value for user athutication 
  const [role, setRole] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState(0);
  const [channel, setChannel] = useState('');
  const [type, setType] = useState('');
  const [stoeObject, setStoreObject] = useState({});
  const [modalAction, setModalaction] = useState(true); // set for all the modal action 
  const [registerInfo, setRegisterInfo] = useState({});
  const [error, setError] = useState('');
  const [userSearchData, setUserSearchData] = useState([]); // set users search data history data here 
  const [optionValue, setOptionValue] = useState('এক্সট্রা ১.৫% ডিপোজিট বোনাস'); // set the promotion opton set here 
  const [rediectionDW, setrediectionDW] = useState('');
  //==================== ahutentication data ============================ 

  const loginUserNamePassword = async(userName, password) => {
    try {
      const res = await fetch(`https://pay-winbd-server.vercel.app/userValidation?userName=${userName}&password=${password}`);
      const data = await res.json()
      setRole(data?.role);

      const uniqueId = data?.uniqueId;
      const authorId = data?.authorId;
      saveUserInfoLocalStore(userName, password, uniqueId, authorId);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // =============================== byDefault store value authenticatio =========================== 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://pay-winbd-server.vercel.app/userValidation?userName=${userInfo.userName}&password=${userInfo.password}`);
        const data = await res.json()
        setRole(data?.role)
        setRegisterInfo(data)
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [userInfo.userName, userInfo.password]);

  // ---------------------------- ednd here ----------------------------
  console.log(registerInfo);
  console.log(userInfo.userName,userInfo.password);


  // ============================ userTrnsation Info Store =================================
// Initialize state for transaction information



const userTransationOption = (type) => {
  setType(type);
}

// geting user PaymentMethod 
const userPaymentMehtod = (payment) => {
  setPaymentMethod(payment)
}

// userDeopsiteChanel info

const userDepositeChanel = (chanel) => {
  setChannel(chanel)
}

// userAount Need 
const userAmountInfo = (amount) => {
  setAmount(amount)
  }
  
// handle action here for save data to the localsoter for geting next page 

const handleAction = (amount) => {
    const transationInfo =  {
      paymentMethod,
      amount,
      channel,
      type
  }
  
  if (amount === 0) {
    setError('please selete some of amount');
  }

    setStoreObject(transationInfo)
    const convertSringfy = JSON.stringify(transationInfo);
       localStorage.setItem('userTransaction', convertSringfy);
    console.log(transationInfo);
 }

  // context provide value 
  const authInfo = {
    loginUserNamePassword,
    role,
    userTransationOption,
    userPaymentMehtod,
    userDepositeChanel,
    userAmountInfo,
    handleAction,
    stoeObject,
    setModalaction,
    modalAction,
    setRole,
    error,
    channel,
    setUserSearchData,
    userSearchData,
    setOptionValue,
    optionValue,
    setrediectionDW
  };
  
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authentication;
