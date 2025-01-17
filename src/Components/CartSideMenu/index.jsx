import './styles.css'
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../Utils/totalPrice'
import { usdToCop } from '../../Utils/usdToCop'

const CartSideMenu = () => {
    const context = useContext(CartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
        context.setCount(context.count -1);
    }

    const handleCheckout = () => {
        const date = new Date;
        const orderToAdd = {
            date: `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`,
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.setCount(0);
        context.closeCartSideMenu();
        console.log(context.order);
    }

    const checkoutShoppingButton = () => {
        const areProductsInCart = context.count === 0;

        if (areProductsInCart) {
            return(
                <button 
                    className="bg-blue-100 text-blue-500 font-bold w-[100%] h-[35px] rounded-lg mt-10 mb-2 flex justify-center p-1"
                    onClick={context.closeCartSideMenu}
                > 
                    <span className="mr-2">Agrega Productos </span>
                </button>
            )
        }else{
            return(
                <Link to="/mercadofake-web/my-purchases/last">
                    <button 
                        className="bg-blue-500 text-white font-bold w-[100%] h-[35px] rounded-lg mt-10 mb-2 flex justify-center p-1"
                        onClick={()=>handleCheckout()}
                    > 
                        <span className="mr-2">Finalizar Compra </span>
                    </button>
                </Link>
            )            
        }
    }

    return(
        <div 
            className={`${context.isCartSideMenuOpen ? 'flex' : 'hidden'} side-menu flex-col fixed right-0 border border-black rounded-lg bg-white p-6 `}
        >
            <div className="flex justify-between items-center">
                <h2 className='font-medium text-xl'>Resumen de compra</h2>
                <div
                    className='cursor-pointer' 
                    onClick={() => context.closeCartSideMenu()}
                >
                    <XMarkIcon className="size-6 text-black"/>
                </div>
            </div>
            <div className='overflow-y-scroll flex-1'>
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
            <div className='mt-8'>
                <hr className='mb-4'/>
                <p className='flex justify-between font-bold text-[22px]'>
                    <span>Total:</span>
                    <span>{usdToCop(totalPrice(context.cartProducts))} </span>
                </p>
            </div>
            {checkoutShoppingButton()}
        </div>
    )
}

export default CartSideMenu