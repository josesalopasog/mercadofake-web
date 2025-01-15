import { useState, useEffect, useRef } from "react";
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

    //Categories Menu · Open/Close
    const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);
    const openCategoriesMenu = () => setIsCategoriesMenuOpen(true);
    const closeCategoriesMenu = () => setIsCategoriesMenuOpen(false);

    //Categories Menu · Position
    const [position, setPosition] = useState({left: 0});
    const categoriesNavRef = useRef(null);

    //Product Detail · Show Product
    const [productToShow, setProductToShow] = useState({});
    
    //Shopping Cart · Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    //Shopping Cart · Order
    const [order, setOrder] = useState([]);

    // Get Products
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const [filteredItemsByCat, setFilteredItemsByCat] = useState(null);

    // Get Products by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Get Products by category
    const [searchByCategory, setSearchByCategory] = useState(null);


    CartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    useEffect(() => {
        // fetch("https://api.escuelajs.co/api/v1/products")
        fetch("src/Products/products.json")
          .then((response) => {
            if(!response.ok){
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json()
          })
          .then((data) => {
            setItems(data);
            // console.log('Datos recibidos: ', data);
          })
          .catch((error) => console.error('Error al cargar los datos:', error));
      }, []);

      const filteredItemsByTitle = (items, searchByTitle) =>{
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }

      const filteredItemsByCategory = (items, searchByCategory) =>{
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
      }

      useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
        if (searchByCategory) setFilteredItemsByCat(filteredItemsByCategory(items, searchByCategory))
        }, [items,searchByTitle, searchByCategory])

      //Giving the position to de Categories Menu 
      
      const updatePosition = () => {
        if (categoriesNavRef.current) {
          const rect = categoriesNavRef.current.getBoundingClientRect();
          setPosition({ left: rect.left - 25 });
        }
      };
      
      // Manejar el cambio de tamaño de la ventana
      useEffect(() => {
        updatePosition();
        window.addEventListener('resize', updatePosition);
        return () => window.removeEventListener('resize', updatePosition);
      }, []);
    

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
            closeCartSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            filteredItemsByCat,
            searchQuery,
            setSearchQuery,
            searchByCategory, 
            setSearchByCategory,
            isCategoriesMenuOpen, 
            setIsCategoriesMenuOpen,
            openCategoriesMenu,
            closeCategoriesMenu,
            position, 
            setPosition,
            categoriesNavRef
        }}>
            {children}
        </CartContext.Provider>
    )
}