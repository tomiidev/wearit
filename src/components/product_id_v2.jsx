
import Footer from "./footer";
import { useCart } from "../context/cart";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import QuantitySelector from "./quantity_selector";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./search_bar";
import ProductGrid from "./product";
import "react-multi-carousel/lib/styles.css";
import { API_PROD, API_URL } from "../lib/apis";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { useCategories } from "../context/notifications";
import ShoppingCartModal from "./modal";
import ProductCarousel from "./product_id_carousel";
import AddCartMobileComponent from "./addcart_mobile";
import { FacebookShareButton, WhatsappShareButton } from "react-share"
import { IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io5";
import Header from "./header";
import productData from "../products.json";
const ProductIDV2 = () => {
    const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga
    const paymentMethods = ["Mercado Pago", "Efectivo", "Pos", "Transferencia bancaria"];
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);



    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const scrollPosition = window.scrollY;
                setScrollY(scrollPosition);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleImageLoad = () => {
        setIsLoading(false); // Cambiar el estado cuando la imagen se haya cargado
    };

    const handleImageError = () => {
        setIsLoading(false); // Cambiar el estado incluso si la imagen falla al cargar
    };
    const cambiarImagenPrincipalv = (img) => {
        // Cambiar imagen según el color seleccionado
        setImgPrincipalv(img);
    }
    const cambiarImagenPrincipal = (img) => {
        // Cambiar imagen según el color seleccionado
        setImgPrincipal(img);
    }
    const isMobile = useMediaQuery({ maxWidth: 640 });
    const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
    const { destacados } = useCategories();
    // Condicionar slidesPerView según el tamaño de la pantalla
    const slidesToShow = isMobile ? 1 : isTablet ? 2 : 4;
    const [q, setQ] = useState(1);
    const [stock, setStock] = useState(0);
    const { productTitle, category, subCategory } = useParams();

    const [product, setProduct] = useState(null);
    const [selectedVariant, setSelectedVariant] = useState({
        dato_1_col: null,
        dato_2_mul: null,
        dato_3_pre: 0,
    });


    useEffect(() => {
        // Activa la animación después de que el componente se monta
        setTimeout(() => setIsVisible(true), 100); // Retraso opcional para suavidad
    }, []);
    const [selectedImage, setSelectedImage] = useState(""); // Imagen seleccionada
    const [addingToCart, setAddingToCart] = useState(false); // Imagen seleccionada
    const [price, setPrice] = useState(0); // Imagen seleccionada
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const continueShopping = () => {
        closeModal();
        // Lógica para continuar comprando
    };
    const gotocart = useNavigate()
    const viewCart = () => {
        gotocart("/cart");
        // Lógica para ver el carrito
    };
    const { addItemToCart } = useCart();


    useEffect(() => {
        if (productTitle) {
            const foundProduct = productData.find(
                (item) => item.name.toLowerCase() === decodeURIComponent(productTitle).toLowerCase()
            );

            if (foundProduct) {
                setProduct(foundProduct);
                setSelectedImage(foundProduct.image);
                setPrice(foundProduct.price);

                if (foundProduct.variants.length > 0) {
                    setSelectedVariant(foundProduct.variants[0]);
                }
            }
        }
    }, [productTitle]);

    const handleVariantChange = (field, value) => {
        if (!product) return;
        const matchingVariant = product.variants.find(
            (v) => v[field] === value
        );

        if (matchingVariant) {
            setSelectedVariant(matchingVariant);
            setSelectedImage(product.image);
            setPrice(product.price);
        }
    };
    const [imgPrincipal, setImgPrincipal] = useState(product?.imagesAdded?.[0]); // Estado para manejar la carga
    const [imgPrincipalv, setImgPrincipalv] = useState(product?.variantes?.imagenes?.[0]);
    if (!product) return <p>Producto no encontrado</p>;
    // Estado para manejar la carga
    const cleanPath = (path) => (path ? path.replace(/%20|\s+/g, "") : "default");
    const productoTipo = cleanPath(product?.productoTipo).toLowerCase();
    const categoria = cleanPath(product?.categoria).toLowerCase();
    // Verifica si los parámetros son válidos
    if (!productoTipo || !categoria) {
        console.error("Parámetros faltantes o inválidos");
        return null; // Salta este producto
    }
    console.log(JSON.stringify(product));

    // Filtrar colores disponibles según el peso seleccionado
    const filteredColors = product?.variants
        ? product.variants
            .filter(
                (v) =>
                    !selectedVariant.size || v.size === selectedVariant.size
            )
            .map((v) => v.color)
            .filter((value, index, self) => self.indexOf(value) === index) // Eliminar duplicados
        : [];

    // Filtrar pesos disponibles según el color seleccionado
    const filteredPesos = product?.variants
        ? product.variants
            .filter(
                (v) =>
                    !selectedVariant.color || v.color === selectedVariant.color
            )
            .map((v) => v.size)
            .filter((value, index, self) => self.indexOf(value) === index) // Eliminar duplicados
        : [];


    const addToCart = () => {
        if (!product) {
            toast.error("No se encontró el producto");
            return;
        }

        const cleanPath = (path) => (path ? path.replace(/%20|\s+/g, "") : "default");
        const productoTipo = cleanPath(product.typeProduct);  // Ajustado a 'typeProduct'
        const categoria = cleanPath(product.category);  // Ajustado a 'category'

        // Verifica si los parámetros son válidos
        if (!productoTipo || !categoria) {
            toast.error("Parámetros faltantes o inválidos");
            return null; // Salta este producto
        }

        const selectedVariant = product.variants.length > 0 ? product.variants[0] : {}; // Obtiene la primera variante o un objeto vacío
        const selectedColor = selectedVariant.color || product.color;  // Asume que 'color' está en las variantes o en el producto
        const selectedSize = selectedVariant.size || 'M';  // Asume tamaño por defecto 'M'
        const selectedImage = product.image;  // Asumimos que 'image' es la principal

        const selectedProduct = {
            id: product._id,
            imagen: selectedImage,  // Usa la imagen principal del producto
            titulo: product.name,  // Ajustado a 'name'
            categoria: categoria.toLowerCase(),
            precio: product.price,  // Ajustado a 'price'
            productoTipo: productoTipo.toLowerCase(),
            color: selectedColor,  // El color seleccionado
            cantidad: q,  // La cantidad, asumiendo que 'q' es la cantidad deseada
            tamaño: selectedSize,  // Tamaño de la variante seleccionada
        };

        console.log(selectedProduct);

        // Verifica que todos los campos necesarios estén presentes
        if (!selectedProduct.precio || !selectedProduct.color || !selectedProduct.cantidad || selectedProduct.imagen === "") {
            return;
        }

        setAddingToCart(true);

        // Espera de 3 segundos antes de agregar al carrito
        setTimeout(() => {
            addItemToCart(selectedProduct);  // Agrega el producto al carrito
            openModal();  // Abre el modal
            setAddingToCart(false);  // Vuelve a establecer en false después de agregar al carrito
        }, 3000);  // 3000 ms = 3 segundos
    };


    return (
        <>
            <div className="offcanvas-menu-overlay"></div>
            {/*  <TopInfo /> */}
            <SearchBar />
            <header className="header">
                <Header />
            </header>
            <section className="shop-details mt-10 pt-10">

                <div className="product__details__pic min-h-screen bg-white  mt-10 pt-10">
                    <div className="container-fluid min-h-[700px]">
                        <div className="text-gray-600 text-lg text-left font-questrial">
                            {/*   <span> */}
                            <NavLink to="/" className="text-gray-600 hover:text-gray-700 no-underline font-questrial">
                                Inicio
                            </NavLink>
                            <span className="mx-2">/</span>


                            <span className="font-questrial text-gray-700">{product?.typeProduct}</span>
                            <span className="mx-2">/</span>
                            <span className="font-questrial text-black"><strong>{product?.category}</strong></span>
                            {/*  </span> */}
                        </div>
                        {/* <div className="row">
                            <div className="col-lg-12">
                                <div className="product__details__breadcrumb">
                                    <Link to={"/"}>Inicio</Link>
                                    <Link to={`/shop/${cleanPath(subCategory)}`}>Explorar</Link>
                                    <span>Detalle</span>
                                </div>
                            </div>
                        </div> */}
                        <div className=" mx-auto  py-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                                {/* Columna de imágenes */}
                                <div className=" sm:block">
                                    {/* Imagen principal */}
                                    <div className="product__details__pic__item relative">
                                        {isLoading && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                                <span className="text-gray-500">Cargando...</span>
                                            </div>
                                        )}
                                        {product?.variants.length > 0 ? (
                                            <img
                                                className={`w-full h-[600px] object-cover ${isLoading ? "opacity-0" : "opacity-100"} border p-1`}
                                                src={
                                                    selectedVariant?.color
                                                        ? product.image
                                                        : product.image
                                                }
                                                alt="Producto"
                                                onLoad={handleImageLoad} // Evento para manejar la carga exitosa
                                                onError={handleImageError} // Evento para manejar errores de carga
                                            />
                                        ) : (
                                            <img
                                                className={`w-full h-[600px] img-fluid p-1 border ${isLoading ? "opacity-0" : "opacity-100"}`}
                                                src={product.image}// Si no hay variantes, usamos la primera imagen de imagesAdded
                                                alt="Producto"
                                                onLoad={handleImageLoad} // Evento para manejar la carga exitosa
                                                onError={handleImageError} // Evento para manejar errores de carga
                                            />
                                        )}
                                    </div>


                                    {/* Miniaturas */}
                                    <div className="flex mt-4 space-x-1 w-full">
                                        {product?.variants?.length > 0
                                            ? product.variants.map((v, index) => (
                                                /*        v.images?.map((imagen, idx) => ( */
                                                <div
                                                    key={`${index}-${index}`}
                                                    className={`w-1/4 flex cursor-pointer p-1 border ${selectedVariant?.color === v.color ? "border-gray-800" : "border-gray-200"}`}
                                                    onClick={() => setSelectedVariant(v)}
                                                >
                                                    <img
                                                        src={v.image}
                                                        alt={`Miniatura ${index}-${index}`}
                                                        className="w-full h-[100px] object-cover cursor-pointer"
                                                    />
                                                    {/*  <img
                                    src={`https://productosvet.s3.us-east-1.amazonaws.com/${product.category}/${v.color}/${imagen}`}
                                    alt={`Miniatura ${index}-${idx}`}
                                    className="w-full h-[100px] object-cover cursor-pointer"
                                /> */}
                                                </div>
                                            ))
                                            /*  )) */
                                            : product?.imagesAdded?.map((imagen, index) => (
                                                <div
                                                    key={index}
                                                    className="w-1/4 flex cursor-pointer p-1 border border-gray-200"
                                                    onClick={() => setSelectedVariant(null)}
                                                >
                                                    <img
                                                        src={`https://productosvet.s3.us-east-1.amazonaws.com/${product.category}/${imagen}`}
                                                        alt={`Miniatura ${index}`}
                                                        className="w-full h-[100px] object-cover cursor-pointer"
                                                    />
                                                </div>
                                            ))}
                                    </div>
                                </div>
                                {/*  <div> */}
                                <ProductCarousel variantes={product?.variantes} imagesAdded={product?.imagesAdded} cambiarImagenPrincipalv={cambiarImagenPrincipalv} productoTipo={productoTipo} categoria={categoria} selectedVariant={selectedVariant} product={product} isLoading={isLoading} />
                                {/*  </div> */}

                                {/* Columna de detalles del producto */}
                                <div
                                    ref={ref}
                                    className={`space-y-4  text-left transition-all duration-500 ease-out ${isVisible ? "transform translate-x-0 opacity-100" : "transform translate-x-full opacity-0"
                                        }`}
                                >
                                    <h1 className="text-lg sm:text-2xl font-roboto  text-black capitalize"><strong>{product?.name.toUpperCase()}</strong></h1>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                                        ${product?.variants.length > 0 ? price : product?.price}
                                    </h3>
                                    <hr />
                                    {
                                        product?.variantes > 0 ?
                                            <>
                                                <p className="font-questrial text-red-500">
                                                    ¡QUEDAN {stock} DISPONIBLES!
                                                </p>
                                                <hr />
                                            </>
                                            : <>
                                                <p className="font-questrial text-red-500">
                                                    ¡QUEDAN {product?.stock} DISPONIBLES!
                                                </p>
                                                <hr />
                                            </>
                                    }

                                    <p className="text-gray-600">{product?.descripcion || "Descripción no disponible."}</p>
                                    <hr className="hidden sm:hidden" />
                                    {/* Opciones de variantes */}
                                    <div className="space-y-4">
                                        {/* Selección de peso */}
                                        {product?.variants.length > 0 && (
                                            <div>
                                                {/*    <label htmlFor="peso" className="block text-sm font-medium text-gray-700">
                                                    Seleccionar Peso
                                                </label> */}
                                                <select
                                                    id="peso"

                                                    disabled={filteredPesos.length === 0}
                                                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-sm font-questrial"
                                                    onChange={(e) => handleVariantChange("dato_2_mul", e.target.value)}
                                                    value={selectedVariant?.color || ""}
                                                >
                                                    <option value="" disabled>
                                                        Seleccionar color
                                                    </option>
                                                    {filteredPesos.map((peso, index) => (
                                                        <option key={index} value={peso}>
                                                            {peso}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}

                                        {/* Selección de color */}
                                        {product?.variants.length > 0 &&
                                            /*  (["perro", "gato"].includes(product?.productoTipo) &&
                                                 ["accesorios", "paseos", "ropa"].includes(product?.categoria)) && ( */
                                            <div>
                                                <select
                                                    id="color"
                                                    disabled={filteredColors.length === 0}
                                                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-sm font-questrial"
                                                    onChange={(e) => handleVariantChange("color", e.target.value)}
                                                    value={selectedVariant?.color || ""}
                                                >
                                                    <option value="" disabled>
                                                        Seleccionar color
                                                    </option>
                                                    {filteredColors.map((color, index) => (
                                                        <option key={index} value={color}>
                                                            {color}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            /* ) */}
                                    </div>

                                    {/* Selector de cantidad */}
                                    <QuantitySelector q={q} setQ={setQ} />

                                    {/* Botón de agregar al carrito */}

                                    <div className="mt-4 hidden sm:block">

                                        <button
                                            className="w-full bg-black text-white py-3 rounded-sm hover:bg-red-500 transition font-questrial"
                                            onClick={addToCart}
                                        >
                                            {addingToCart ? (
                                                <svg
                                                    className="animate-spin h-5 w-5 text-white mx-auto"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                            ) : (
                                                "AGREGAR AL CARRITO"
                                            )}
                                        </button>
                                    </div>

                                    <div className="gap-2">
                                        <h2 className="text-lg  font-poppins mb-2">Métodos de pago disponibles</h2>

                                        {/* Lista de métodos de pago */}
                                        <div className="gap-2">
                                            {paymentMethods.map((method, index) => (
                                                <div
                                                    key={index}
                                                    className="text-left items-center justify-center py-1 bg-white rounded-full font-questrial text-sm text-black"
                                                >
                                                    - {method}
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                    <p className="text-black"><strong>Compartí este producto en tus redes sociales</strong></p>
                                    <div className="flex gap-2">

                                        <WhatsappShareButton title={product?.descripcion} url={`https://wearit-silk.vercel.app/shop/${productoTipo}/${categoria}/${productTitle}`}>
                                            <button className="bg-green-500 text-white font-bold p-2 rounded-full hover:bg-green-600 transition-colors">
                                                <IoLogoWhatsapp />
                                            </button>
                                        </WhatsappShareButton>

                                        <FacebookShareButton title={product?.descripcion} url={`https://wearit-silk.vercel.app/shop/${productoTipo}/${categoria}/${productTitle}`}>
                                            <button className="bg-blue-500 text-white font-bold p-2 rounded-full hover:bg-blue-600 transition-colors">
                                                <IoLogoFacebook />
                                            </button>
                                        </FacebookShareButton>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <AddCartMobileComponent q={q} setQ={setQ} addToCart={addToCart} addingToCart={addingToCart} />


                    <section className="featured sm:my-5 container-fluid">

                        <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl">Otros usuarios compraron</h4>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={slidesToShow}
                            className="my-5"
                            navigation={true}     
                                  
                        >
                            {destacados.length > 0 &&
                                destacados
                                    /*     .filter((p) => p.destacado === true && p.productoTipo && p.categoria) */
                                    .map((v, index) => {
                                        const cleanPath = (path) => (path ? path.replace(/%20|\s+/g, "") : "default");
                                        const productoTipo = cleanPath(v.typeProduct);
                                        const categoria = cleanPath(v.category);
                                        // Verifica si los parámetros son válidos
                                        if (!productoTipo || !categoria) {
                                            console.error("Parámetros faltantes o inválidos:", v);
                                            return null; // Salta este producto
                                        }

                                        console.log(productoTipo, categoria)
                                        console.log(JSON.stringify(v))
                                        return (
                                            <SwiperSlide>

                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12" key={index}>
                                                    <NavLink
                                                        className="no-underline"
                                                        to={`/shop/${productoTipo}/${categoria}/${v._id}`}
                                                    >
                                                        <ProductGrid
                                                            key={index}
                                                            _id={v._id}
                                                            typeProduct={productoTipo}
                                                            category={categoria}
                                                            price={v.price ? v.price : 0}
                                                            name={v.name}
                                                            image={v.image}
                                                            variantes={v.variants}
                                                        />
                                                    </NavLink>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}

                        </Swiper>
                    </section>
                </div>
                <Footer />
                <div>
                    <Toaster />
                </div>
            </section >
            <ShoppingCartModal closeModal={closeModal} continueShopping={continueShopping} isModalOpen={isModalOpen} viewCart={viewCart} />
        </>
    );
};

export default ProductIDV2;

