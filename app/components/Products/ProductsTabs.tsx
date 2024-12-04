
'use client';

import React, { useState } from "react";
import products from "@/app/data/products";
import Product from "./Product";
import { Transition } from "@headlessui/react";

interface ProductType {
  [key: string]: Product[];
}

const ProductsTabs: React.FC = () => {
  const [selectedType, setSelectedType] = useState("all");

  const productTypes = products.reduce<ProductType>((acc, product) => {
    acc[product.type] = (acc[product.type] || []).concat(product);
    return acc;
  }, {});

  const filteredProducts = selectedType === "all" ? products : productTypes[selectedType];

  const handleClick = (type: string) => {
    setSelectedType(type);
  };

  return (
    <div className="flex flex-col space-y-2 p-6">
      <p className="text-2xl lg:text-2xl text-center py-2  bg-black/70 text-[#40E0D0] font-bold">
        Minerals
      </p>




      <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 border-b border-gray-200">
        <li
          className={`py-2 px-3 md:px-4 cursor-pointer transition-colors duration-300 ${selectedType === "all" ? "text-blue-500 font-semibold border-b-2 border-blue-500" : "text-gray-600 hover:text-gray-800"
            }`}
          onClick={() => handleClick("all")}
        >
          Products
        </li>
        {Object.keys(productTypes).map((type) => (
          <li
            key={type}
            className={`py-2 px-3 md:px-4 cursor-pointer transition-colors duration-300 ${selectedType === type ? "text-blue-500 font-semibold border-b-2 border-blue-500" : "text-gray-600 hover:text-gray-800"
              }`}
            onClick={() => handleClick(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </li>
        ))}
      </ul>


      <Transition
        show={true}
        appear={true}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Product key={product.productId} product={product} />
          ))}
        </div>
      </Transition>
    </div>
  );
};

export default ProductsTabs;
