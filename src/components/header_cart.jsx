import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CartHeader = () => {
    const { pathname } = useLocation()

    return (
        <header className={`bg-black fixed z-99 border-b border-gray-500 w-full  ${pathname==="/cart/checkout" ? "block": "block"}`}>
            <div className="container-fluid mx-auto px-4 py-3 flex items-center justify-between ">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link to="/" className="text-white md:text-xl text-sm font-bold no-underline font-poppins">
                        wearit
                    </Link>
                </div>
                    {/* Enlace al inicio */}
                <nav>
                    {pathname === '/cart' && (
                        <Link
                            to="/"
                            className="text-white  px-3 py-2 rounded-md text-sm font-medium no-underline font-questrial hover:underline"
                        >
                            Volver al inicio
                        </Link>

                    )}
                    {pathname === '/cart/checkout' && (
                        <Link
                            to="/cart"
                            className="text-white px-3 py-2 rounded-md text-sm font-medium no-underline font-questrial hover:underline"
                        >
                            Volver al carrito
                        </Link>

                    )}

                </nav>
            </div>
        </header>
    );
};

export default CartHeader;
