import { useContext } from "react"
import { ShoppingCartIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import CartContext from "../../Context/CartContext"
import { usdToCop } from "../../Utils/usdToCop"

const Card = (data) => {
    const context = useContext( CartContext)

    const showProduct = (productDetail) =>{
        context.openProductDetail();
        context.setProductToShow(productDetail);
    }

    const addProductsToCart = (event, productData) =>{
        event.stopPropagation();
        context.closeProductDetail();
        context.setCount(context.count +1);
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCartSideMenu();
        console.log('CART: ', context.cartProducts);
    }

    const addProductButton = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {
            return(
                <button 
                    className="bg-green-500 text-white font-bold w-[100%] h-[35px] rounded-lg mt-2 mb-2 flex justify-center p-1"
                > 
                    <span className="mr-2">Agregado </span>
                    <span>
                        <CheckCircleIcon className="size-7 text-white" strokeWidth={"2px"} />
                    </span>
                </button>
            )
        }else{
            return(
                <button 
                    className="bg-blue-500 text-white font-bold w-[100%] h-[35px] rounded-lg mt-2 mb-2 flex justify-center p-1"
                    onClick={(event) => addProductsToCart(event, data.data)}
                > 
                    <span className="mr-2">Agregar </span>
                    <span>
                        <ShoppingCartIcon className="size-7 text-white" strokeWidth={"2px"} />
                    </span>
                </button>
            )            
        }
    }

    return(
        <div 
            className="bg-white cursor-pointer w-[240px] h-[360px] p-5 rounded-lg flex flex-col m-2"
            onClick={() => showProduct(data.data)}
        >
            <figure className="relative w-[100%] h-[160px] mb-3">
                <span className="absolute bottom-0 left-0 rounded-lg bg-slate-600/30 text-white text-sm m-2 px-3 py-0.3">{data.data.category}</span>
                <img className="w-full h-full object-scale-down rounded-lg" src={data.data.images[0]} alt={data.data.title} />
            </figure>

            <div>
                <p className="text-sm font-light h-[45px] ">{data.data.title}</p>
                <p className="text-[20px] font-medium">{usdToCop(data.data.price)}</p>
            </div>
            {addProductButton(data.data.id)}
            <p className="mt-2 mb-2 text-green-600 text-[14px] font-bold">Envío gratis</p>
        </div>
    )
}

export default Card