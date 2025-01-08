import { useContext } from "react"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import CartContext from "../../Context/CartContext"

const Card = (data) => {
    const context = useContext( CartContext)

    const showProduct = (productDetail) =>{
        context.openProductDetail();
        context.setProductToShow(productDetail)
    }

    return(
        <div 
            className="bg-white cursor-pointer w-56 h-90 rounded-lg flex flex-col"
            onClick={() => showProduct(data.data)}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 rounded-lg bg-slate-600/30 text-white text-sm m-2 px-3 py-0.3">{data.data.category.name}</span>
                <img className="w-full h-full object-cover" src={data.data.images[0]} alt={data.data.title} />
            </figure>
            <div>
                <p className="text-sm font-light h-[45px] ">{data.data.title}</p>
                <p className="text-[20px] font-medium">${data.data.price}.000 COP</p>
            </div>
            <button 
                className="bg-blue-500 text-white font-bold w-[100%] h-[35px] rounded-lg mt-2 mb-2 flex justify-center p-1"
                onClick={() => context.setCount(context.count +1)}
            > 
                <span className="mr-2">Agregar </span>
                <span>
                    <ShoppingCartIcon className="size-7 text-white" strokeWidth={"2px"} />
                </span>
            </button>
            <p className="mt-2 mb-2 text-green-600 text-[14px] font-bold">Envío gratis</p>
        </div>
    )
}

export default Card