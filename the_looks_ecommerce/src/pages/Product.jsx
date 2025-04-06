import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContextData";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  //getting the product id using the params hook
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState();
  const [Image, setImage] = useState("");
  const [size, setSize] = useState("");

  //functuon to get the product data based on the id
  const fetchProductData = async () => {
    //finding the product based on the id
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item); //set the product data to the state
        console.log(item);
        setImage(item.image[0]); //set the image to the state
        return null;
      }
    });
  };

  //useEffect to fetch the product data when the component mounts
  useEffect(() => {
    fetchProductData();
    console.log(productData);
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* //ProductData */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* //div for the product image */}
        <div className="flex flex-col-reverse flex-1 gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                alt="product_image"
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                key={index}
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%] ">
            <img
              onClick={() => setImage(productData.image[0])}
              src={Image}
              alt="product"
              className="w-full h-auto"
            />
          </div>
        </div>
        {/*------Product Info------  */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star_icon" className="w-3-5" />
            <img src={assets.star_icon} alt="star_icon" className="w-3-5" />
            <img src={assets.star_icon} alt="star_icon" className="w-3-5" />
            <img src={assets.star_icon} alt="star_icon" className="w-3-5" />
            <img
              src={assets.star_dull_icon}
              alt="star_icon"
              className="w-3-5"
            />
            <p className="pl-2">(206)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border-2 border-gray-300 bg-gray-100  px-4 py-2 ${
                    size === item ? "bg-orange-200" : ""
                  } hover:border-black transition-all duration-200`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white py-3 px-8 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p> Cash on Delivery available on this product</p>
            <p>
              Easy return and exchange policy within the first 7 days Period
            </p>
          </div>
        </div>
      </div>

      {/* ------------ Product Details  and Reviews ------------*/}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-400 px-5 py-3 text-sm">
            Description
          </b>
          <p className="border border-gray-400 px-5 py-3 text-sm">
            Reviews(123)
          </p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An ecommerce website is a website that sells products online. It is
            a platform where you can sell your products to customers online. It
            is a platform where you can sell your products to customers online.
          </p>
          <p>
            What it typically includes is a product catalog, shopping cart, and
            checkout process. It allows customers to browse and purchase
            products online, and it provides a secure payment gateway for
            processing transactions. Ecommerce websites can be built using
            various technologies, including HTML, CSS, JavaScript, and various
            programming languages such as PHP, Ruby, and Python.
          </p>
        </div>
      </div>

      {/* ------------ Related Product ------------ */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0">Product Not Found.</div>
  );
};

export default Product;
