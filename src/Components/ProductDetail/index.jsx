import './styles.css'
import { XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'

const ProductDetail = () => {
    const context = useContext(CartContext);

    return(
        <div 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white p-6 `}
        >
            <div className="flex justify-between items-center">
                <h2 className='font-medium text-xl'>{context.productToShow.title}</h2>
                <div
                    className='cursor-pointer' 
                    onClick={() => context.closeProductDetail()}
                >
                    <XMarkIcon className="size-6 text-black"/>
                </div>
            </div>
            <figure>
                <img className="w-[300PX] h-full p-7" src={context.productToShow.images[0]} alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col'>
                <span className='font-bold text-[20px] '>${context.productToShow.price}.000 COP</span>
                <span className='py-8'>{context.productToShow.description}</span>
            </p>
            <button 
                className="bg-blue-500 text-white font-bold w-[100%] h-[35px] rounded-lg mt-2 mb-2 flex justify-center p-1"
                onClick={() => context.setCount(context.count +1)}
            > 
                <span className="mr-2">Agregar </span>
                <span>
                    <ShoppingCartIcon className="size-7 text-white" strokeWidth={"2px"} />
                </span>
            </button>
        </div>
    )
}

export default ProductDetail