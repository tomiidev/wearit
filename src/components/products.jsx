import { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import WpButton from "./wp";
import { Link } from "react-router";
import SearchBar from "./search_bar";
import { useCategories } from "../context/notifications";
const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const productsPerPage = 6;
  const { products } = useCategories();
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products
    .filter((product) => {
      if (selectedFilter === "Todos") return true;
      return product.name.toLowerCase().includes(selectedFilter.toLowerCase());
    })
    .slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <Header />
      <SearchBar />
      <section className="section pt-10 mt-10" id="products">
        <div className="container-fluid mx-auto">
          {/* Encabezado */}
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2 className="font-poppins md:text-lg">
                  Encuentra lo último en moda
                </h2>
                <span>Colección de estación</span>
              </div>
            </div>
          </div>

          {/* Filtros */}
          <div className="flex justify-between items-center my-6 px-4">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-filter"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
              </svg>
              <span className="text-gray-800 font-medium">Filtrar por:</span>
            </div>
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="Todos">Todos</option>
              <option value="Primavera">Primavera</option>
              <option value="Air">Air</option>
              <option value="Chaqueta">Chaqueta</option>
              <option value="Niño">Niño</option>
            </select>
          </div>

          {/* Productos */}
          <div className="row flex flex-wrap">
            {currentProducts.map((product) => (
              <div key={product.id} className="col-lg-4  col-12">
                <Link to={`/products/${product.id}`}>
                  <div className="item rounded-lg">
                    <div className="thumb">
                      <img
                        src={product.image}
                        alt={product.name}
                        className=""
                      />
                    </div>
                    <div className="flex flex-col mt-2">
                      <span className="font-poppins text-black md:text-lg text-xs">
                        {product.name}
                      </span>
                      <span className="text-gray-700 font-questrial font-bold text-xs sm:text-lg mt-2">
                        <strong>{product.price}</strong>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <div className="col-lg-12 mt-6">
              <div className="pagination flex justify-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`px-4 py-2 text-sm font-medium ${
                        pageNumber === currentPage
                          ? "bg-gray-800 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WpButton />
    </>
  );
};

export default Products;
