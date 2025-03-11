
import { Swiper, SwiperSlide } from "swiper/react"
import Header from "./header"
import { Link } from "react-router"
import Footer from "./footer"
import TopInfo from "./top"
import useIsMobile from "./ismobile"
import WpButton from "./wp"
import SearchBar from "./search_bar"
import ProductGrid from "./product"
import products from "../products.json"
import Subscribe from "./suscribe"
const Home = () => {
    const isMobile = useIsMobile();
    const isOnPromotion = true; // Variable para determinar si el producto está en promoción
    const isDestacado = true; // Variable para determinar si el producto está en promoción


    return (



        <>

            <Header />
            <SearchBar />

            <div class="main-banner" style={{ paddingTop: "150px" }} id="top">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-content">
                                <div class="thumb">
                                    <div class="inner-content">
                                        <h3 className="text-white font-poppins">Somos Wearit</h3>
                                        <h5 className="text-white italic font-light">Moda de hombres, mujeres y niños</h5>
                                        {/*  <span>Moda de hombres, mujeres y niños</span> */}
                                        {/*   <div class="main-border-button">
                                            <a href="/">Purchase Now!</a>
                                        </div> */}
                                    </div>
                                    <img src={require("../images/left-banner-image.jpg")} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4 className="font-poppins">Mujer</h4>
                                                    <span>Las mejores colecciones para la Mujer</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4 className="font-poppins">Mujer</h4>
                                                        <p className="font-questrial">Vestite a la moda, con confianza.</p>
                                                        <div class="main-border-button">
                                                            <Link to="/shop/Mujer">Ver más</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={require("../images/baner-right-image-01.jpg")} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Hombre</h4>
                                                    <span>Moda para hombres</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4 className="font-poppins">Hombre</h4>
                                                        <p className="font-questrial">Para no perder el estílo.</p>
                                                        <div class="main-border-button">
                                                            <Link to={"/shop/Hombre"}>Ver más</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={require("../images/baner-right-image-02.jpg")} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4 className="font-poppins">Niños</h4>
                                                    <span className="font-questrial">Prendas para niños</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4 className="font-poppins">Niños</h4>
                                                        <p className="font-questrial">Porque el buen gusto se puede tomar desde la niñez.</p>
                                                        <div class="main-border-button">
                                                            <Link to={"/shop/Nino"}>Ver más</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={require("../images/baner-right-image-03.jpg")} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4 className="font-poppins">Accesorios</h4>
                                                    <span className="font-questrial">Tendecias de accesorios</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4 className="font-poppins">Accesorios</h4>
                                                        <p className="font-questrial">El último toque para el mejor look.</p>
                                                        <div class="main-border-button">
                                                            <Link to="/shop/Accesorio">Ver más</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={require("../images/baner-right-image-04.jpg")} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section class="section" id="men">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading text-left">
                                <h2 className="font-poppins">Destacados</h2>
                                <span>Las prendas más preferidas por los demás.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row mx-auto justify-center">
                        <div className="col-lg-12">
                            <div className="men-item-carousel">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={isMobile ? 1 : 4}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    {products.filter(p => p.featured === true).map((d, index) => (
                                        <SwiperSlide key={index}>
                                            <ProductGrid {...d} />
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section" id="men">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading text-left">
                                <h2 className="font-poppins">De hombre</h2>
                                <span>Prendas al detalle hacen la diferencia.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row mx-auto justify-center">
                        <div className="col-lg-12">
                            <div className="men-item-carousel">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={isMobile ? 1 : 4}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    {products.filter(p => p.typeProduct === "Hombre").map((d, index) => (
                                        <SwiperSlide key={index}>
                                            <ProductGrid {...d} />
                                        </SwiperSlide>
                                    ))}

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section" id="women">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading text-left">
                                <h2 className="font-poppins">De Mujer</h2>
                                <span>Prendas al detalle hacen la diferencia.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row mx-auto justify-center">
                        <div className="col-lg-12">
                            <div className="men-item-carousel">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={isMobile ? 1 : 4}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    {products.filter(p => p.typeProduct === "Mujer").map((d, index) => (
                                        <SwiperSlide key={index}>
                                            <ProductGrid {...d} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section" id="kids">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading text-left">
                                <h2 className="font-poppins">De niños</h2>
                                <span>Prendas al detalle hacen la diferencia.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row mx-auto justify-center">
                        <div className="col-lg-12">
                            <div className="men-item-carousel">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={isMobile ? 1 : 4}
                                    onSlideChange={() => console.log("slide change")}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    {products.filter(p => p.typeProduct === "Nino").map((d, index) => (
                                        <SwiperSlide key={index}>
                                            <ProductGrid {...d} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section" id="explore">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class=" text-center">
                                <h2 className="text-gray-800 text-lg font-poppins">¡Descubrí todas nuestras prendas!</h2>
                                <span className="text-gray-800 text-lg font-questrial">✨ Descubrí tu estilo, vive tu esencia. ✨</span>

                                <p className="text-gray-800 text-sm mt-2 font-questrial">La moda no solo se lleva, ¡se siente! Cada prenda que diseñamos y seleccionamos cuenta una historia, celebra la autenticidad y enaltece la belleza única que hay en válidos. Porque creemos que la moda no es solo lo que vestís, es cómo te expresas al mundo.</p>
                                <p className="text-gray-800 text-sm mt-2 font-questrial">Camina con confianza, vestite con pasión y creá momentos inolvidables con cada paso. Desde los detalles que enamoran hasta los looks que te empoderan, estamos aquí para acompañarte en cada capítulo de tu vida.</p>
                                <span className="text-gray-800 text-sm mt-2 font-poppins">🌟 Sé tendencia. Sé vos. 🌟</span>
                                <div class="main-border-button">
                                    <Link to={"/products"}>Ver más</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="leather">
                                            <h4>Carteras de moda</h4>
                                            <span>Última colección</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="first-image">
                                            <img src={require("../images/explore-image-01.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="second-image">
                                            <img src={require("../images/explore-image-02.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="types">
                                            <h4>Diferentes prendas</h4>
                                            <span>+300 productos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/*        <div class="col-lg-8">
                            <div class="section-heading">
                                <h2>Suscribiendote a la newsletter gana un 30% Off</h2>
                                <span>Recibí la última información sobre moda y alertas de articulos.</span>
                            </div>
                            <form id="subscribe" action="" method="get">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <fieldset>
                                            <input name="name" type="text" id="name" placeholder="Tu nombre" required="" />
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-5">
                                        <fieldset>
                                            <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Email" required="" />
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-2">
                                        <fieldset>
                                            <button type="submit" id="form-submit" class="main-dark-button"><i class="fa fa-paper-plane"></i></button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div> */}

            <Subscribe />


            <Footer />
            <WpButton />
        </>


    )
}

export default Home