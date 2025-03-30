import React from "react";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContextData";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  // UseEffect to filter products when the component mounts
  useEffect(() => {
    setFilterProducts(products);
  }, []);

  return (
    <div className="flex  flex-col sm:flex-row gap-1 sm:gap-10 pt-10  border-t ">
      {/* Left Side */}
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)} //set showFilter state to the opposite of current state
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="dropdown_icon"
          />
        </p>

        {/* Category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 w-full sm:max-w-xs md:max-w-sm ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-sm font-medium mb-3">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 ">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Men"} />
              Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Women"} />
              Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Kids"} />
              Kids
            </p>
          </div>
        </div>

        {/* Sum Categoty filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 w-full sm:max-w-xs md:max-w-sm ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-sm font-medium mb-3">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 ">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Topwear"} />
              Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Bottomwear"} />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Winterwear"} />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2={`COLLECTIONS (${products.length})`} />
          {/* Product Sorting */}
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort By: Relevance</option>
            <option value="low-high">Sort By : Low to High</option>
            <option value="high-low">Sort By : High to Low</option>
          </select>
        </div>

        {/* Mapping Products */}
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
