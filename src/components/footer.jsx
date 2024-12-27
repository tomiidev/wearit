import Rights from "./rights";

const Footer = () => {
    return (
        <footer className="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="first-item">
                            <div class="logo">
                                <img className="w-56" src={require("../images/l.png")} alt="hexashop ecommerce templatemo" />
                            </div>
                            <ul className="text-left">
                                <li><a href="/">Uruguay</a></li>
                                <li><a href="/">hexashop@exashop.com</a></li>
                                <li><a href="/">010-020-0340</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h4 className="text-left">Articulos &amp; categorias</h4>
                        <ul className="text-left">
                            <li><a href="/">Hombre</a></li>
                            <li><a href="/">Mujer</a></li>
                            <li><a href="/">Niños</a></li>
                        </ul>
                    </div>
                {/*     <div class="col-lg-3">
                        <h4 className="text-left">Links utiles</h4>
                        <ul className="text-left">
                            <li><a href="/">Inicio</a></li>


                            <li><a href="/">Contac</a></li>
                        </ul>
                    </div> */}
                   {/*  <div class="col-lg-4">
                        <h4 className="text-left">Help &amp; Information</h4>
                        <ul className="text-left">
                            <li><a href="/">Help</a></li>
                            <li><a href="/">FAQ's</a></li>
                            <li><a href="/">Shipping</a></li>
                            <li><a href="/">Tracking ID</a></li>
                        </ul>
                    </div> */}
                </div>
                    <Rights />
            </div>
        </footer>
    )
}

export default Footer;