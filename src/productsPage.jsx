// ProductsPage.js
import React, { useState } from "react";
import ProductCard from "./productcards"; // Adjust the path if necessary

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const products = [
    {
      number: "01",
      title: "Wireless Noise-Canceling Headphones",
      description:
        "Experience superior sound quality and peace with our wireless noise-canceling headphones.",
    },
    {
      number: "02",
      title: "Smart Fitness Tracker",
      description:
        "Track your fitness goals and monitor your health with our advanced smart fitness tracker.",
    },
    {
      number: "03",
      title: "4K Ultra HD Smart TV",
      description:
        "Enjoy your favorite shows and movies in stunning 4K resolution with our ultra HD smart TV.",
    },
    {
      number: "04",
      title: "Portable Bluetooth Speaker",
      description:
        "Take your music anywhere with our lightweight and powerful portable Bluetooth speaker.",
    },
    {
      number: "05",
      title: "Gaming Laptop with High Refresh Rate",
      description:
        "Dominate the competition with our gaming laptop, featuring high refresh rate and advanced graphics.",
    },
    {
      number: "06",
      title: "Robot Vacuum Cleaner",
      description:
        "Keep your home clean effortlessly with our state-of-the-art robot vacuum cleaner.",
    },
    // Add more products as needed
  ];
  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter ideas based on search term
  const filteredIdeas = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="flex w-full justify-between px-32">
        <h1 className="text-center text-blue-700 text-4xl font-bold mb-8">
          Products
        </h1>
        <div className="flex h-8">
          <input
            type="text"
            className="px-2 py-2 bg-[#f0f0f0] w-48 rounded-[5px] w-full border border-white focus:outline-none focus:ring-[#0041E8] focus:border-[#0041E8]"
            placeholder="search"
            value={searchTerm}
            onChange={handleSearchChange}
            required
          />
          <button className="ml-2 bg-blue-700 px-2 py-1 text-white rounded-sm">
            search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {filteredIdeas.map((idea, index) => (
          <ProductCard
            key={index}
            number={idea.number}
            title={idea.title}
            description={idea.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
