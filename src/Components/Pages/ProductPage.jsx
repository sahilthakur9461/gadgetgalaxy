// src/components/ProductPage.js

import React from "react";
import video from "../img/productad.mp4";
import laptop from "../img/laptopproduct.jpg"
import speaker from "../img/speakerproduct.jpg"

const ProductPage = () => {
  return (
    <div className=" bg-gray-100">
      {/* <main className="container mx-auto px-6 py-8"> */}
        <div className="bg-white p-4 rounded-md shadow-md  h-[489px] relative z-0 w-full">
          <video
            src={video}
            className="w-full h-[460px] object-cover rounded-md"
            controls
            object-fill
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6 container">
          <div className="bg-white  rounded-md shadow-md hover:scale-110 duration-300">
            <img src={laptop} alt="" />
          </div>
          <div className="bg-white rounded-md shadow-md hover:scale-110 duration-300">
          <img src={laptop} alt="" />
          </div>
          <div className="bg-white  rounded-md shadow-md hover:scale-110 duration-300">
          <img src={laptop} alt="" /> 
          </div>
          <div className="bg-white  rounded-md shadow-md hover:scale-110 duration-300">
          <img src={laptop} alt="" className="object-fill" />
          </div>
          <div className="bg-white  rounded-md shadow-md hover:scale-110 duration-300">
          <img src={speaker} alt="" />       
          </div>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Suggestions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-md shadow-md"></div>
            <div className="bg-white p-4 rounded-md shadow-md"></div>
            <div className="bg-white p-4 rounded-md shadow-md"></div>
            <div className="bg-white p-4 rounded-md shadow-md"></div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Best Gadget's</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-md shadow-md"></div>
            <div className="bg-white p-4 rounded-md shadow-md"></div>
            <div className="bg-white p-4 rounded-md shadow-md"></div>
            <div className="bg-white p-4 rounded-md shadow-md"></div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Top Trendy's</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-md shadow-md"></div>
            <div className="bg-white p-4 rounded-md shadow-md"></div>
            <div className="bg-white p-4 rounded-md shadow-md"></div>
            <div className="bg-white p-4 rounded-md shadow-md"></div>
          </div>
        </section>
      {/* </main> */}
    </div>
  );
};

export default ProductPage;
