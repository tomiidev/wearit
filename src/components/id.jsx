import { Link } from "react-router";
import Header from "./header";
import Footer from "./footer";
import { useState } from "react";
import { useCart } from "../context/cart";
import toast, { Toaster } from "react-hot-toast";
import TopInfo from "./top";
import products from "../products.json"
import QuantitySelector from "./quantity_selector";
import WpButton from "./wp";
const ProductId = () => {
    const [q, setQ] = useState(1);
    const [product, setProduct] = useState(products[0]);
    const [selectedImage, setSelectedImage] = useState(null); // Imagen seleccionada
    const { addItemToCart } = useCart();
    const [selectedVariant, setSelectedVariant] = useState({
        dato_1_col: null,
        dato_2_mul: null,
        dato_3_pre: 0,
    });
    const [price, setPrice] = useState(0);

console.log(products)



    const addToCart = () => {
        if (!product) {
            toast("No se encontró el producto");
            return;
        }
      /*   const cleanPath = (path) => (path ? path.replace(/%20|\s+/g, "") : "default");
        const productoTipo = cleanPath(product.productoTipo);
        const categoria = cleanPath(product.categoria); */
        // Verifica si los parámetros son válidos
    /*     if (!productoTipo || !categoria) {
            console.error("Parámetros faltantes o inválidos");
            return null; // Salta este producto
        } */

        const selectedProduct = {
            id: product.id,
            imagen: products[0].image,
            titulo: product.name,
        /*     categoria: categoria.toLowerCase(), */
            precio: product.price,
           /*  productoTipo: productoTipo.toLowerCase(), */
            /* color: product.variantes.length > 0 ? selectedVariant.dato_1_col : product?.color, */
            cantidad: q,
          /*   peso: selectedVariant.dato_2_mul, */
        };
        console.log(selectedProduct)
      /*   if (product?.productoUnico === "no") {

            if (!selectedProduct.precio || !selectedProduct.color || !selectedProduct.cantidad) {
                toast("Debes seleccionar lo que queres para agregar al carrito");
                return;
            }
        } */

        addItemToCart(selectedProduct);
        toast("Agregado al carrito exitosamente");
    };
    return (
        <>
            <TopInfo />
            <Header />
            <section className="section pt-5" id="product">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="left-images">
                                <img src={require("../images/single-product-01.jpg")} alt="" />
                                <img src={require("../images/single-product-02.jpg")} alt="" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="right-content">
                                <h4>Chaqueta verde</h4>
                                <span class="price">$75.00</span>
                                {/*  <ul class="stars">
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                            </ul> */}
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</span>
                                <div class="quote">
                                    <i class="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
                                </div>
                                <div class="quantity-content">
                                    <QuantitySelector q={q} setQ={setQ} />
                                    <div class="left-content">
                                
                                    </div>
                                </div>
                                <div class="total">
                                    <h4>Total: $210.00</h4>
                                    <div class="main-border-button">
                                        <button type="button" className='border w-full mt-5 text-white  bg-black transition duration-300 rounded-sm font-light font-questrial tracking-wider px-5 py-2 cursor-pointer' onClick={addToCart}>Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Toaster />
            <WpButton />
        </>
    )
}

export default ProductId;   