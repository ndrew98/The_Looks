import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContextData";
import Title from "../components/Title";

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="py-4 border-t border-b border-gray-300 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid grid-cols-[4fr_2fr_0.5fr] items center gap-4"
            >
              <div className="flex items-start gap-6 ">
                <img
                  src={productData.image[0]}
                  alt="Product Image"
                  className="w-16 sm:w-20"
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p className="text-sm sm:text-lg">
                      {currency} {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border border-gray-400 bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                type="number"
                min={1}
                defaultValue={item.quantity}
                className="border border-gray-400 max-w-10 sm:max-w-10 px-1 sm:px-2 py-1 mt-0"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
