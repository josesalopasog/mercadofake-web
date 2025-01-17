import { useContext } from "react";
import { Link } from "react-router-dom";
import OrdersCard from "../../Components/OrdersCard";
import CartContext from "../../Context/CartContext";

function MyPurchases() {
  const context = useContext(CartContext);

  return (
    <div className="flex flex-col w-[60%] h-[100vh] bg-[#EDEDED]  px-5 py-10">
      <h1 className="text-[24px] font-semibold">Compras</h1>
      {context.order.map((order, index) => (
        <Link key={index} to={`/mercadofake-web/my-purchases/${index}`} >
          <OrdersCard
            date={order.date}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>  
      ))
      }
    </div>
  );
}

export default MyPurchases;
