import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Collection from "./pages/Collection";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* ToastContainer for notifications */}
      <ToastContainer />
      {/* Navbar component to show on all pages */}
      <Navbar />
      {/* Searchbar component to show on all pages */}
      <SearchBar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Footer component to show on all pages */}
      <Footer />
    </div>
  );
};

export default App;
