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
        className={`fixed inset-0 bg-white text-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
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
