import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContextData";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  // Make the search bar visible based on location, i want it to only show on the collection page
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
      // console.log(location.pathname);
      // console.log(showSearch);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b border-gray-50 bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-2 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          className="flex-1 outline-none bg-inherit text-sm"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img className="w-4" src={assets.search_icon} alt="search icon" />
      </div>

      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        className="inline w-3 cursor-pointer"
        alt="cross icon"
      />
    </div>
  ) : null;
};

export default SearchBar;
