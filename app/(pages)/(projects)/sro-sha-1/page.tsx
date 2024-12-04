'use client'

import { motion } from "framer-motion";
import Image from "next/image";

const SroSha = () => {

    return (
        <>
            <section
                id="home"
                className="relative z-10 overflow-hidden pt-[32px] pb-16 md:pt-[32px] md:pb-[32px] xl:pt-[32px] xl:pb-[60px] 2xl:pt-[20px] 2xl:pb-[200px]"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="max-w-[950px] mx-auto text-center"
                    >
                        <h1 className="mb-8 text-2xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
                            Sro Sha-1  <span className="text-[#fda313]"> Mine  </span>
                        </h1>
                        <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-[#5d6eb4] dark:opacity-90 sm:text-lg md:text-xl">
                            This is high grade Nephrite Mining project located in Amber, Mohmand Agency, KPK, Pakistan.
                            Dedication of this project is to extract finest quality of Nephrite from the depths of this mine.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <Image width={600} height={200}
                            src="/assets/blog/nephrite.png"
                            alt="Quran Translation"
                            className="rounded-lg shadow-lg w-full max-w-[600px]"
                        />
                    </motion.div>

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
                        <h2 className="text-2xl font-bold mb-2">Operations at Sro Sha</h2>
                        <h3 className="text-xl  mb-2">
                            Our mining operations at Sro Sha are conducted with precision and care, respecting the land and its resources. Each step, from exploration to extraction, is guided by a commitment to preserving the natural environment while obtaining this exquisite gemstone. The Nephrite unearthed here bears the hallmark of excellence—its lustrous surface and captivating hues making it a coveted gem globally.

                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="p-4 text-center mx-auto rounded-lg shadow-md"
                            >
                                <h3 className="text-xl font-bold mb-2">Mining Operations </h3>
                                <Image width={500} height={300} src="/assets/blog/BlogContent/SroSha_Alhamidminerals.jpg" alt="Nephrite Mining Operations" className="rounded-lg mb-4 w-full h-auto" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="p-4 text-center mx-auto rounded-lg shadow-md"
                            >
                                <h3 className="text-xl font-bold mb-2">Nephrite Lustrous Surface</h3>
                                <Image width={500} height={300} src="/assets/blog/BlogContent/Al-Hamid-Mineral-Nephrite_Jade-illuminating.jpg" alt="lustrous surface of nephrite" className="rounded-lg mb-4 w-full h-auto" />
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



                        <h2 className="text-2xl font-bold  mt-6 mb-2">Ambar Yield Nephrite of Exceptional Quality</h2>

                        <h3 className="text-xl  mt-6">
                            Our team is expert in identifying and responsibly mining this gemstone ensures that every piece carries the inherent beauty and durability that define Nephrite from Sro Sha Mine.

                        </h3>

                        <h3 className="text-xl  mt-6">
                            We take pride in being custodians of this remarkable source, delivering Nephrite that transcends time, each piece carrying the story of its origin within the breathtaking landscape of Ambar. The legacy of craftsmanship and quality inherent in every stone makes Sro Sha Mine a symbol of excellence in the world of Nephrite mining.

                        </h3>
                    </motion.div>
                </div>
            </section>



        </>
    );
};

export default SroSha;