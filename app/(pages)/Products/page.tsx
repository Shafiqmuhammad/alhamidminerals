'use client'
import { motion } from "framer-motion";
import ProductsTabs from "../../components/Products/ProductsTabs";


const ProductCard = () => {

    return (
        <main className="mx-auto ">
            <div className="px-4 lg:px-6 py-2 mt-0">


                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        show: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="show"
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="mx-auto max-w-7xl pt-10 sm:pt-6 pb-6"
                >

                    <ProductsTabs />

                </motion.div>


            </div>
        </main>
    )
}

export default ProductCard;
