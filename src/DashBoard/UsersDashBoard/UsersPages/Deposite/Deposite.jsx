

import DepositAmount from './DepositeAmount/DepositeAmount';
import DepositChannel from './DepositeChancel/DepositeCancel';
import DepositPayment from './DepositePayment/DepositePyment';
import DepositSyestem from './DepositeSystem/DepositeSystem';

const Deposit = () => {
    
    return (
        <div>
            <div>
                <DepositPayment></DepositPayment>
            </div>

            <div className='py-6'>
                <DepositChannel></DepositChannel>
            </div>

            <div className='py-6'>
                 <DepositAmount></DepositAmount>
            </div>

            <div>
                <DepositSyestem></DepositSyestem>
            </div>
        </div>
    );
};

export default Deposit;