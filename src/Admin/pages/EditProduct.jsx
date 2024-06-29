import React, { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import axios from "axios";

function EditProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/product")
      .then((response) => setProduct(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex min-h-screen bg-neutral-800 text-gray-700">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex-col ">
          <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            {/* Add any header elements here */}
          </div>

          <div className="p-4 flex-1">
            {/* Your main content goes here */}
            <div className="flex flex-wrap -mx-2">
            {product.map((product, index) => (
              <article key={index} className="max-w-sm w-full bg-white rounded-lg shadow-lg m-2 overflow-hidden dark:bg-gray-700">
                <div>
                  <img
                    className="object-cover h-44 w-full"
                    src={product.img}
                    alt="Product"
                  />
                </div>

                <div className="flex flex-col gap-1 mt-4 px-4">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
                    {product.productName}
                  </h2>
                  <span className="font-normal text-gray-600 dark:text-gray-300">
                    {product.category}
                  </span>
                  <span className="font-semibold text-gray-800 dark:text-gray-50">
                  ₹{product.price}
                  </span>
                </div>
                <div className="mt-2 p-3 border-t border-gray-200 dark:border-gray-500">
                  <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
                    <span className="text-base">Edit</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
