import { useContext } from "react"
import { NavLink } from "react-router-dom"
import CartContext from "../../Context/CartContext"

const NavBar = () => {
    const context = useContext(CartContext)
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className=" grid w-full bg-[#FFE600] text-[14px] pt-[10px] pr-[10%] pb-[10px] pl-[10%] ">
            <div className="nav-menu-top flex">
                <NavLink to='/'>
                    <img src="\img\logo-mercadofake.png" alt="mercadofake-logo" width={180}/>
                </NavLink>
                <input type="text" className="w-[412px] h-[40px] p-5 " placeholder="Buscar productos, marcas y más..."></input>
            </div>

            <div className="nav-menu-bottom flex justify-between items-center">
                <div className="flex w-[80px] ">
                    <NavLink to='/'>
                        <span className="text-[12px] text-gray-500 ">Ingresa tu </span>
                        <span>Ubicación</span> 
                    </NavLink>
                </div>
                
                <ul className="flex items-center gap-4 ">
                    <li className="nav-menu-time">
                        <NavLink 
                            to='/'
                            className={({ isActive }) =>
                                isActive ? activeStyle: undefined
                        }>
                            Categorías
                        </NavLink>
                    </li>
                    <li className="nav-menu-time">
                        <NavLink 
                            to='/ofertas'
                            className={({ isActive }) =>
                                isActive ? activeStyle: undefined
                        }>
                            Ofertas
                        </NavLink>
                    </li>
                    <li className="nav-menu-time">
                        <NavLink 
                            to='/cupones'
                            className={({ isActive }) =>
                                isActive ? activeStyle: undefined
                        }>
                            Cupones
                        </NavLink>
                    </li>
                    <li className="nav-menu-time">
                        <NavLink 
                            to='/supermercado'
                            className={({ isActive }) =>
                                isActive ? activeStyle: undefined
                        }>
                            Supermercado
                        </NavLink>
                    </li>
                    <li className="nav-menu-time">
                        <NavLink 
                            to='/ropa'
                            className={({ isActive }) =>
                                isActive ? activeStyle: undefined
                        }>
                            Moda
                        </NavLink>
                    </li>
                    <li className="nav-menu-time">
                        <NavLink 
                            to='/'
                            className={({ isActive }) =>
                                isActive ? activeStyle: undefined
                        }>
                            Mercado Play
                        </NavLink>
                    </li>
                    <li className="nav-menu-time">
                        <NavLink 
                            to='/publicar'
                            className={({ isActive }) =>
                                isActive ? activeStyle: undefined
                        }>
                            Vender
                        </NavLink>
                    </li>
                    <li className="nav-menu-time">
                        <NavLink 
                            to='/ayuda'
                            className={({ isActive }) =>
                                isActive ? activeStyle: undefined
                        }>
                            Ayuda
                        </NavLink>
                    </li>
                </ul>
                <ul className="flex items-center gap-2">
                    <li>
                        <NavLink to='/'>
                            Crea tu cuenta
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/sign-in'>
                            Ingresa
                        </NavLink>                        
                    </li>
                    <li>
                        <NavLink to='/my-purchases'>
                            Mis Compras
                        </NavLink>                        
                    </li>
                    <li>
                        <NavLink to='/my-cart'>
                            🛒{context.count}
                        </NavLink>                        
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default NavBar