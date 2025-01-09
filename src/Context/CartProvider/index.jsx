import { useState } from "react";
import PropTypes from "prop-types";
import CartContext from "../CartContext";


export const CartProvider = ( { children }) => {
    //Shopping Cart · Count
    const [count, setCount] = useState(0);
    
    //Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //Cart Side Menu · Open/Close
    const [isCartSideMenuOpen, setIsCartSideMenu] = useState(false);
    const openCartSideMenu = () => setIsCartSideMenu(true);
    const closeCartSideMenu = () => setIsCartSideMenu(false);

    //Product Detail · Show Product
    const [productToShow, setProductToShow] = useState({});
    
    //Shopping Cart · Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    CartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    return (
        <CartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCartSideMenuOpen,
            openCartSideMenu,
            closeCartSideMenu
        }}>
            {children}
        </CartContext.Provider>
    )
}