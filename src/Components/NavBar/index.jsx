import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
    MapPinIcon,
    ShoppingCartIcon,
    MagnifyingGlassIcon,
    ChevronDownIcon
} from "@heroicons/react/24/outline";
import CartContext from "../../Context/CartContext";

const NavBar = () => {
    const context = useContext(CartContext);
    const navigate = useNavigate();

    const handleSearch = () => {
        if (context.searchQuery.trim() === "") {
            return;
        }
        context.setSearchByTitle(context.searchQuery); // Ejecuta el filtrado al hacer clic
        navigate("/search-list");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <nav className=" grid grid-rows-2 grid-cols-[auto,auto,auto] w-[100%] bg-[#FFE600] text-[14px] py-[10px]">
            <div className="row-start-1 col-start-1 flex justify-end items-center">
                <NavLink to="/">
                    <img
                        src="\img\logo-mercadofake.png"
                        alt="mercadofake-logo"
                        width="180px"
                    />
                </NavLink>
            </div>
            <div className="row-start-1 col-start-2 flex justify-center items-center">
                <div className="relative flex w-[565px] h-[50px] p-1 rounded-md overflow-hidden">   
                    <input
                        type="text"
                        className="h-[40px] flex-grow p-5 pr-11 focus:outline-blue-500"
                        placeholder="Buscar productos, marcas y más..."
                        onChange={(event) => context.setSearchQuery(event.target.value)}
                        onKeyDown={(event) => handleKeyDown(event)}
                    />
                    <button
                        className="absolute right-4 top-4 text-gray-500 hover:text-blue-500"
                        onClick={handleSearch}
                    >
                        <MagnifyingGlassIcon className="h-5 w-5" />
                    </button>
                </div>     
            </div>

            <div className="row-start-1 col-start-3 flex justify-start items-center pl-7">
                <div 
                    className="w-[210px] h-[35px] px-3 bg-gradient-to-r from-[#35005A] to-[#B516C9] text-white font-bold rounded-lg shadow-md flex justify-between items-center cursor-pointer"
                    onClick={() => window.open("https://github.com/josesalopasog","_blank")}
                >
                    <span>
                        <svg className="w-5 fill-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                    </span>
                    <span>!Visitame en mi Github!</span>
                </div>
            </div>

            <div className="row-start-2 col-start-1 flex justify-end items-center pr-11">
                    <NavLink to="/">
                        <div className="flex w-[120px]">
                            <MapPinIcon
                                className=" size-11 text-black/60 mr-1"
                                strokeWidth={"0.8px"}
                            ></MapPinIcon>
                            <div>
                                <span className="text-[12px] text-black/50 ">Ingresa tu </span>
                                <span>Ubicación</span>
                            </div>
                        </div>
                    </NavLink>
            </div>

            <div className="row-start-2 col-start-2 flex justify-center items-center">
                <ul className=" flex items-center gap-4 cursor-pointer max-sm:12 ">
                    <li 
                        ref={context.categoriesNavRef}
                        className="flex flex-row nav-menu-time"
                        onMouseEnter={() => context.openCategoriesMenu()}
                        onClick={() => context.openCategoriesMenu()}
                    >
                        <span>Categorías</span> 
                        <span><ChevronDownIcon className="size-3 ml-[4px] mt-[7px] "/></span>
                    </li>
                    <li className="nav-menu-time">
                        <NavLink
                            to="/nothing-to-see"
                        >
                            Ofertas
                        </NavLink>
                    </li>
                    <li className="nav-menu-time">
                        <NavLink
                            to="/nothing-to-see"
                        >
                            Cupones
                        </NavLink>
                    </li>
                    <li className="nav-menu-time">
                        <NavLink
                            to="/nothing-to-see"
                        >
                            Supermercado
                        </NavLink>
                    </li>
                    <li className="nav-menu-time">
                        <NavLink
                            to="/moda"
                            onClick={() => context.setSearchByCategory('Ropa')}
                        >
                            Moda
                        </NavLink>
                    </li>
                    <li className="nav-menu-time sm:block">
                        <NavLink
                            to="/nothing-to-see"
                        >
                            Mercado Play
                        </NavLink>
                    </li>
                    <li className="nav-menu-time hidden sm:block">
                        <NavLink
                            to="/nothing-to-see"
                        >
                            Vender
                        </NavLink>
                    </li>
                    <li className="nav-menu-time hidden sm:block">
                        <NavLink
                            to="/ayuda"
                        >
                            Ayuda
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="row-start-2 col-start-3 flex justify-start items-center pl-7">
                <ul className=" flex items-center gap-2">
                    <li>
                        <NavLink to="/registration">Crea tu cuenta</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sign-in">Ingresa</NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-purchases">Mis Compras</NavLink>
                    </li>
                    <li>
                        <div className="flex absolute top-[70px]">
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
        </nav>
    );
};

export default NavBar;
