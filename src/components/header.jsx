import { Link } from "react-router-dom";
import SideMenu from "./sidebar";
import { useEffect, useState } from "react";
import { useSearch } from "../context/search";
import { IoBagHandleOutline, IoSearch } from "react-icons/io5";
import TopInfo from "./top";
import { useCategories } from "../context/notifications";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const { setOpenSearch } = useSearch();
    const { products } = useCategories();

    // Agrupar productos por typeProduct y obtener categorías únicas
    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.typeProduct]) {
            acc[product.typeProduct] = new Set();
        }
        acc[product.typeProduct].add(product.category);
        return acc;
    }, {});

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = (dropdown) => {
        setActiveDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                !event.target.closest(".menu-mobile") &&
                !event.target.closest(".menu-button")
            ) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="fixed w-full z-50">
            <TopInfo />
            <nav className="bg-black shadow-md">
                <div className="flex items-center justify-between px-6 py-4">
                    <Link to="/" className="text-white text-xl sm:text-3xl font-bold tracking-wide">
                        Wearit
                    </Link>

                    <div
                        className="hidden lg:flex justify-center mx-auto items-center w-full"
                        onMouseLeave={handleMouseLeave}
                    >
                        <ul className="flex space-x-10 font-medium text-white">
                            {Object.entries(groupedProducts).map(([typeProduct, categories], idx) => (
                                <li
                                    key={idx}
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter(typeProduct)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button
                                        className="text-white text-lg transition"
                                        onClick={() => toggleDropdown(typeProduct)}
                                    >
                                        {typeProduct.toUpperCase()}
                                    </button>
                                    {activeDropdown === typeProduct && (
                                        <div className="absolute left-0 mt-1 bg-white text-black shadow-xl p-4 w-56 z-50">
                                            {Array.from(categories)
                                                .sort((a, b) => a.localeCompare(b))
                                                .map((category, i) => (
                                                    <div key={i} className="my-4">
                                                        <Link
                                                            to={`/shop/${typeProduct}/${category}`}
                                                            className="text-gray-600 hover:text-gray-700 no-underline font-questrial relative group"
                                                        >
                                                            {category.toUpperCase()}
                                                            <span className="absolute left-0 bottom-[-5px] h-[2px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                                        </Link>
                                                    </div>
                                                ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden lg:flex items-center space-x-6">
                        <button onClick={setOpenSearch} type="button">
                            <IoSearch className="text-white w-7 h-7 cursor-pointer transition" />
                        </button>
                        <Link to={"/cart"}>
                            <IoBagHandleOutline className="text-white w-7 h-7 cursor-pointer transition" />
                        </Link>
                    </div>

                    <div className="flex lg:hidden items-center space-x-4">
                        <button onClick={setOpenSearch} type="button">
                            <IoSearch className="text-white text-2xl cursor-pointer hover:text-yellow-400 transition" />
                        </button>
                        <Link to={"/cart"}>
                            <IoBagHandleOutline className="text-white text-2xl cursor-pointer hover:text-yellow-400 transition" />
                        </Link>
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {isOpen && <SideMenu setIsOpen={setIsOpen} products={products} toggleDropdown={toggleDropdown} />}
        </header>
    );
};

export default Header;
