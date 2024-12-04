// components/ProductTabs.tsx
 import React from 'react';
 import Image from "next/image";
import { Product } from "../../data/products";
import { motion } from 'framer-motion';
interface ProductProps {
  product :Product
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="p-4 shadow-md rounded-lg hover:shadow-lg-hover">
      <motion.img width={500} height={500} src={product.imageUrl} alt={product.name} className="w-full h-64 object-contain"
//       animate={{
//         scale:[1,1,1,1],
//         rotate:[0,10,10,0],
//         borderRadius:["10%","20%","20%","10%"],
//       }}
// transition={{duration:5, ease:'easeInOut', repeat:Infinity, repeatDelay:1}}

      >
      </motion.img> 
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-700">{product.description.slice(0, 100)}...</p>
      <a href={`/products/${product.productId}`} className="text-blue-500 hover:underline">
        View Details
      </a>
    </div>
  );
};

export default Product;