import { createContext, useContext, useState, useEffect } from "react";
import productsData from "../products.json";

const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [products, setProducts] = useState([]);
  const [destacados, setDestacados] = useState([]);
  const [promociones, setPromociones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      // Cargar productos desde el JSON local o desde una API
      setProducts(productsData);

      // Extraer categorías únicas
      const uniqueCategories = [
        ...new Set(productsData.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);

      // Extraer tipos de productos únicos
      const uniqueProductTypes = [
        ...new Set(productsData.map((product) => product.typeProduct)),
      ];
      setProductTypes(uniqueProductTypes);

      // Simular destacados y promociones (puedes cambiar esta lógica)
      setDestacados(
        products.filter((product) => product.featured === true).slice(0, 5),
      );
      setPromociones(productsData.filter((product, index) => index % 2 === 0)); // Productos pares como promociones
    } catch (err) {
      setError("Error cargando los datos");
    } finally {
      setLoading(false);
    }
  }, [products]);
  const filterProducts = (productType, category) => {
    return products.filter(
      (product) =>
        product.typeProduct === productType && product.category === category,
    );
  };
  const filterProductsOnlyByproductType = (productType) => {
    return products.filter((product) => product.typeProduct === productType);
  };
  return (
    <CategoriesContext.Provider
      value={{
        filterProducts,
        categories,
        filterProductsOnlyByproductType,
        productTypes,
        products,
        destacados,
        promociones,
        loading,
        error,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  return useContext(CategoriesContext);
}
