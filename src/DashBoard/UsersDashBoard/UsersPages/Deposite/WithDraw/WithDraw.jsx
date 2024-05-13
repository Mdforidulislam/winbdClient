import DepositSyestem from "../DepositeSystem/DepositeSystem";
import WithDrawAmount from "./WithDrawAmount/WithDrawAmount";
import WithDrawPayment from "./WithDrawPayment/WithDrawPayment";


const WithDraw = () => {
    return (
        <div>
            <div>
                <WithDrawPayment></WithDrawPayment>
            </div>

            <div className='py-6'>
                 <WithDrawAmount></WithDrawAmount>
            </div>

            <div>
                <DepositSyestem></DepositSyestem>
            </div>
        </div>
    );
};

export default WithDraw;