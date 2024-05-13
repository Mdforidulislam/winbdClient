import Amount from "../Amount/Amount";
import DepositeChennel from "../DepositeChanel/DepositeChennel";
import PaymentMethod from "../PaymentMethod/PaymentMethod";

const Desposite = () => {
    return (
        <div>
            <div className="mt-3"><PaymentMethod /></div>
            <div className="mt-3"><DepositeChennel /></div>
            <div className="mt-3"> <Amount /></div>
        </div>
    );
};

export default Desposite;