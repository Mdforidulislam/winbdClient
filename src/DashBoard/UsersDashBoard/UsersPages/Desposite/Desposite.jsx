import Amount from "../Amount/Amount";
import DepositeChennel from "../DepositeChanel/DepositeChennel";
import PaymentMethod from "../PaymentMethod/PaymentMethod";

const Desposite = () => {
    return (
        <div>
            <PaymentMethod />
            <DepositeChennel />
            <Amount />
        </div>
    );
};

export default Desposite;