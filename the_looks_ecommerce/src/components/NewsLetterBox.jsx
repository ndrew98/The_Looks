import React from "react";

const NewsLetterBox = () => {
  //Handle  form Submit
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent reload
  };
  return (
    <div className="text-center ">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe to our newsletter. 20% off your first order
      </p>
      <p className="text-gray-400 mt-3">
        Enter your email address to get updates on new arrivals, special offers
        and other discount news.
      </p>
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-full sm:w-1/2 flex items-center  gap-3 mx-auto my-6 border pl-3  rounded"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
