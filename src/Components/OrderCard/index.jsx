import { XMarkIcon } from "@heroicons/react/24/outline"
import PropTypes from "prop-types";
import { usdToCop } from "../../Utils/usdToCop";

const OrderCard = ({ id, title, imageURL, price, handleDelete }) => { 

    OrderCard.propTypes = {
        id: PropTypes.any.isRequired,
        title: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        handleDelete: PropTypes.func.isRequired
    }

    return(
        <div className="flex justify-between items-center my-4">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20 ">
                    <img className="w-full h-full object-scale-down" src={imageURL} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
                <p className="text-lg font-medium">{usdToCop(price)}</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
                <XMarkIcon 
                    className="size-6 text-black"
                    onClick={() => handleDelete(id)}
                />
            </div>
        </div>
    )
}

export default OrderCard