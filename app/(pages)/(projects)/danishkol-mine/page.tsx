'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

const DanishkolMine = () => {
    return (
        <>
            <Head>
                <title>Danishkol Mine | Al Hamid Minerals</title>
                <meta name="description" content="Discover the high-quality Nephrite from Danishkol Mine in Mohmand Agency. Our sustainable mining practices ensure the preservation of natural beauty." />
                <meta name="keywords" content="Danishkol Mine, Nephrite, Al-Hamid Minerals, Mohmand Agency, sustainable mining" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.alhamidminerals.com/danishkol-mine" />
            </Head>

            <section
                id="home"
                className="relative z-10 overflow-hidden pt-8 pb-16 md:pt-16 md:pb-16 xl:pt-20 xl:pb-20"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="mb-8 text-2xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl md:text-4xl">
                            Danishkol <span className="text-[#fda313]">Mine</span> Project
                        </h1>
                        <h3 className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-[#5d6eb4] dark:opacity-90 sm:text-lg md:text-xl">
                            This is our esteemed project in Danishkol, Mohmand Agency, where we passionately extract high-quality Nephrite.
                            Our focus revolves around procuring Nephrite of unparalleled quality, leveraging the unique geological composition of the region.
                        </h3>
                    </motion.div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center"
                        >
                            <Image
                                width={600}
                                height={400}
                                src="/assets/blog/BlogContent/Al-Hamid-Mineral-Nephrite_Jade-green.jpg"
                                alt="Nephrite extraction at Danishkol Mine"
                                className="rounded-lg shadow-lg w-full max-w-lg"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="text-2xl font-bold mb-6">Operations at Danishkol</h2>
                        <p className="text-lg mb-8">
                            We pride ourselves on employing sustainable practices that preserve the natural beauty of the area while extracting this remarkable gemstone. Our expertise in identification and responsible extraction of this gemstone ensures that each creation embodies the distinct hallmark and unique allure that defines Nephrite from Danishkol.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="p-4 text-center mx-auto rounded-lg shadow-md"
                            >
                                <h3 className="text-xl font-bold mb-4">Mining Operations</h3>
                                <Image
                                    width={500}
                                    height={300}
                                    src="/assets/blog/BlogContent/AlHamidMinerals_Mining.jpg"
                                    alt="Nephrite Mining Operations"
                                    className="rounded-lg mb-4 w-full h-auto"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="p-4 text-center mx-auto rounded-lg shadow-md"
                            >
                                <h3 className="text-xl font-bold mb-4">Danishkol Mine Site</h3>
                                <Image
                                    width={500}
                                    height={300}
                                    src="/assets/packages/projects-al-hamid-minerals.jpeg"
                                    alt="Danishkol Mine Site"
                                    className="rounded-lg mb-4 w-full h-auto"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="p-4 text-center mx-auto rounded-lg shadow-md"
                            >
                                <h3 className="text-xl font-bold mb-4">Artistic Expressions</h3>
                                <Image
                                    width={500}
                                    height={300}
                                    src="/assets/blog/BlogContent/Al-Hamid-Mineral-Nephrite_gemstone.jpg"
                                    alt="Artistic Expressions"
                                    className="rounded-lg mb-4 w-full h-auto"
                                />
                            </motion.div>
                        </div>

                        <h2 className="text-2xl font-bold mt-12 mb-6">Nephrite of Danishkol Mine & Exceptional Durability</h2>
                        <p className="text-lg mb-8">
                            The high-grade Nephrite sourced from Danishkol is renowned for its luminous sheen, diverse color spectrum, and exceptional durability. The distinctive geological composition in Danishkol grants us access to Nephrite of extraordinary caliber, highly sought after for use in jewelry, sculptures, and artistic expressions worldwide.
                        </p>
                        <p className="text-lg">
                            Each stone bears the narrative of its origin, and our project in Danishkol stands as an emblem of unparalleled quality and craftsmanship in the realm of Nephrite mining.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default DanishkolMine;
