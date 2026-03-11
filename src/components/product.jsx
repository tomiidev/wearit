import { NavLink } from "react-router";

const ProductGrid = ({
  name,
  _id,
  price,
  image,
  variantes,
  typeProduct,
  category,
}) => {
  // Asegurarte de tomar la primera imagen de las variantes, si existen.
  console.log(name, category, typeProduct);
  /*    const cleanPath = (path) => (path ? path.replace(/%20|\s+/g, "") : "default");
    const productoTipoPars = cleanPath(typeProduct)
    const categoriaPars = cleanPath(category) */
  // Verifica si los parámetros son válidos
  if (!typeProduct || !category) {
    console.error("Parámetros faltantes o inválidos");
    return null; // Salta este producto
  }
  /*     const getImageUrl = () => {
        const hasVariants = Array.isArray(variantes) && variantes.length > 0

        // Validar que imagenes sea un array antes de usar .length
        const hasImages = Array.isArray(imagesAdded) && imagesAdded.length > 0
        // Si hay variantes con imágenes, usa la imagen de la primera variante
        if (hasVariants && variantes[0]?.imagen && imagesAdded.length === 0) {
            return `https://productosvet.s3.us-east-1.amazonaws.com/${productoTipoPars}/${categoriaPars}/${variantes[0].imagen}`;
        }

        // Si no hay variantes pero hay imágenes, usa la primera imagen general
        if (hasImages && variantes.length === 0) {
            return `https://productosvet.s3.us-east-1.amazonaws.com/${productoTipoPars}/${categoriaPars}/${imagesAdded[0]}`;
        }

        // Imagen de respaldo si ambos están vacíos.
        return "https://via.placeholder.com/150"; // Cambia esto por la URL de tu imagen genérica.
    };
 */

  return (
    <div className="item mb-5">
      <NavLink
        to={`/shop/${typeProduct}/${category}/${name}`}
        className="h-full"
      >
        {/* Contenedor de la imagen */}
        <div className="group overflow-hidden relative sm:h-[700px]  z-0">
          <img
            src={image}
            alt={name}
            className=" w-full sm:min-h-[700px] img-fluid transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Contenido debajo */}
        <div className="down-content flex flex-col mt-1 justify-between flex-grow">
          <span className="text-md md:text-lg font-roboto text-black">
            {name}
          </span>
          <span className="text-lg md:text-lg text-black font-bold font-questrial">
            ${price}
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductGrid;
