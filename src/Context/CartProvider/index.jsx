import { useState } from "react";
import PropTypes from "prop-types";
import CartContext from "../CartContext";


export const CartProvider = ( { children }) => {

    const [count, setCount] = useState(0);

    CartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    return (
        <CartContext.Provider value={{
            count,
            setCount,
        }}>
            {children}
        </CartContext.Provider>
    )
}