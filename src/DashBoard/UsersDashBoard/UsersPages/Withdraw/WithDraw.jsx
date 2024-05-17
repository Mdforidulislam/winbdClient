
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import Amount from "../Amount/Amount";
import { AuthContext } from "../../../../Authentication/Authentication";
import { useContext } from "react";

const WithDraw = () => {
  const { userTransationOption } = useContext(AuthContext)
  userTransationOption('withdraw')
  return (
    <div>
      <div className="mt-2">
      <PaymentMethod number={3}/>
      </div>
      <div className="mt-2">
      <Amount number={8} withdraw='withdraw'/>
      </div>
    </div>
  );
};

export default WithDraw;
