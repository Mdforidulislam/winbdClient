import { useContext } from "react";
import Amount from "../Amount/Amount";
import DepositeChennel from "../DepositeChanel/DepositeChennel";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import { AuthContext } from "../../../../Authentication/Authentication";

const Desposite = () => {
    const { userTransationOption } = useContext(AuthContext)
    userTransationOption('deposite')
    return (
        <div>
            <div className="mt-3"><PaymentMethod /></div>
            <div className="mt-3"><DepositeChennel /></div>
            <div className="mt-3"> <Amount deposite="deposite" /></div>
        </div>
    );
};

export default Desposite;