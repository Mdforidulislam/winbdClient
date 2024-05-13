
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import Amount from "../Amount/Amount";

const WithDraw = () => {
  return (
    <div>
      <div className="mt-2">
      <PaymentMethod number={3}/>
      </div>
      <div className="mt-2">
      <Amount number={8}/>
      </div>
    </div>
  );
};

export default WithDraw;
