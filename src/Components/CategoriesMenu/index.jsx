import './styles.css'
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import { NavLink } from 'react-router-dom'

const CategoriesMenu = () => {
    const context = useContext(CartContext);

    return(
        <div 
            className={`${context.isCategoriesMenuOpen ? 'flex' : 'hidden'} categories-menu absolute  bg-black/50`}
            onClick={() => context.closeCategoriesMenu()}
        >
            <div 
                className='flex flex-col absolute rounded-md text-white bg-[#333333] w-[200px] py-5'
                style={context.position}
                onClick={(e) => e.stopPropagation()}
                onMouseLeave={() => context.closeCategoriesMenu()}
            >
                <div className="dropdown-triangle"></div>
                    <ul>
                            <NavLink
                                to="/mercadofake-web/vehiculos"
                                className={"opacity-50 pointer-events-none"}
                                onClick={() => context.setSearchByCategory('Vehiculos')}
                            >
                                <li className='category-item'>Vehiculos</li>
                            </NavLink>                          
                        
                        
                            <NavLink
                                to="/mercadofake-web/supermercado"
                                className={"opacity-50 pointer-events-none"}
                                onClick={() => context.setSearchByCategory('Supermecado')}
                            >
                                <li className='category-item '>Supermecado</li>
                            </NavLink>                          
                        
                            <NavLink
                                to="/mercadofake-web/tecnologia"
                                onClick={() => context.setSearchByCategory('Tecnología')}
                            >
                                <li className='category-item'>Tecnología</li>
                            </NavLink>
                        
                            <NavLink
                                to="/mercadofake-web/electrodomesticos"
                                className={"opacity-50 pointer-events-none"}
                                onClick={() => context.setSearchByCategory('Electrodomésticos')}
                            >
                                <li className='category-item '>Electrodomésticos</li>
                            </NavLink>
                            
                            <NavLink
                                to="/mercadofake-web/hogar-y-muebles"
                                className={"opacity-50 pointer-events-none"}
                                onClick={() => context.setSearchByCategory('Hogar y muebles')}
                            >
                                <li className='category-item '>Hogar y muebles</li>
                            </NavLink>

                            <NavLink
                                to="/mercadofake-web/deportes-y-fitness"
                                className={"opacity-50 pointer-events-none"}
                                onClick={() => context.setSearchByCategory('Hogar y muebles')}
                            >
                                <li className='category-item '>Deportes y Fitness</li>
                            </NavLink>    

                            <NavLink
                                to="/mercadofake-web/moda"
                                onClick={() => context.setSearchByCategory('Ropa')}
                            >
                                <li className='category-item'>Moda</li>
                            </NavLink>

                            <NavLink
                                to="/mercadofake-web/juegos-y-juguetes"
                                onClick={() => context.setSearchByCategory('Juguetes')}
                            >
                                <li className='category-item'>Juegos y juguetes</li>
                            </NavLink>
                        
                        
                            <NavLink
                                to="/mercadofake-web/herramientas"
                                onClick={() => context.setSearchByCategory('Herramientas')}
                            >
                                <li className='category-item'>Herramientas</li>
                            </NavLink>
                        
                    </ul>
            </div>
        </div>   
    )
}

export default CategoriesMenu