import { XMarkIcon } from "@heroicons/react/24/outline"
import PropTypes from "prop-types";

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
                <figure className="w-20 h-20">
                    <img className="w-full h-full object-cover" src={imageURL} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
                <p className="text-lg font-medium">{price}</p>
                <XMarkIcon 
                    className="size-6 text-black"
                    onClick={() => handleDelete(id)}
                />
            </div>
        </div>
    )
}

export default OrderCard