"use client"
import Image from "next/image";
import Link from "next/link";
import { packages } from "../../data/packages";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, buttonVariant } from "../motion";
import Head from "next/head";

export default function Packages() {
    return (
        <>
            <Head>
                <title>Al Hamid Minerals: High-Demand Mineral Packages</title>
                <meta name="description" content="Explore our high-demand mineral packages including Nephrite Jade, Quartz, Chromite, and more. High quality and best prices guaranteed." />
                <meta name="keywords" content="Al-Hamid-Minerals, Nephrite, Quartz, Chromite, Granite, Marble, Garnet, mineral packages, high-demand minerals" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.alhamidminerals.com/packages" />
            </Head>
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="py-[40px] relative z-10"
                id="packages"
            >
                <div className="max-w-[800px] mx-auto pt-[20px] pb-[30px]">
                    <motion.h1
                        variants={buttonVariant(0.6)}
                        className="text-center py-4 text-[#40E0D0] text-2xl sm:text-4xl font-bold mb-4 overflow-hidden"
                    >
                        Our High-Demand Minerals
                    </motion.h1>
                </div>
                <div className="flex justify-center items-center flex-wrap">
                    {packages.map((item, index) => (
                        <motion.div
                            key={item.id}
                            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                            className="mx-4 border-2 p-4 rounded-2xl mb-6 border-white w-[280px] lg:mx-6"
                        >
                            <Image
                                width={270}
                                height={280}
                                className="h-[270px] w-[280px] object-fill"
                                src={item.url}
                                alt={item.alt}
                                loading="lazy"
                            />
                            <h1 className="text-2xl font-bold text-[#40E0D0] my-2 md:my-4">{item.heading}</h1>
                            <p className="text-white mb-6">{item.desc}</p>
                            <div className="flex justify-between items-center">
                                <h1 className="text-white font-bold text-2xl">{item.prices}</h1>
                                <Link href="#Contact">
                                    <button className="text-white bg-[#40E0D0] py-2 px-3 text-sm font-bold rounded-[60px] hover:opacity-70 hover:duration-700">BOOK NOW</button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <Image
                    width={500}
                    height={500}
                    className="z-[-1] w-[100%] h-[100%] absolute inset-0"
                    src="/assets/packages/chromite-al-hamid-minerals.jpeg"
                    alt="banner chromite Al Hamid Minerals"
                    loading="lazy"
                />
                <div className="z-[-1] w-[100%] h-[100%] absolute inset-0 bg-black/70" />
            </motion.div>
        </>
    );
}




