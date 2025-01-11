import PropTypes from "prop-types"
import { usdToCop } from "../../Utils/usdToCop"


const MyOrderCard = ({ title, price }) => {

    MyOrderCard.propTypes = {
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }

    return (
        <div>
            <div>
                <p className="flex justify-between text-black/50 my-5">
                    <span>{title}</span>
                    <span>{usdToCop(price)}</span>
                </p>
            </div>
        </div>
    )
}

export default MyOrderCard