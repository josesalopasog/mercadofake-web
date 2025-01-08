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

    //Product Detail · Show Product
    const [productToShow, setProductToShow] = useState({});

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
            setProductToShow
        }}>
            {children}
        </CartContext.Provider>
    )
}