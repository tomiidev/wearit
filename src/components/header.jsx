import { Link } from "react-router";
/* header-sticky */
const Header = () => {
    return (
        <header className="header-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">

                            {/* Logo */}
                            <Link to={"/"} className="logo w-56">
                                <img src={require("../images/l3 (2).png")} className="mt-3" alt="Logo" />
                            </Link>

                            {/* Menú de navegación */}
                            <ul className="nav items-center">
                                <li className="scroll-to-section"><a href="#men">Hombres</a></li>
                                <li className="scroll-to-section"><a href="#women">Mujeres</a></li>
                                <li className="scroll-to-section"><a href="#kids">Niños</a></li>
                                <Link to={"/cart"} className="no-underline text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" /><path d="M9 11v-5a3 3 0 0 1 6 0v5" /></svg>
                                </Link>
                                {/*  <li className="submenu">
                                    <a href="/">Páginas</a>
                                    <ul>
                                        <li><a href="about.html">Sobre Nosotros</a></li>
                                        <li><a href="products.html">Productos</a></li>
                                        <li><a href="single-product.html">Producto Individual</a></li>
                                        <li><a href="contact.html">Contáctanos</a></li>
                                    </ul>
                                </li> */}
                                {/*   <li className="submenu">
                                    <a href="/">Características</a>
                                    <ul>
                                        <li><a href="/">Página de Características 1</a></li>
                                        <li><a href="/">Página de Características 2</a></li>
                                        <li><a href="/">Página de Características 3</a></li>
                                        <li><a rel="nofollow" href="https://templatemo.com/page/4">Página de Plantilla 4</a></li>
                                    </ul>
                                </li> */}
                                {/*    <li className="scroll-to-section"><a href="#explore">Explorar</a></li> */}
                            </ul>

                            {/* Activador del menú (responsivo) */}
                            <a className="menu-trigger mt-5" href="/">
                                <span>Menú</span>
                            </a>

                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
