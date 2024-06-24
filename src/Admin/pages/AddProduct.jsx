import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar';


const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send data to backend or perform validation
    console.log({
      productName,
      description,
      price,
      category,
      photo,
    });
    // Clear form fields if needed
    setProductName('');
    setDescription('');
    setPrice('');
    setCategory('');
    setPhoto(null);
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  return (
<div className="flex min-h-screen bg-white text-gray-700">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex-col ">
        <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          {/* Add any header elements here */}
        </div>
        
        <div className="p-4 flex-1">
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Add New Product</h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>
  <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
    Product Name
  </label>
  <input
    type="text"
    id="productName"
    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    style={{ minHeight: '3rem' }} // Adjust the height here as needed
    value={productName}
    onChange={(e) => setProductName(e.target.value)}
    required
  />
</div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={price}
            style={{ minHeight: '3rem' }}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={category}
            style={{ minHeight: '3rem' }}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
       
        <div>
  <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
    Photo
  </label>
  <div className="mt-1 flex items-center">
    <label
      htmlFor="upload-button"
      className="cursor-pointer bg-white rounded-md py-2 px-3 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
    >
      Upload Photo
    </label>
    <input
      id="upload-button"
      type="file"
      accept="image/*"
      onChange={handlePhotoChange}
      className="hidden"
      required
    />
    <span className="ml-2">{photo ? photo.name : 'No file chosen'}</span>
  </div>
</div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Add Product
        </button>
      </form>
    </div>
        </div>
      </div>
    </div>



   
  );
};

export default AddProduct;
