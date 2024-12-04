'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { staggerContainer, fadeIn, buttonVariant } from "../../../components/motion";
import Link from "next/link";

export default function Offer() {
    return (
        <>
            <Head>
                <title>Our Running Projects - Al Hamid Minerals</title>
                <meta name="description" content="Explore our ongoing projects in the mining of Nephrite, Chromite, Granite, Marble, Quartz & Gemstones. Stay tuned for more details." />
                <meta name="keywords" content="Al-Hamid-Minerals, mining projects, Nephrite, Chromite, Granite, Marble, Quartz, Gemstones" />
            </Head>
            <div id="Projects" className="w-full pt-0 lg:max-w-full px-4 sm:px-6 sm:py-0 lg:px-0">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="relative z-0 top-5 px-4 py-12 sm:py-5 md:py-10 lg:px-12"
                >
                    <motion.h1
                        variants={buttonVariant(0.6)}
                        className="font-bold text-4xl lg:text-6xl text-white mb-4 py-4 lg:mb-10"
                    >
                        Our Running <span className="text-[#45f0df]">Projects</span>
                    </motion.h1>
                    <div className="flex flex-wrap">
                        <motion.div
                            variants={fadeIn('right', 'spring', 0 * 0.5, 0.75)}
                            className="flex items-center text-sm font-bold sm:ml-14 mb-8"
                        >
                            <div className="pr-10">
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                                    <path d="m20.95 33.85 14.7-14.7-3.3-3.3-11.4 11.4-5.55-5.55-3.25 3.3ZM24 45.25q-4.4 0-8.275-1.65T8.95 39.05q-2.9-2.9-4.55-6.775Q2.75 28.4 2.75 24q0-4.45 1.65-8.325 1.65-3.875 4.55-6.75t6.775-4.55Q19.6 2.7 24 2.7q4.45 0 8.325 1.675 3.875 1.675 6.75 4.55t4.55 6.75Q45.3 19.55 45.3 24q0 4.4-1.675 8.275t-4.55 6.775q-2.875 2.9-6.75 4.55T24 45.25Z" fill="#45f0df" />
                                </svg>
                            </div>
                            <div className="text-white">
                                <h1 className="font-bold text-2xl py-3 lg:text-4xl mb-4 text-[#45f0df]">


                                    <Link href="../sro-sha-1/" className="text-gray-700 hover:text-blue-500">SRO SHA MINE 1</Link>
                                </h1>
                                <p className="bg-[#45f0df] rounded-md text-darkblue text-center px-4 py-2"><Link href="../sro-sha-1/" className=" hover:text-midblue">Project Details...</Link></p>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('right', 'spring', 1 * 0.5, 0.75)}
                            className="flex items-center text-sm font-bold sm:ml-14 mb-8"
                        >
                            <div className="pr-10">
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                                    <path d="m20.95 33.85 14.7-14.7-3.3-3.3-11.4 11.4-5.55-5.55-3.25 3.3ZM24 45.25q-4.4 0-8.275-1.65T8.95 39.05q-2.9-2.9-4.55-6.775Q2.75 28.4 2.75 24q0-4.45 1.65-8.325 1.65-3.875 4.55-6.75t6.775-4.55Q19.6 2.7 24 2.7q4.45 0 8.325 1.675 3.875 1.675 6.75 4.55t4.55 6.75Q45.3 19.55 45.3 24q0 4.4-1.675 8.275t-4.55 6.775q-2.875 2.9-6.75 4.55T24 45.25Z" fill="#45f0df" />
                                </svg>
                            </div>

                            <div className="text-white">
                                <h1 className="font-bold text-2xl py-3 lg:text-4xl mb-4 text-[#45f0df]">


                                    <Link href="../danishkol-mine/" className="text-gray-700 hover:text-blue-500">DANISHKOL MINE</Link>
                                </h1>
                                <p className="bg-[#45f0df] rounded-md text-darkblue text-center px-4 py-2"><Link href="../danishkol-mine/" className=" hover:text-midblue">Project Details...</Link></p>
                            </div>

                        </motion.div>
                        <motion.div
                            variants={fadeIn('right', 'spring', 2 * 0.5, 0.75)}
                            className="flex items-center text-sm font-bold sm:ml-14 mb-8"
                        >
                            <div className="pr-10">
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                                    <path d="m20.95 33.85 14.7-14.7-3.3-3.3-11.4 11.4-5.55-5.55-3.25 3.3ZM24 45.25q-4.4 0-8.275-1.65T8.95 39.05q-2.9-2.9-4.55-6.775Q2.75 28.4 2.75 24q0-4.45 1.65-8.325 1.65-3.875 4.55-6.75t6.775-4.55Q19.6 2.7 24 2.7q4.45 0 8.325 1.675 3.875 1.675 6.75 4.55t4.55 6.75Q45.3 19.55 45.3 24q0 4.4-1.675 8.275t-4.55 6.775q-2.875 2.9-6.75 4.55T24 45.25Z" fill="#45f0df" />
                                </svg>
                            </div>

                            <div className="text-white">
                                <h1 className="font-bold text-2xl py-3 lg:text-4xl mb-4 text-[#45f0df]">


                                    <Link href="../kamangara-mine/" className="text-gray-700 hover:text-blue-500">KAMANGARA MINE</Link>
                                </h1>
                                <p className="bg-[#45f0df] rounded-md text-darkblue text-center px-4 py-2"><Link href="../kamangara-mine/" className=" hover:text-midblue">Project Details...</Link></p>
                            </div>


                        </motion.div>
                    </div>
                    <Image
                        width={500}
                        height={500}
                        className="z-[-1] w-[100%] h-[100%] absolute inset-0"
                        src="/assets/packages/projects-al-hamid-minerals1.jpeg"
                        alt="projects-al-hamid-minerals"
                    />
                    <div className="z-[-1] w-[100%] h-[100%] absolute inset-0 bg-black/70" />
                </motion.div>
            </div>
        </>
    );
}
