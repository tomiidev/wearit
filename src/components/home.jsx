
import { Swiper, SwiperSlide } from "swiper/react"
import Header from "./header"
import { Link } from "react-router"
import Footer from "./footer"
import TopInfo from "./top"
import useIsMobile from "./ismobile"
import WpButton from "./wp"

const Home = () => {
    const isMobile = useIsMobile();
    const isOnPromotion = true; // Variable para determinar si el producto está en promoción
    const isDestacado = true; // Variable para determinar si el producto está en promoción


    return (



        <>
            <TopInfo />
            <Header />

            <div class="main-banner" id="top">
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
                                                            <Link to="/products">Ver más</Link>
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
                                                            <Link to={"/products"}>Ver más</Link>
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
                                                            <Link to={"/products"}>Ver más</Link>
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
                                                            <Link to="/">Ver más</Link>
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
                            <div class="section-heading">
                                <h2 className="font-poppins">Destacados</h2>
                                <span>Las prendas más preferidas por los demás.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="men-item-carousel">
                                <div class="owl-men-item owl-carousel">

                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={isMobile ? 1 : 4}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                    >
                                        {
                                            Array.from({ length: 5 }, (_, index) => {
                                                return (


                                                    <SwiperSlide>
                                                        <div class="item">
                                                            <Link to={`/products/${index}`} className="flex flex-col h-full">
                                                                <div class="thumb mb-3 relative">

                                                                    <img src={require("../images/men-01.jpg")} alt="" />

                                                                    {isDestacado && (
                                                                        <div className="absolute top-5 left-10 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 text-white py-1 px-3 text-sm font-bold rotate-45">
                                                                            Destacado
                                                                        </div>
                                                                    )}
                                                                </div>

                                                                <div class="down-content flex flex-col justify-between flex-grow">
                                                                <p className="text-md md:text-lg font-questrial">Clasico de Primavera</p>
                                                                    <span className="text-xs md:text-lg font-bold">$120.00</span>
                                                                </div>
                                                            </Link>
                                                        </div>



                                                    </SwiperSlide>)
                                            })}</Swiper>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section" id="men">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading">
                                <h2 className="font-poppins">Últimos de hombre</h2>
                                <span>Prendas al detalle hacen la diferencia.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="men-item-carousel">
                                <div class="owl-men-item owl-carousel">

                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={isMobile ? 1 : 4}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                    >
                                        {
                                            Array.from({ length: 5 }, (_, index) => {
                                                return (


                                                    <SwiperSlide>
                                                        <div class="item">
                                                            <Link to={`/products/${index}`}>
                                                                <div class="thumb">
                                                                    {/*  <div class="hover-content">
                                                                        <ul>
                                                                            <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                                            <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                                            <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                                                        </ul>
                                                                    </div> */}
                                                                    <img src={require("../images/men-01.jpg")} alt="" />
                                                                </div>
                                                                <div class="down-content">
                                                                <p className="text-md md:text-lg font-questrial">Clasico de Primavera</p>
                                                                    <span>$120.00</span>
                                                                    {/*     <ul class="stars">
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                </ul> */}
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </SwiperSlide>)
                                            })}</Swiper>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section" id="women">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading">
                                <h2 className="font-poppins">Últimos de Mujer</h2>
                                <span>Prendas al detalle hacen la diferencia.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="women-item-carousel">
                                <div class="owl-women-item owl-carousel">
                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={isMobile ? 1 : 4}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                    >
                                        {
                                            Array.from({ length: 5 }, (_, index) => {
                                                return (


                                                    <SwiperSlide>

                                                        <div class="item">
                                                            <Link to={`/products/${index}`}>
                                                                <div class="thumb">
                                                                    {/*  <div class="hover-content">
                                                                    <ul>
                                                                        <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                                        <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                                        <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                                                    </ul>
                                                                </div> */}
                                                                    <img src={require("../images/women-01.jpg")} alt="" />
                                                                </div>
                                                                <div class="down-content">
                                                                <p className="text-md md:text-lg font-questrial">Clasico de Primavera</p>
                                                                    <span>$75.00</span>
                                                                    {/*   <ul class="stars">
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                </ul> */}
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </SwiperSlide>

                                                )
                                            })}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section" id="kids">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading">
                                <h2 className="font-poppins">Últimos de niños</h2>
                                <span>Prendas al detalle hacen la diferencia.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="kid-item-carousel">
                                <div class="owl-kid-item owl-carousel">
                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={isMobile ? 1 : 4}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                    >
                                        {
                                            Array.from({ length: 5 }, (_, index) => {
                                                return (


                                                    <SwiperSlide>
                                                        <Link to={`/products/${index}`}>
                                                            <div class="item">
                                                                <div class="thumb">
                                                                    {/*  <div class="hover-content">
                                                                    <ul>
                                                                        <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                                        <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                                        <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                                                    </ul>
                                                                </div> */}
                                                                    <img src={require("../images/kid-01.jpg")} alt="" />
                                                                </div>
                                                                <div class="down-content">
                                                                <p className="text-md md:text-lg font-questrial">Clasico de Primavera</p>
                                                                    <span>$120.00</span>
                                                                    {/*   <ul class="stars">
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    <li><i class="fa fa-star"></i></li>
                                                                    </ul> */}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section" id="explore">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-content">
                                <h2>¡Descubrí todas nuestras prendas!</h2>
                                <span>✨ Descubrí tu estilo, vive tu esencia. ✨</span>

                                <p>La moda no solo se lleva, ¡se siente! Cada prenda que diseñamos y seleccionamos cuenta una historia, celebra la autenticidad y enaltece la belleza única que hay en válidos. Porque creemos que la moda no es solo lo que vestís, es cómo te expresas al mundo.</p>
                                <p>Camina con confianza, vestite con pasión y creá momentos inolvidables con cada paso. Desde los detalles que enamoran hasta los looks que te empoderan, estamos aquí para acompañarte en cada capítulo de tu vida.</p>
                                <span>🌟 Sé tendencia. Sé vos. 🌟</span>
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

            <section class="section" id="social">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading">
                                <h2>Mirá lo último en Instagram</h2>
                                <span>Moda 24/7</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row images">
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com">
                                        <h6>Fashion</h6>
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src={require("../images/instagram-01.jpg")} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com">
                                        <h6>New</h6>
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src={require("../images/instagram-02.jpg")} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com">
                                        <h6>Brand</h6>
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src={require("../images/instagram-03.jpg")} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com">
                                        <h6>Makeup</h6>
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src={require("../images/instagram-04.jpg")} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com">
                                        <h6>Leather</h6>
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src={require("../images/instagram-05.jpg")} alt="" />
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="thumb">
                                <div class="icon">
                                    <a href="http://instagram.com">
                                        <h6>Bag</h6>
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src={require("../images/instagram-06.jpg")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="subscribe">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
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
                        </div>
                        <div class="col-lg-4">
                            <div class="row">
                                <div class="col-6">
                                    <ul>

                                        <li>Ubicación<br /><span>Uruguay</span></li>
                                        <li>Teléfono<br /><span>010-020-0340</span></li>

                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul>
                                        <li>Horarios:<br /><span>Lun a Vie, 07:30 - 21:30</span></li>
                                        <li>Email<br /><span>info@company.com</span></li>
                                        <li>Redes sociales<br /><span><a href="/">Facebook</a>, <a href="/">Instagram</a>, <a href="/">Behance</a>, <a href="/">Linkedin</a></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <WpButton />
        </>


    )
}

export default Home