import { Link } from "react-router-dom"
import { StarIcon } from "@heroicons/react/24/outline"
import PropTypes from "prop-types"
import { usdToCop } from "../../Utils/usdToCop"


const MyOrderCard = ({ id, title, imageURL, price }) => {

    MyOrderCard.propTypes = {
        id: PropTypes.any.isRequired,
        title: PropTypes.string.isRequired,
        imageURL: PropTypes.array.isRequired,
        price: PropTypes.number.isRequired,
    }

    console.log(imageURL[0])
    return (

        <div className="flex flex-col w-[100%] h-[100vh] bg-[#EDEDED]  px-5 py-10">
            <div className="path text-left">
                <Link to='/my-purchases'>
                    <span className="hover:text-blue-500">Compras</span>
                </Link>
                <span> {">"} </span>
                <span>Estado de la compra</span>
            </div>
            <div className="flex flex-row justify-between my-5 p-5 bg-white rounded-lg shadow-lg">
                <h1>{title}</h1>
                <img className="w-full h-full object-scale-down" src={imageURL[0]} alt={title} />
            </div>
            <div className="my-5 p-5 bg-white rounded-lg shadow-lg">
                <h1 className="font-bold">Detalle de la compra</h1>
                <p className="text-black/40 text-[14px] py-2">2 de enero | {id} </p>
                <hr className="my-2" />
                <p className="flex justify-between text-black/50 my-5">
                    <span>Producto</span>
                    <span>{usdToCop(price)}</span>
                </p>
                <p className="flex justify-between text-black/50 my-5">
                    <span>Envío</span>
                    <span className="text-green-500">Gratis</span>
                </p>
                <hr className="my-2" />
                <p className="flex justify-between text-black/50 mt-5">
                    <span>Total</span>
                    <span>{usdToCop(price)}</span>
                </p>
            </div>
            <div className="my-5 p-5 bg-white rounded-lg shadow-lg">
                <p className="flex flex-row">
                    <span className="mr-5">¿Que te pareció tu producto?</span>
                    <StarIcon className="mx-1 size-6 text-black/20 cursor-pointer hover:text-blue-600/80"></StarIcon>
                    <StarIcon className="mx-1 size-6 text-black/20 cursor-pointer hover:text-blue-600/80"></StarIcon>
                    <StarIcon className="mx-1 size-6 text-black/20 cursor-pointer hover:text-blue-600/80"></StarIcon>
                    <StarIcon className="mx-1 size-6 text-black/20 cursor-pointer hover:text-blue-600/80"></StarIcon>
                    <StarIcon className="mx-1 size-6 text-black/20 cursor-pointer hover:text-blue-600/80"></StarIcon>
                </p>
            </div>
        </div>
    )
}

export default MyOrderCard