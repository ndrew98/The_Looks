import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col  sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="Logo" className="w-32 mb-5" />
          <p className="w-full md:w-2/3 text-gray-600">
            Andrew.Co is a trade name of The Looks.Without permission, you may
            not use, reproduce, or distribute the content.And ofcourse , we are
            the very best in the business.
          </p>
        </div>

        <div>
          <p className="font-medium text-xl mb-5">The Looks Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-xl mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+233549927423</li>
            <li>laryeaandrew0001@gmail.com</li>
            <li>https://github.com/ndrew98</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="w-full" />
        <p className="py-5 text-sm text-center">
          Copyright © 2025 The Looks. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
