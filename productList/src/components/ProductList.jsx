import "./ProductList.css";
import { Products } from "./Product";
import { useState } from "react";
function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(Products);

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    if (input === "") {
      setFilteredProducts(Products);
    } else {
      const searchPrices = parseFloat(input);
      if (!isNaN(searchPrices)) {
        const searchData = Products.filter(
          (item) => item.price <= searchPrices
        );
        setFilteredProducts(searchData);
      } else {
        const searchData = Products.filter((char) =>
          char.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
        );
        setFilteredProducts(searchData);
      }
    }
  };
  return (
    <>
      <div className="card">
        
        <div>
          <input
            type="search"
            placeholder="Search here"
            value={searchTerm}
            className="search"
            onChange={handleSearch}
          />
        </div>
        <div className="card-data">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div>
                <span>{product.name} </span>
                <span>{product.price}</span>
              </div>
            ))
          ) : (
            <p>No Data Found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductList;
