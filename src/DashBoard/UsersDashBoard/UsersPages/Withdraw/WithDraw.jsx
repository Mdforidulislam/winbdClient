
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import DepositeChennel from "../DepositeChanel/DepositeChennel";
import Amount from "../Amount/Amount";

const WithDraw = () => {
  return (
    <div>
      <PaymentMethod number={3}/>
      <Amount number={8}/>
    </div>
  );
};

export default WithDraw;
