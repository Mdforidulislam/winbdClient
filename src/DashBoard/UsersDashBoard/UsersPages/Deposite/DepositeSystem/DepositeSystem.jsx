import { BsExclamationCircleFill } from "react-icons/bs";

const DepositSyestem = () => {
    return (
        <div className="xl:px-24 lg:px-20 md:px-18 sm:px-14 px-12 py-6">
            <div className="px-4 py-6 border border-[#9b9b9b] rounded bg-[#262626]">
                <div className="flex items-baseline space-x-2">
                    <p className="text-[#fff] font-bold"><BsExclamationCircleFill /></p>
                    <div className="text-[#acacac] space-y-1">
                        <h2>Dear all member, to speed up your deposit process kindly follow these step:</h2>
                        <p>1. Verify the phone number you use to deposi </p>
                        <p>2.  Input the correct reference number </p>
                        <p>3.  Attach the successfull slip </p>
                        <h2>Remimber: Do not save the phone number displayed on website to show your money loss </h2>
                    </div>
                </div>
            </div>

            <div className="py-4 xl:w-none lg:w-none md:w-full">
                <input 
                className="py-3 xl:w-1/6 lg:w-1/6 w-full  text-center rounded bg-[#0E735C] hover:bg-[#0e735b8c] duration-300 text-[#fff] font-medium cursor-pointer"
                type="submit" value="SUBMIT" />
            </div>
        </div>
    );
};

export default DepositSyestem;