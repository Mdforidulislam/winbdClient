import amountes from '../../../../../../../public/amount.json'
import { HiMiniXMark } from "react-icons/hi2";

const WithDrawAmount = () => {
    return (
        <div>
            <div className="xl:px-24 lg:px-20 md:px-18 sm:px-14 px-12">
                <div className='border-b border-[#ffffff28] pb-3 flex items-center justify-between'>
                    <h2 className="text-lg font-medium border-l-4 rounded text-[#fff] border-[#0E735C] px-2">Amount</h2>
                    <p className="font-medium text-[#acaaaa]">$3000 - $4500</p>
                </div>

                <div className='py-4 grid xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-4 gap-4'>
                    {
                        amountes.map((amount, index) => <div key={index}>
                            <p className='border border-[#9b9b9b] text-center text-[#fff] p-1 rounded hover:border-[yellow] hover:text-[yellow] duration-300 cursor-pointer'>{amount.amount}</p>
                        </div>)
                    }

                </div>
                <form className='border border-[#9b9b9b] flex items-center justify-between px-4 py-2'>
                    <input disabled className='outline-none w-full bg-transparent text-[#fff]' type="text" placeholder='Your Amount..' />
                    <p className='p-1 bg-[#0E735C] hover:bg-[red] duration-300 cursor-pointer text-sm font-medium rounded-full text-[#fff]'><HiMiniXMark /></p>
                </form>

            </div>
        </div>
    );
};

export default WithDrawAmount;