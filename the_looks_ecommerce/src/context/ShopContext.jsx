import { toast } from "react-toastify";
import { products } from "../assets/assets";
import { ShopContext } from "./ShopContextData";
import { useEffect, useState } from "react";

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

  // State to manage the cart items
  // This state will hold the items that the user adds to their cart
  // It is initialized as an empty array
  const [cartItems, setCartItems] = useState({});

  /**
   * Adds an item to the cart with the specified size.
   * If the item and size already exist in the cart, increments the quantity.
   * Otherwise, initializes the item and size with a quantity of 1.
   *
   * @param {string} itemId - The unique identifier for the item to add.
   * @param {string} size - The size of the item to add.
   */
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select  Product size");
      return;
    }

    let cartData = structuredClone(cartItems); // Create a deep copy of cartItems
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; // Increment quantity if item already exists
      } else {
        cartData[itemId][size] = 1; // Initialize quantity if size doesn't exist
      }
    } else {
      cartData[itemId] = {}; // Initialize itemId if it doesn't exist
      cartData[itemId][size] = 1; // Initialize quantity for the size
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalcount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalcount += cartItems[items][item]; // Add the quantity of each item to the total count
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalcount;
  };
  //useEffect to fetch product data when the component mounts
  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

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
    cartItems, // Current items in the user's cart
    addToCart, // Function to add items to the cart
    getCartCount, // Function to get the total count of items in the cart
  };

  // Render the Provider component with our value object
  // Any component wrapped by this provider can access the value object using useContext
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

// Export the provider component as default for easy imports
export default ShopContextProvider;
