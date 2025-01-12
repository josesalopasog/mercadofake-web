import PropTypes from "prop-types";
import { usdToCop } from "../../Utils/usdToCop";
import { formatDate } from "../../Utils/formatDate";

const OrdersCard = ({ date, totalPrice, totalProducts}) => { 

    OrdersCard.propTypes = {
        date: PropTypes.any.isRequired,
        totalPrice: PropTypes.any.isRequired,
        totalProducts: PropTypes.any.isRequired,
       
    }

    return(
        <div className="my-5 p-5 bg-white rounded-lg shadow-lg">
            <h1 className="font-semibold">{formatDate(date)}</h1>
            <hr className="my-5"/>
            <div className="px-5 flex flex-row justify-between">
                <div>
                    <p>Precio Total: {usdToCop(totalPrice)}</p>
                    <p>Cantidad de productos: {totalProducts}</p>
                </div>    
                <button 
                    className="bg-blue-500 text-white font-bold w-[180px] h-[35px] rounded-lg flex justify-center p-1"
                > 
                    <span className="mr-2">Ver Compra</span>
                </button>
            </div>    
        </div>
    )
}

export default OrdersCard