import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const WithDrawPayment = () => {
    const [methodIcons, setMethodIcons] = useState([])

    useEffect(() => {
        fetch('method.json')
            .then(res => res.json())
            .then(data => {
                setMethodIcons(data)
            })
    }, [])
    
    return (
        <div className="xl:border-b-0 lg:border-b-0 border-b-8 border-[#262626]">
            <div className="xl:px-24 lg:px-20 md:px-18 sm:px-14 px-12 py-2">
                <div className='border-b border-[#ffffff28] pb-3'>
                    <h2 className="text-lg font-medium border-l-4 rounded text-[#fff] border-[#0E735C] px-2">Payment Method</h2>
                </div>
                <div className='grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 xl:gap-4 lg:gap-4 md:gap-3 gap-2 my-6'>
                    {
                        // eslint-disable-next-line react/prop-types
                        methodIcons.map((icon, index) => <div key={index}>

                            <div className='border border-[#9b9b9b] group hover:border-[yellow] duration-200 cursor-pointer text-center py-2 rounded relative'>
                                <img className='' src={icon.img} alt="" />
                                <p className='text-lg group-hover:text-[yellow] font-medium duration-300 capitalize text-[#fff]'>{icon.title}</p>
                                <div className='top-0 right-0 absolute p-1 bg-[red] text-[#fff] text-sm rounded-tr font-medium'>
                                    <p>+{icon?.offer}</p>
                                </div>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default WithDrawPayment;