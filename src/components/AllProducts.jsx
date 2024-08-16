import axios from "axios";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filter, setFilter] = useState({ brand: '', category: '', priceRange: '' });
  const [sortOption, setSortOption] = useState('');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const itemsPerPage = 8;

  useEffect(() => {
    const query = Object.entries(filter)
      .filter(([key, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    axios.get(`http://localhost:5000/allProducts?${query}&sort=${sortOption}&search=${search}&page=${currentPage}&limit=${itemsPerPage}`)
      .then(response => {
        const { products, total } = response.data;
        setAllProducts(products);
        setTotalPages(Math.ceil(total / itemsPerPage));
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [filter, sortOption, search, currentPage]);

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
    setCurrentPage(1); // Reset to the first page when filters change
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1); // Reset to the first page when sort option changes
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchButton = () => {
    setCurrentPage(1); // Reset to the first page when search is performed
  };

  const formatDate = (dateString) => {
    return dateString.split('T')[0];
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-3 py-1 rounded-md ${currentPage === i ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <section className="py-6 sm:py-12 bg-gradient-to-r from-sky-100 to-amber-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">All Products</h2>
            <p className="font-serif text-sm dark:text-gray-600">
              Premier store for wrist watches
            </p>
          </div>
          {/* search and sort */}
          <div className="flex justify-around w-full gap-6  sm:px-8 lg:px-12 xl:px-32 ">
            {/* search */}
            <fieldset className="w-full space-y-1 dark:text-gray-800">
              <label htmlFor="Search" className="hidden">
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="button"
                    title="search"
                    onClick={handleSearchButton}
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 dark:text-gray-800"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="Search"
                  placeholder="Search..."
                  value={search}
                  onChange={handleSearch}
                  className="w-32 border-2 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-amber-400"
                />
              </div>
            </fieldset>
            {/* sort */}
            <div>
              <label className="flex">
                <p className="w-20">Sort by:</p>
                <select
                  className="bg-slate-200 border focus:outline-none focus:dark:bg-gray-50 focus:dark:border-amber-400"
                  value={sortOption} onChange={handleSortChange}>
                  <option value="">Select</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="date-desc">Date Added: Newest first</option>
                </select>
              </label>
            </div>
            {/* filter */}
            <div>
              <label className="flex gap-2">
                Brand:
                <input
                  type="text"
                  name="brand"
                  value={filter.brand}
                  onChange={handleFilterChange}
                  className="bg-slate-200 border focus:outline-none focus:dark:bg-gray-50 focus:dark:border-amber-400"
                />
              </label><br />
              <label className="flex gap-2">
                Category:
                <input
                  type="text"
                  name="category"
                  value={filter.category}
                  onChange={handleFilterChange}
                  className="bg-slate-200 border focus:outline-none focus:dark:bg-gray-50 focus:dark:border-amber-400"
                />
              </label><br />
              <label className="flex gap-2">
                Price Range:
                <select
                  name="priceRange"
                  value={filter.priceRange}
                  onChange={handleFilterChange}
                  className="bg-slate-200 border focus:outline-none focus:dark:bg-gray-50 focus:dark:border-amber-400"
                >
                  <option value="">All</option>
                  <option value="0-100">0-100</option>
                  <option value="101-500">101-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1001-5000">1001-5000</option>
                </select>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {allProducts?.map((product) => (
              <article
                key={product._id}
                className="flex flex-col bg-amber-300 hover:bg-blue-950 bg-opacity-10 hover:text-white"
              >
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 "
                    src={product?.image}
                  />
                </a>
                <div className="flex flex-col flex-1 p-4">
                 
                  
                  <h1 className="flex-1 text-lg font-semibold leading-snug">
                    {product?.name}
                  </h1>
                  <h3 className="pt-2">{product?.description.slice(0,50)}...</h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                    <span> {formatDate(product?.date)}</span>
                    <span>$ {product?.price}</span>
                  </div>
                  <button className="btn hover:bg-blue-950 mt-2 w-32 rounded-none text-white dark:hover:bg-[#DAA82E] bg-[#DAA82E]">Veiw Details</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
