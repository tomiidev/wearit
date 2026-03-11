import { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { useCart } from "../context/cart";
import toast, { Toaster } from "react-hot-toast";
import TopInfo from "./top";
import products from "../products.json";
import QuantitySelector from "./quantity_selector";
import WpButton from "./wp";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router";
import { useMediaQuery } from "react-responsive";
import { useCategories } from "../context/notifications";
import ProductGrid from "./product";
import SearchBar from "./search_bar";

const ProductId = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const { destacados } = useCategories();
  const slidesToShow = isMobile ? 1 : isTablet ? 2 : 4;
  const { addItemToCart } = useCart();
  const [q, setQ] = useState(1);
  const [product] = useState(products[0]); // Producto por defecto
  const [selectedSize, setSelectedSize] = useState(null); // Talle seleccionado
  const [selectedColor, setSelectedColor] = useState(null); // Color seleccionado
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60); // 2 horas en segundos
  const sizes = ["S", "M", "L", "XL", "XXL"]; // Talles disponibles
  const colors = ["Negro", "Blanco", "Rojo", "Azul", "Verde"]; // Colores disponibles

  const isOnPromotion = true; // Variable para determinar si el producto está en promoción
  const isDestacado = true; // Variable para determinar si el producto está en promoción

  const addToCart = () => {
    if (!product) {
      toast("No se encontró el producto");
      return;
    }

    if (!selectedSize) {
      toast("Por favor, selecciona un talle");
      return;
    }

    const selectedProduct = {
      id: product.id,
      imagen: products[0].image,
      titulo: product.name,
      precio: product.price,
      cantidad: q,
      talle: selectedSize,
      color: selectedColor,
    };

    addItemToCart(selectedProduct);
    toast("Agregado al carrito exitosamente");
  };

  // Effecto para contar el tiempo
  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(2 * 60 * 60); // Reinicia el contador a 2 horas cuando llegue a 0
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, [timeLeft]);

  // Función para formatear el tiempo en horas, minutos y segundos
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      <TopInfo />
      <Header />
      <SearchBar />
      <section className="section" id="product">
        <div className="container-fluid ">
          <div className="row justify-center">
            <div className="col-lg-8 relative">
              {/* Distintivo de Promoción */}
              {isDestacado && (
                <div className=" bg-gray-700 text-white mb-1 flex items-center justify-center gap-2 font-poppins px-3 py-1 shadow-sm text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-star"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                  Articulo destacado
                </div>
              )}
              {isOnPromotion && (
                <div className=" bg-green-500 text-white mb-3 flex items-center justify-center gap-2 font-poppins px-3 py-1 shadow-sm text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-clock"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                  En oferta - {formatTime(timeLeft)} - ¡Quedan 9 disponibles!
                </div>
              )}
              <div className="left-images">
                <img
                  src={require("../images/single-product-01.jpg")}
                  alt="Producto principal"
                  className="mb-4"
                />
                <img
                  src={require("../images/single-product-02.jpg")}
                  alt="Producto secundario"
                  className="mb-4"
                />
              </div>
            </div>
            <div className="col-lg-4 sticky top-20 self-start">
              <div className="right-content">
                <h4 className="font-poppins">Chaqueta verde</h4>
                <span className="price text-xl font-bold">$75.00</span>

                <p className="text-gray-600 mt-2">Descripción del producto.</p>

                {/* Selección de talles */}
                <div className="mt-5">
                  <p className="font-semibold text-gray-700 mb-2">
                    Talles disponibles
                  </p>
                  <div className="flex gap-2 justify-center">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className={`w-10 h-10 flex items-center justify-center ${
                          selectedSize === size
                            ? "bg-black text-white"
                            : "bg-gray-400 text-white hover:bg-gray-900"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selección de colores */}
                <div className="mt-5">
                  <p className="font-semibold text-gray-700 mb-2">
                    Colores disponibles
                  </p>
                  <select
                    className="w-full p-2 border rounded bg-gray-100 text-gray-700"
                    value={selectedColor || ""}
                    onChange={(e) => setSelectedColor(e.target.value)}
                  >
                    <option value="" disabled>
                      Elige un color
                    </option>
                    {colors.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Selector de cantidad */}
                <div className="quantity-content mt-5">
                  <QuantitySelector q={q} setQ={setQ} />
                </div>

                {/* Botón de agregar al carrito */}
                <div className="total mt-5">
                  <button
                    type="button"
                    className="border w-full text-white bg-black font-poppins transition duration-300 rounded-sm font-light tracking-wider px-5 py-3 cursor-pointer"
                    onClick={addToCart}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
          <section className="featured my-5 container-fluid">
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-poppins">
              Otros usuarios compraron
            </h4>
            <Swiper
              spaceBetween={30}
              slidesPerView={slidesToShow}
              className="my-5"
              pagination={{ clickable: true }}
            >
              {destacados.length > 0 &&
                destacados
                  /*     .filter((p) => p.destacado === true && p.productoTipo && p.categoria) */
                  .map((v, index) => {
                    const cleanPath = (path) =>
                      path ? path.replace(/%20|\s+/g, "") : "default";
                    const productoTipo = cleanPath(v.productoTipo);
                    const categoria = cleanPath(v.categoria);
                    // Verifica si los parámetros son válidos
                    if (!productoTipo || !categoria) {
                      console.error("Parámetros faltantes o inválidos:", v);
                      return null; // Salta este producto
                    }

                    return (
                      <SwiperSlide>
                        <div
                          className="col-lg-12 col-md-12 col-sm-12 col-12"
                          key={index}
                        >
                          <NavLink
                            className="no-underline"
                            to={`/shop/${productoTipo}/${categoria}/${v._id}`}
                          >
                            <ProductGrid
                              key={index}
                              _id={v._id}
                              productoTipo={productoTipo}
                              categoria={categoria}
                              precio={v.precio ? v.precio : 0}
                              titulo={v.titulo}
                              imagesAdded={v.imagesAdded}
                              variantes={v.variantes}
                            />
                          </NavLink>
                        </div>
                      </SwiperSlide>
                    );
                  })}
            </Swiper>
          </section>
        </div>
      </section>
      <Footer />
      <Toaster />
      <WpButton />
    </>
  );
};

export default ProductId;
