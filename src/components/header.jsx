import { Link } from "react-router"; // Cambié "react-router" a "react-router-dom"
import SideMenu from "./sidebar";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header-area sticky top-0 bg-white shadow-md z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="logo w-56">
                        <img
                            src={require("../images/l3 (2).png")}
                            alt="Logo"
                            className="h-auto"
                        />
                    </Link>

                    {/* Menú de navegación */}
                    <ul className="hidden md:flex items-center space-x-6">
                        <li>
                            <a href="#men" className="text-gray-800 hover:text-blue-500">
                                Hombres
                            </a>
                        </li>
                        <li>
                            <a href="#women" className="text-gray-800 hover:text-blue-500">
                                Mujeres
                            </a>
                        </li>
                        <li>
                            <a href="#kids" className="text-gray-800 hover:text-blue-500">
                                Niños
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/cart"
                                className="text-gray-800 hover:text-blue-500 flex items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                                    <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                                </svg>
                            </Link>
                        </li>
                    </ul>

                    {/* Botón de menú para móviles */}
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="menu-trigger md:hidden text-gray-800 hover:text-blue-500"
                    >
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8l16 0" /><path d="M4 16l16 0" /></svg></span>
                    </button>
                </div>
            </div>

            {/* Menú lateral */}
            {isOpen && <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
        </header>
    );
};

export default Header;
