import { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import TopInfo from "./top";
import WpButton from "./wp";
import { Link } from "react-router";

const products = [
    {
        id: 1,
        name: "Primavera Clásica",
        price: "$120.00",
        image: require("../images/men-01.jpg"),
    },
    {
        id: 2,
        name: "Air Force 1 X",
        price: "$90.00",
        image: require("../images/men-02.jpg"),
    },
    {
        id: 3,
        name: "Amor Nana ‘20",
        price: "$150.00",
        image: require("../images/men-03.jpg"),
    },
    {
        id: 4,
        name: "Nueva Chaqueta Verde",
        price: "$75.00",
        image: require("../images/men-01.jpg"),
    },
    {
        id: 5,
        name: "Vestido Clásico",
        price: "$45.00",
        image: require("../images/men-02.jpg"),
    },
    {
        id: 6,
        name: "Colección Primavera",
        price: "$130.00",
        image: require("../images/men-03.jpg"),
    },
    {
        id: 7,
        name: "Colección Escolar",
        price: "$80.00",
        image: require("../images/men-02.jpg"),
    },
    {
        id: 8,
        name: "Gorra de Verano",
        price: "$12.00",
        image: require("../images/men-01.jpg"),
    },
    {
        id: 9,
        name: "Niño Clásico",
        price: "$30.00",
        image: require("../images/men-02.jpg"),
    },
];

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const totalPages = Math.ceil(products.length / productsPerPage);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <>
            <TopInfo />
            <Header />
            <section className="section" id="products">
                <div className="container mx-auto">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2 className="italic">Encontra lo último en moda</h2>
                                <span>Colección de estación</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="row flex flex-wrap">
                        {currentProducts.map((product) => (
                            <div key={product.id} className="col-lg-4 p-4 col-6">
                                <Link to={`/products/${product.id}`}>
                                    <div className="item  rounded-lg">
                                        <div className="thumb">
                                            <img src={product.image} alt={product.name} className="" />
                                        </div>
                                        <div className="down-content p-4 bg-gray-50">
                                            <p className="font-bold md:text-lg text-xs">{product.name}</p>
                                            <span className="text-gray-700">{product.price}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        <div className="col-lg-12 mt-6">
                            <div className="pagination flex justify-center space-x-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                                    <button
                                        key={pageNumber}
                                        onClick={() => handlePageChange(pageNumber)}
                                        className={`px-4 py-2 text-sm font-medium  ${pageNumber === currentPage
                                                ? "bg-gray-800 text-white"
                                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                            }`}
                                    >
                                        {pageNumber}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <WpButton />
        </>
    );
};

export default Products;
