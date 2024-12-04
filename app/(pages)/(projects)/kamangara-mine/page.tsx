'use client'
import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";


function Kamangara() {
    return (
        <>
            <Head>
                <title>Kamangara Mine | Al Hamid Minerals</title>
                <meta name="description" content="Discover the high-quality Nephrite from Kamangara Mine in Bajaur Agency. High quality Nephrite Jade" />
                <meta name="keywords" content="Kamangara Mine, Nephrite, Al-Hamid Minerals, Bajaur Agency, sustainable mining" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.alhamidminerals.com/kamangara-mine" />
            </Head>


            <section id="home"
                className="relative z-10 overflow-hidden pt-8 pb-8 md:pt-8 md:pb-8 xl:pt-10 xl:pb-10"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="mb-8 text-2xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl md:text-4xl">
                            Kamangara <span className="text-[#fda313]">Mine</span> Project
                        </h1>
                        <h3 className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-[#5d6eb4] dark:opacity-90 sm:text-lg md:text-xl">
                            Kamangara mining project is dedicated to the extraction of high-quality Nephrite. Landscape of Kamangara in Bajaur Agency, Pakistan holds within its depths the geological treasure trove that we meticulously explore to source this exquisite gemstone.

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
                                src="/assets/blog/nephrite_jade.png"
                                alt="Nephrite extraction at Kamangara Mine"
                                className="rounded-lg shadow-lg w-full max-w-lg"
                            />
                        </motion.div>

                    </div>
                </div>
            </section>




            <section className="bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="text-2xl font-bold mb-2">Operations at Kamangara Mine</h2>
                        <h3 className="text-xl  mb-2">
                            Our mining operations in Kamangara are a testament to our commitment to responsible and precise extraction practices.

                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="p-4 text-center mx-auto rounded-lg shadow-md"
                            >
                                <h3 className="text-xl font-bold mb-2">Mining Operations </h3>
                                <Image width={500} height={300} src="/assets/blog/BlogContent/Kamangara_Mine_Project.jpg" alt="Nephrite Mining Operations" className="rounded-lg mb-4 w-full h-auto" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="p-4 text-center mx-auto rounded-lg shadow-md"
                            >
                                <h3 className="text-xl font-bold mb-2">Extraction at Kamangara</h3>
                                <Image width={500} height={300} src="/assets/blog/BlogContent/Al-Hamid-Mineral.jpg" alt="Nephrite Mining Company - Al Hamid Minerals" className="rounded-lg mb-4 w-full h-auto" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="p-4 text-center mx-auto rounded-lg shadow-md"
                            >
                                <h3 className="text-xl font-bold mb-2">Responsibly Mining</h3>
                                <Image width={500} height={300} src="/assets/blog/BlogContent/Danishkol_Alhamidminerals.jpg" alt="Responsible Nephrite Mining" className="rounded-lg mb-4 w-full h-auto" />
                            </motion.div>
                        </div>



                        <h2 className="text-2xl font-bold  mt-6 mb-2">
                            Sustainable <span className="text-[#fda313]">Methodologies</span> </h2>

                        <h3 className="text-xl  mt-6">
                            We navigate this terrain with utmost respect for its natural beauty and ecological balance, employing sustainable methodologies that ensure minimal impact while procuring the finest grade of Nephrite.
                        </h3>



                        <h2 className="text-2xl font-bold  mt-6 mb-2">
                            Exceptional <span className="text-[#fda313]">  Characteristics</span> of Kamangara </h2>

                        <h3 className="text-xl  mt-6">
                            The Nephrite unearthed from Kamangara possesses exceptional characteristics, renowned for its captivating luster, remarkable color variations, and inherent durability. This gemstone, forged within the geological splendor of the region, holds an enduring allure sought after by artisans, jewelers, and creative worldwide
                        </h3>





                        <h2 className="text-2xl font-bold  mt-6 mb-2">
                            Mining <span className="text-[#fda313]">  Techniques</span> </h2>

                        <h3 className="text-xl  mt-6">
                            Our team, equipped with expertise in geological analysis and mining techniques, meticulously selects and extracts Nephrite from Kamangara, ensuring that each piece bears the hallmarks of excellence. Kamangara, within the Bajaur Agency, stands as a testament to artistry of nature, and our mining endeavors in this region symbolize a harmonious blend of responsible extraction, exceptional craftsmanship, and the timeless allure of high-quality Nephrite.
                        </h3>




                    </motion.div>
                </div>
            </section>





        </>
    )
}

export default Kamangara