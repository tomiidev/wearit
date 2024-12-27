import React, { useState } from 'react';
/* import TopInfo from './top'; */
import Footer from './footer';
import { Link, useLocation, useNavigate } from 'react-router';
import { useCart } from '../context/cart';
import { API_PROD, API_URL } from '../lib/apis';
import toast, { Toaster } from 'react-hot-toast';
/* import SubmitButton from './submit_button'; */

const Checkout = () => {
    const { state } = useLocation()
    console.log(state)
    const { cartItems, clearCart /* totalMonto, subtotal, discountAmount */ } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('');
    const [sandbox_init_point, setSandbox_init_point] = useState('');
    const [deliveryOption, setDeliveryOption] = useState('envio'); // Estado para envío/retiro
    const [isLoading, setIsLoading] = useState(false); // Nuevo estado de carga
    const paymentMethods = [
        { value: 'transferencia', label: 'Transferencia bancaria' },
        { value: 'efectivo', label: 'Efectivo' },
        { value: 'pos', label: 'Pos' },
        { value: 'mp', label: 'Mercado Pago' },
    ];
    const nv = useNavigate()
    const renderPaymentMethods = () => {
        return paymentMethods.map(method => (
            <div className="checkout__input__checkbox" key={method.value}>
                <label htmlFor={method.value}>
                    {method.label}
                    <input
                        type="radio"
                        name="paymentMethod"
                        value={method.value}
                        id={method.value}
                        onChange={(e) => {
                            setPaymentMethod(method.value);
                            handleInputChange(e);
                        }}
                    />
                    <span className="checkmark"></span>
                </label>
            </div>
        ));
    };

    const renderPaymentDetails = () => {
        switch (paymentMethod) {
            case 'transferencia':
                return <p>Nombre: Juan Pérez<br />N° de cuenta: 1234567890</p>;
            case 'efectivo':
                return <p>Pagas en efectivo al momento de recibir tu compra.</p>;
            case 'pos':
                return <p>Pagas con POS en el momento de la entrega.</p>;
            default:
                return <p>Selecciona un método de pago para ver los detalles.</p>;
        }
    };
    const [orderData, setOrderData] = useState({
        fullName: "",
        deliveryOption: deliveryOption,
        address: "",
        apartment: "",
        city: "",
        postalCode: "",
        phone: "",
        email: "",
        notes: "",
        paymentMethod: paymentMethod,
    });

    // Manejador genérico para actualizar el estado de la compra
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrderData({
            ...orderData,
            [name]: value,
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!orderData.fullName || !orderData.address || !orderData.city || !orderData.postalCode || !orderData.phone || !orderData.email ||!orderData.paymentMethod ) {
            toast.error('Todos los campos son obligatorios.');
            return;
        }
        setIsLoading(true); // Activar estado de carga

        try {
            // Simular un retraso en el procesamiento
            toast.success('Tu compra ha sido realizada con éxito!');

        } catch (error) {
            console.error("Error al procesar el pedido:", error);
            toast.error('Ocurrió un error al realizar la compra.');
        } finally {
            setIsLoading(false); // Desactivar estado de carga
        }
    };



    return (
        <>
            <div className="offcanvas-menu-overlay"></div>
            {/*    <TopInfo /> */}


            <section className="checkout spad">
                <div className="container">
                    <div className="checkout__form">
                        <div className="row text-left">

                            <div className="col-lg-8 col-md-6">
                                <h6 className="coupon__code">
                                    <span className="icon_tag_alt"></span>¿Te olvidaste de ingresar un cupón?
                                    <Link to="/cart">Clickea acá</Link> para ingresarlo
                                </h6>
                                <h6 className="checkout__title">Detalle de factura</h6>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="checkout__input">
                                            <p>Nombre completo<span>*</span></p>
                                            <input
                                                value={orderData.fullName} // Vincula el valor al estado
                                                onChange={handleInputChange} name="fullName" type="text" placeholder="Tu nombre completo" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout__input">
                                    <p>Opciones de entrega<span>*</span></p>
                                    <select

                                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500"
                                        name='deliveryOption'
                                        value={deliveryOption}
                                        onChange={(e) => {

                                            setDeliveryOption(e.target.value); // Actualiza el estado con el valor seleccionado
                                            handleInputChange(e); // Asegúrate de actualizar el estado del objeto orderData
                                        }}
                                        required
                                    >
                                        <option value="envio">Envío a domicilio</option>
                                        <option value="local">Retiro en el local</option>
                                    </select>

                                </div>
                                {
                                    deliveryOption === "envio" ? (
                                        <div className="checkout__input">
                                            <p>Dirección<span>*</span></p>
                                            <input type="text" placeholder="Dirección: calle y esq."
                                                onChange={handleInputChange} className="checkout__input__add" name="address" />
                                            <input type="text" name="apartment" placeholder="Apartmento, suite, etc (opcional)" />
                                        </div>
                                    ) : <></>
                                }
                                <div className="checkout__input mt-5">
                                    <p>Ciudad<span>*</span></p>
                                    <input type="text" name="city"
                                        value={orderData.city}
                                        onChange={handleInputChange}
                                        placeholder="Ciudad" required />
                                </div>

                                <div className="checkout__input">
                                    <p>Código postal<span>*</span></p>
                                    <input
                                        type="text"
                                        name="postalCode"
                                        value={orderData.postalCode}
                                        onChange={handleInputChange}
                                        placeholder="Código postal"
                                        required
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>Teléfono<span>*</span></p>
                                            <input
                                                type="text"
                                                name="phone"
                                                value={orderData.phone}
                                                onChange={handleInputChange}
                                                placeholder="Teléfono"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>Email<span>*</span></p>
                                            <input
                                                type="email"
                                                name="email"
                                                value={orderData.email}
                                                onChange={handleInputChange}
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="checkout__input">
                                    <p>Nota extra que quieras que sepamos :)<span></span></p>
                                    <input
                                        type="text"
                                        name="notes"
                                        value={orderData.notes}
                                        onChange={handleInputChange}
                                        placeholder="Deja tu mensaje"
                                    />


                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="checkout__order">
                                    <h4 className="order__title">Tu orden</h4>
                                    <div className="checkout__order__products">Producto(s) <span>Total</span></div>
                                    <ul className="checkout__total__products">
                                        {
                                            cartItems.map((product) => (
                                                <li key={product.id}>{product.titulo} <span>{product.precio * product.cantidad}</span></li>
                                            ))
                                        }
                                    </ul>
                                    <ul className="checkout__total__all ">
                                        <li className="flex justify-between">
                                            Subtotal <div>$ {state.subtotal}</div>
                                        </li>
                                        <hr />
                                        <li className="flex justify-between">
                                            Descuento <div>- $ {state.discount}</div>
                                        </li>
                                        <hr />
                                        <li className="flex justify-between font-semibold text-gray-600">
                                            Total <div>$ {state.totalMonto}</div>
                                        </li>
                                    </ul>

                                    {renderPaymentMethods()}

                                    <p>{renderPaymentDetails()}</p>
                                    {/*  <SubmitButton
                                        orderData={orderData}
                                        cartItems={cartItems}
                                        handleSubmit={handleSubmit}
                                        isLoading={isLoading} // Pasar estado de carga
                                    /> */}

                                    <p className='mt-2'>*¡IMPORTANTE! Al hacer click en el "¡LISTO!" tu compra quedará registrada en el sistema. Si abonas con Mercado Pago serás redirigido/a al checkout luego de clickear.</p>
                                    {/*  {
                                        sandbox_init_point && ( */}

                                    <button
                                        /* disabled={sandbox_init_point === ""} */
                                        type="button"
                                        className={`site-btn w-full bg-black flex items-center justify-center gap-2 ${sandbox_init_point === ""
                                            ? 'bg-gray-200 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 cursor-pointer'
                                            }`}
                                        onClick={handleSubmit}
                                    >

                                        <p className='text-white text-lg'>Pagar</p>


                                    </button>
                                    {/*     )
                                    } */}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </section>


            <Footer />
            <Toaster />
        </>
    );
};

export default Checkout;
