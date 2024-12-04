'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const Title = () => {
    return (
        <>
            <Head>
                <title>Al Hamid Minerals - Shaping the Future</title>
                <meta name="description" content="Leading Responsible Mining of Nephrite, Chromite, Granite, Marble, Quartz & Gemstones. Crafting a Sustainable Future with Quality Sourced from Pakistan's Rich Geological Heritage." />
                <meta name="keywords" content="Al-Hamid-Minerals, mining, Nephrite, Chromite, Granite, Marble, Quartz, Gemstones" />
            </Head>
            <div className="mx-auto max-w-7xl pt-6 sm:pt-6 pb-2">
                <motion.div className="text-center">
                    <motion.h1
                        className="text-2xl font-semibold text-navyblue sm:text-3xl lg:text-5xl"
                        initial={{ opacity: 0, y: 75 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        Shaping the future with Al Hamid Minerals
                    </motion.h1>
                    <p className="mt-2 text-lg leading-8 text-bluegray">
                        Leading Responsible Mining of Nephrite, Chromite, Granite, Marble, Quartz & Gemstones <br /> Crafting a Sustainable Future with Quality Sourced from PakistanRich Geological Heritage.
                    </p>
                </motion.div>

                <div className="text-center mt-5 mb-4">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                        type="button"
                        className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton"
                    >
                        <Link href="/pages/Products">See our products</Link>
                    </motion.button>
                    <button
                        type="button"
                        className="text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton"
                    >
                        More info
                    </button>
                </div>
            </div>
        </>
    );
};

export default Title;
