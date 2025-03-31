import { products } from "../assets/assets";
import { ShopContext } from "./ShopContextData";
import { useState } from "react";

// ShopContextProvider is a wrapper component that provides the context to its children
// It contains all the shared state and functions that child components might need
const ShopContextProvider = ({ children }) => {
  // Define constants used throughout the application
  // Currency symbol for Ghana Cedis
  const currency = "GH₵";
  // Standard delivery fee across the application
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Create a value object that contains all the data we want to share
  // This will be accessible by any component that uses the ShopContext
  const value = {
    products, // All product data from our catalog
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  // Render the Provider component with our value object
  // Any component wrapped by this provider can access the value object using useContext
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

// Export the provider component as default for easy imports
export default ShopContextProvider;
