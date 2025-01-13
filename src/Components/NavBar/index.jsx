import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { MapPinIcon, ShoppingCartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import CartContext from "../../Context/CartContext"

const NavBar = () => {
    const context = useContext(CartContext)
    const activeStyle = 'underline underline-offset-4'
    const navigate = useNavigate();

    const handleSearch = () => {
        if (context.searchQuery.trim() === ''){
            return;
        }
        context.setSearchByTitle(context.searchQuery); // Ejecuta el filtrado al hacer clic
        navigate('/search-list');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <nav className=" grid w-[full] bg-[#FFE600] text-[14px] py-[10px]">
            <div className="max-w-[100%] min-w-[80%] justify-self-center ">
                <div className="nav-menu-top flex mr-1">
                    <NavLink to='/'>
                        <img src="\img\logo-mercadofake.png" alt="mercadofake-logo" width="180px" />
                    </NavLink>
                    <div className=" relative flex w-[565px] h-[50px] p-1 items-center rounded-md overflow-hidden">
                        <input
                            type="text"
                            className="w-[90%] h-[40px] flex-grow p-5 pr-11 focus:outline-blue-500"
                            placeholder="Buscar productos, marcas y más..."
                            onChange={(event) => context.setSearchQuery(event.target.value)}
                            onKeyDown={(event) => handleKeyDown(event)}
                        />
                        <button
                            className="absolute right-0 top-4 px-4 text-gray-500 hover:text-blue-500"
                            onClick={handleSearch}
                        >
                            <MagnifyingGlassIcon className="h-5 w-5" />
                        </button>
                    </div>

                </div>

                <div className="nav-menu-bottom flex justify-between items-center" >
                    <div className="flex w-[80px] ">
                        <NavLink to='/'>
                            <div className="flex">
                                <MapPinIcon className="size-12 text-black/60 mr-1" strokeWidth={"0.8px"}></MapPinIcon>
                                <div>
                                    <span className="text-[12px] text-black/50 ">Ingresa tu </span>
                                    <span>Ubicación</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>

                    <ul className="flex items-center gap-4 ">
                        <li className="nav-menu-time">
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Categorías
                            </NavLink>
                        </li>
                        <li className="nav-menu-time">
                            <NavLink
                                to='/ofertas'
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Ofertas
                            </NavLink>
                        </li>
                        <li className="nav-menu-time">
                            <NavLink
                                to='/cupones'
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Cupones
                            </NavLink>
                        </li>
                        <li className="nav-menu-time">
                            <NavLink
                                to='/supermercado'
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Supermercado
                            </NavLink>
                        </li>
                        <li className="nav-menu-time">
                            <NavLink
                                to='/ropa'
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Moda
                            </NavLink>
                        </li>
                        <li className="nav-menu-time">
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Mercado Play
                            </NavLink>
                        </li>
                        <li className="nav-menu-time">
                            <NavLink
                                to='/publicar'
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Vender
                            </NavLink>
                        </li>
                        <li className="nav-menu-time">
                            <NavLink
                                to='/ayuda'
                                className={({ isActive }) =>
                                    isActive ? activeStyle : undefined
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
                            <div className="flex absolute top-[65px]">
                                <ShoppingCartIcon
                                    className="size-7 text-black cursor-pointer"
                                    strokeWidth={"0.9px"}
                                    onClick={() => context.openCartSideMenu()}
                                />
                                <div className="w-[13px] h-[15px] absolute right-[6px] bottom-[15px] rounded-full z-1 bg-[#FFE600] text-[12px] text-center ">
                                    {context.count}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default NavBar