import './styles.css'
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import OrderCard from '../OrderCard'

const CartSideMenu = () => {
    const context = useContext(CartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
        context.setCount(context.count -1);
    }

    return(
        <div 
            className={`${context.isCartSideMenuOpen ? 'flex' : 'hidden'} side-menu flex-col fixed right-0 border border-black rounded-lg bg-white p-6 `}
        >
            <div className="flex justify-between items-center">
                <h2 className='font-medium text-xl'>My Order</h2>
                <div
                    className='cursor-pointer' 
                    onClick={() => context.closeCartSideMenu()}
                >
                    <XMarkIcon className="size-6 text-black"/>
                </div>
            </div>
            <div className='overflow-y-scroll'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}  
                            imageURL={product.images[0]}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }                
            </div>

        </div>
    )
}

export default CartSideMenu