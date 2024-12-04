// [productId].tsx
import React from "react";
import { useRouter } from "next/router";
import products from "@/app/data/products"; // Import your product data
import { AnimatePresence, motion } from "framer-motion"; // for animations

const ProductDetails: React.FC = () => {
  const router = useRouter();
  const { productId } = router.query as { productId: string };

  const selectedProduct = products.find((product) => product.productId === parseInt(productId));

  if (!selectedProduct) {
    return <div>Product not found!</div>;
  }

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{selectedProduct.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence exitBeforeEnter>
          <motion.img
            key={selectedProduct.imageUrl}
            src={selectedProduct.imageUrl}
            alt={selectedProduct.name}
            className="w-full h-auto object-cover rounded-lg"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5 }} // Adjust animation duration as needed
          />
        </AnimatePresence>
        <div>
          <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
          <ul className="list-disc space-y-2">
            {/* Display product specifications dynamically */}
            {/* Example: */}
            <li>Display: {/* Extract display details from product data */}</li>
            <li>Processor: {/* Extract processor details from product data */}</li>
            {/* ... more specifications */}
          </ul>
          <span className="text-lg font-semibold mt-4">Price: {/* Extract price from product data */}</span>
          {/* Add buttons for adding to cart or wishlist if applicable */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
