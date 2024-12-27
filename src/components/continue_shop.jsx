import { Link } from "react-router"

const Cshop = () => {
    return (
        <div class="col-lg-6 col-md-6 col-sm-6 text-left">
            <div class="continue__btn">
                <Link to="/products">Continuar comprando</Link>
            </div>
        </div>
    )
}

export default Cshop