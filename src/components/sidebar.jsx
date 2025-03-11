import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const SideMenu = ({ products, setIsOpen }) => {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const closeMenu = () => {
        setIsVisible(false);
        setTimeout(() => setIsOpen(false), 300); // Esperar la animación antes de desmontar
    };

    // Agrupar productos por typeProduct y obtener categorías únicas
    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.typeProduct]) {
            acc[product.typeProduct] = new Set();
        }
        acc[product.typeProduct].add(product.category);
        return acc;
    }, {});

    const toggleCategory = (category) => {
        setExpandedCategory(expandedCategory === category ? null : category);
    };

    return (
        <div
            className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMenu}
        >
            {/* Contenedor del Menú */}
            <div
                className={`bg-white w-3/4 md:w-1/2 h-full flex flex-col shadow-lg transform transition-transform duration-300 ${
                    isVisible ? "translate-x-0" : "-translate-x-full"
                }`}
                onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro
            >
                {/* Encabezado */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <button
                        className="text-gray-600 hover:text-gray-800"
                        aria-label="Cerrar menú"
                        onClick={closeMenu}
                    >
                        ✕
                    </button>
                </div>

                {/* Contenido */}
                <div className="flex-1 overflow-y-auto p-4">
                    {/* Categorías de Productos */}
                    <div className="mt-0">
                        {Object.entries(groupedProducts).map(([typeProduct, categories], index) => (
                            <div key={index} className="">
                                <button
                                    className="w-full text-left flex items-center justify-between font-poppins text-sm font-semibold text-gray-800 py-2 hover:text-gray-600 transition duration-200"
                                    onClick={() => toggleCategory(typeProduct)}
                                >
                                    {typeProduct.toUpperCase()}
                                    <span>
                                        {expandedCategory === typeProduct ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out ${
                                        expandedCategory === typeProduct ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden"
                                    }`}
                                >
                                    <ul className="mt-2 space-y-2 pl-4 border-l border-gray-300 bg-gray-100">
                                        {Array.from(categories)
                                            .sort((a, b) => a.localeCompare(b))
                                            .map((category, i) => (
                                                <li key={i}>
                                                    <Link
                                                        to={`/shop/${typeProduct}/${category}`}
                                                        className="block text-gray-600 hover:text-gray-800 text-sm py-1 transition duration-300"
                                                        onClick={closeMenu}
                                                    >
                                                        {category}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200">
                    <p className="text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} Ecommerce. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
