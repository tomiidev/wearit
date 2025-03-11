import { Link } from "react-router-dom";
import Rights from "./rights";

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__widget text-left text-white">
                            <h6>Contacto</h6>
                            <p className="font-questrial text-white">18 de Julio 1234, Montevideo, Uruguay.</p>
                            <p className="font-questrial text-white">+598 1234 5678</p>
                            <p className="font-questrial text-white">contacto@tiendaropa.com.uy</p>
                            <p className="font-questrial text-white">Lunes a Sábado de 10:00 a 20:00hs.</p>
                        </div>
                    </div>
                    <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                        <div className="footer__widget text-left text-white">
                            <h6>Métodos de pago</h6>
                            <p className="font-questrial text-white">Transferencia bancaria</p>
                            <p className="font-questrial text-white">Mercado Pago</p>
                            <p className="font-questrial text-white">Efectivo</p>
                            <p className="font-questrial text-white">Tarjetas de crédito y débito</p>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 col-md-3 col-sm-6">
                        <div className="footer__widget text-left">
                            <h6>Seguinos en redes sociales</h6>
                            <ul className="d-flex list-unstyled">
                                <li className="mr-3">
                                    <Link to="https://www.facebook.com/tu-tienda-de-ropa" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
                                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                                        </svg>
                                    </Link>
                                </li>
                                <li className="mr-3">
                                    <Link to="https://www.instagram.com/tu-tienda-de-ropa" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
                                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                            <path d="M16.5 7.5l0 .01"></path>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
            <Rights />
        </>
    );
};

export default Footer;
