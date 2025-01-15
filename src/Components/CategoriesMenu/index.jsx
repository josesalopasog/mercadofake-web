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
                                to="/vehiculos"

                                onClick={() => context.setSearchByCategory('Vehiculos')}
                            >
                                <li className='category-item'>Vehiculos</li>
                            </NavLink>                          
                        
                        
                            <NavLink
                                to="/vehiculos"

                                onClick={() => context.setSearchByCategory('Vehiculos')}
                            >
                                <li className='category-item'>Supermecado</li>
                            </NavLink>                          
                        
                        
                            <NavLink
                                to="/tecnologia"
                                onClick={() => context.setSearchByCategory('Tecnología')}
                            >
                                <li className='category-item'>Tecnología</li>
                            </NavLink>
                        
                        
                            <NavLink
                                to="/moda"
                                onClick={() => context.setSearchByCategory('Ropa')}
                            >
                                <li className='category-item'>Moda</li>
                            </NavLink>

                            <NavLink
                                to="/juegos-y-juguetes"
                                onClick={() => context.setSearchByCategory('Juguetes')}
                            >
                                <li className='category-item'>Juegos y juguetes</li>
                            </NavLink>
                        
                        
                            <NavLink
                                to="/herramientas"
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