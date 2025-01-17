import { Link } from "react-router-dom";
import { useContext } from "react";
import MyOrderCard from "../../Components/MyOrderCard";
import CartContext from "../../Context/CartContext";
import { StarIcon } from "@heroicons/react/24/outline";
import { usdToCop } from "../../Utils/usdToCop";

function MyOrder() {
  const context = useContext(CartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1

  return (
    <div className="flex flex-col w-[60%] h-[100vh] bg-[#EDEDED]  px-5 py-10">
      <div className="path text-left">
        <Link to="/mercadofake-web/my-purchases">
          <span className="hover:text-blue-500">Compras</span>
        </Link>
        <span> {">"} </span>
        <span>Estado de la compra</span>
      </div>

      <div className="my-5 p-5 bg-white rounded-lg shadow-lg">
        <h1 className="font-bold">Detalle de la compra</h1>
        <p className="text-black/40 text-[14px] py-2"> 
          Fecha de compra: {context.order.slice(-1)[0]?.date || " "}   
        </p>
        <hr className="my-2" />
        <div>
          {context.order?.length > 0 && context.order?.[index]?.products?.length > 0 ? (context.order?.[index].products.map((product) => (
                <MyOrderCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                />
              ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </div>

        <p className="flex justify-between text-black/50 my-5">
          <span>Envío</span>
          <span className="text-green-500">Gratis</span>
        </p>
        <hr className="my-2" />
        <p className="flex justify-between text-black/50 mt-5">
          <span>Total</span>
          <span>{usdToCop(context.order.slice(-1)[0]?.totalPrice || 0)} </span>
        </p>
      </div>

      <div className="my-5 p-5 bg-white rounded-lg shadow-lg">
        <p className="flex flex-row">
          <span className="mr-5">¿Que te pareció tu compra?</span>
          <StarIcon className="mx-1 size-6 text-black/20 cursor-pointer hover:text-blue-600/80"></StarIcon>
          <StarIcon className="mx-1 size-6 text-black/20 cursor-pointer hover:text-blue-600/80"></StarIcon>
          <StarIcon className="mx-1 size-6 text-black/20 cursor-pointer hover:text-blue-600/80"></StarIcon>
          <StarIcon className="mx-1 size-6 text-black/20 cursor-pointer hover:text-blue-600/80"></StarIcon>
          <StarIcon className="mx-1 size-6 text-black/20 cursor-pointer hover:text-blue-600/80"></StarIcon>
        </p>
      </div>
    </div>
  );
}

export default MyOrder;
