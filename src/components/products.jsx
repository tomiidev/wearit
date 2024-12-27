import { Link } from "react-router";
import Header from "./header";
import Footer from "./footer";
import TopInfo from "./top";
import WpButton from "./wp";

const products = [
    {
        id: 1,
        name: "Primavera Clásica",
        price: "$120.00",
        image: require("../images/men-01.jpg"),
        link: "/products/1",
    },
    {
        id: 2,
        name: "Air Force 1 X",
        price: "$90.00",
        image: require("../images/men-02.jpg"),
        link: "/products/2",
    },
    {
        id: 3,
        name: "Amor Nana ‘20",
        price: "$150.00",
        image: require("../images/men-03.jpg"),
        link: "/products/3",
    },
    {
        id: 4,
        name: "Nueva Chaqueta Verde",
        price: "$75.00",
        image: require("../images/men-01.jpg"),
        link: "/products/4",
    },
    {
        id: 5,
        name: "Vestido Clásico",
        price: "$45.00",
        image: require("../images/men-02.jpg"),
        link: "/products/5",
    },
    {
        id: 6,
        name: "Colección Primavera",
        price: "$130.00",
        image: require("../images/men-03.jpg"),
        link: "/products/6",
    },
    {
        id: 7,
        name: "Colección Escolar",
        price: "$80.00",
        image: require("../images/men-02.jpg"),
        link: "/products/7",
    },
    {
        id: 8,
        name: "Gorra de Verano",
        price: "$12.00",
        image: require("../images/men-01.jpg"),
        link: "/products/8",
    },
    {
        id: 9,
        name: "Niño Clásico",
        price: "$30.00",
        image: require("../images/men-02.jpg"),
        link: "/products/9",
    },
];

const Products = () => {
    return (
        <>
            <TopInfo />
            <Header />
            <section className="section mt-5" id="products">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2 className="italic">Encontra lo último en moda</h2>
                                <span>Colección de estación</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {products.map((product) => (
                            <div key={product.id} className="col-lg-4">
                                <div className="item">
                                    <Link to={product.link}>
                                        <div className="thumb">
                                            {/*     <div className="hover-content">
                                                <ul>
                                                    <li>
                                                        <a href="single-product.html">
                                                            <i className="fa fa-eye"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="single-product.html">
                                                            <i className="fa fa-star"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="single-product.html">
                                                            <i className="fa fa-shopping-cart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div> */}
                                            <img src={product.image} alt={product.name} />
                                        </div>
                                        <div className="down-content">
                                            <h4>{product.name}</h4>
                                            <span>{product.price}</span>
                                            {/* <ul className="stars">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul> */}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        <div className="col-lg-12">
                            <div className="pagination">
                                <ul>
                                    {[1, 2, 3, 4].map((page) => (
                                        <li key={page} className={page === 1 ? "active" : ""}>
                                            <Link to={`/page/${page}`}>{page}</Link>
                                        </li>
                                    ))}
                                </ul>
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
