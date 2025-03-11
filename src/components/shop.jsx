import React, { useState, useEffect, useMemo } from "react";
import { useCategories } from "../context/notifications";
import { useLocation, NavLink } from "react-router-dom";
import ProductGrid from "./product";
import Footer from "./footer";
import SearchBar from "./search_bar";
import { FiltersDrawer } from "./filters";
import Header from "./header";

const Shop = () => {
    const [open, setOpen] = useState(false);
    const { loading, products, filterProducts, filterProductsOnlyByproductType } = useCategories();
    const location = useLocation();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 20000]);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const pathParts = location.pathname.split("/").filter(Boolean);
    const productoTipo = pathParts[1] || "";
    const categoria = pathParts[2] || "";

    // Filtrar productos según productoTipo y categoria
    useEffect(() => {
        if (products?.length > 0) {
            let filtered = [];

            if (productoTipo && categoria) {
                // Filtrar por productoTipo y categoría
                filtered = filterProducts(productoTipo, categoria);
            } else if (productoTipo) {
                // Filtrar solo por productoTipo
                filtered = filterProductsOnlyByproductType(productoTipo);
            } else if (categoria) {
                // Filtrar solo por categoría
                filtered = filterProducts("", categoria);
            } else {
                // Si no hay filtros, mostrar todos los productos
                filtered = products;
            }

            setFilteredProducts(filtered);
        }
    }, [productoTipo, categoria, products, filterProducts, filterProductsOnlyByproductType]);

    // Filtrar productos por precio
    const filteredByPrice = useMemo(() => 
        filteredProducts.filter(
            (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
        ), 
        [filteredProducts, priceRange]
    );
    

    if (loading) {
        return <div>Cargando...</div>;
    }
    const handlePriceChange = (min, max) => {
        setPriceRange([min, max]);
      };
    return (
        <>
            <div className="offcanvas-menu-overlay"></div>
            <SearchBar />
            <header className="header">
                <Header />
            </header>

            <section className="shop spad mt-5">
                <div className="container-fluid">
                    <div className="flex justify-between items-center mb-5">
                        <div className="text-gray-600 text-lg font-questrial">
                            <NavLink to="/">Inicio</NavLink> / <span>Explorar</span>
                        </div>
                        <button
                            onClick={() => setOpen(!open)}
                            className="bg-red-800 fixed right-5 z-999 sm:block text-white px-4 py-2 rounded-sm hover:bg-red-700 transition duration-300 ease-in-out"
                        >
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
                                    <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                    <path d="M4 6l8 0"></path>
                                    <path d="M16 6l4 0"></path>
                                    <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                    <path d="M4 12l2 0"></path>
                                    <path d="M10 12l10 0"></path>
                                    <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                    <path d="M4 18l11 0"></path>
                                    <path d="M19 18l1 0"></path>
                                </svg>
                                <span className="font-poppins text-sm hidden sm:block">Filtros</span>
                            </div>
                        </button>
                    </div>

                    <div className="row">
                        <FiltersDrawer
                            isAccordionOpen={isAccordionOpen}
                            setIsAccordionOpen={setIsAccordionOpen}
                            open={open}
                            setOpen={setOpen}
                            handlePriceChange={handlePriceChange}
                        />

                        <div className="col-lg-12">
                            <div className="shop__product__option">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="shop__product__option__left text-left">
                                            <p className="font-questrial">
                                                Mostrando {filteredByPrice.length} resultados
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row min-h-screen">
                                {filteredByPrice.length > 0 ? (
                                    filteredByPrice.map((p, index) => (
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={p.id || index}>
                                            <ProductGrid {...p} />
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-lg-12">
                                        <p className="text-center font-questrial">No hay resultados.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Shop;
