import React from "react";
import { Link } from "react-router";

const SideMenu = ({ isOpen, setIsOpen }) => {
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Menú lateral */}
            <div
                className={`fixed inset-0 bg-white text-black transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out z-40`}
            >
                {/* Cabecera del menú con el botón de cerrar */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold"></h2>
                    <button
                        onClick={toggleMenu}
                        className="text-2xl font-bold text-black hover:text-gray-500"
                    >
                        ×
                    </button>
                </div>

                {/* Contenido del menú */}
                <div className="p-6">
                            
                    <ul className="space-y-6 ">
                        <li>
                            <Link
                                to={"/cart"}
                                className="block text-lg  font-medium text-black hover:text-blue-500"
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
                                    className="icon text-center mx-auto"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                                    <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/"}
                                className="block text-lg font-medium text-black hover:text-blue-500"
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/products"}
                                className="block text-lg font-medium text-black hover:text-blue-500"
                            >
                                Hombres
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/products"}
                                className="block text-lg font-medium text-black hover:text-blue-500"
                            >
                                Mujeres
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/products"}
                                className="block text-lg font-medium text-black hover:text-blue-500"
                            >
                                Niños
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
