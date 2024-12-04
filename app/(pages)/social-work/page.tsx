"use client"
import Image from "next/image";
import Link from "next/link";
import { socialwork } from "../../data/socialwork";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, buttonVariant } from "../../components/motion";
import Head from "next/head";

export default function SocialWork() {
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
                className="py-[10px] relative z-10"
                id="socialwork"
            >
                <div className="max-w-[800px] mx-auto pt-[2px] pb-[30px]">
                    <motion.h1
                        variants={buttonVariant(0.6)}
                        className="text-center py-4 text-[#fda313] text-2xl sm:text-4xl font-bold mb-4 overflow-hidden"
                    >
                        Social Initiatives by <span className="text-white"> Al-Hamid Minerals </span>
                    </motion.h1>
                </div>
                <div className="flex justify-center items-center flex-wrap">
                    {socialwork.map((item, index) => (
                        <motion.div
                            key={item.id}
                            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                            className="mx-4 border-2 p-4 rounded-2xl mb-6 border-white w-[350px] lg:mx-6"
                        >
                            <Image
                                width={270}
                                height={280}
                                className="h-[270px] w-[340px] object-fill"
                                src={item.url}
                                alt={item.alt}
                                loading="lazy"
                            />
                            <h1 className="text-2xl font-bold text-[#40E0D0] my-2 md:my-4">{item.heading}</h1>
                            <p className="text-white mb-6">{item.desc}</p>
                            {/* <div className="flex justify-between items-center">
                                <h1 className="text-white font-bold text-2xl">hhhh</h1>
                                <Link href="#Contact">
                                    <button className="text-white bg-[#40E0D0] py-2 px-3 text-sm font-bold rounded-[60px] hover:opacity-70 hover:duration-700">BOOK NOW</button>
                                </Link>
                            </div> */}
                        </motion.div>
                    ))}
                </div>
                <Image
                    width={500}
                    height={500}
                    className="z-[-1] w-[100%] h-[100%] absolute inset-0"
                    src="/assets/social/photovoltaics-solar-panels.jpg"
                    alt="Social Works of Al Hamid Minerals"
                    loading="lazy"
                />
                <div className="z-[-1] w-[100%] h-[100%] absolute inset-0 bg-black/70" />
            </motion.div>



            {/* 
            <section id="home"
                className="relative z-10 overflow-hidden pt-8 pb-8 md:pt-8 md:pb-8 xl:pt-10 xl:pb-10"
            >
                <div className="container  mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                        className="mx-auto text-center  relative z-10"
                        id="social"
                    >

                    </motion.div>
                </div>
            </section> */}






            <section className="py-2">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"


                    >
                        <h2 className="text-3xl font-bold mb-2">
                            Solar System at Ghalani Prison,<span className="text-[#fda313]">  Mohmand Agency</span></h2>
                        <h3 className="text-xl  mb-2">
                            Our commitment to sustainable energy and human welfare is demonstrated by the initiative to establish a solar power system at Ghalani Prison.

                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="p-4 text-center mx-auto rounded-lg shadow-md"
                            >
                                <h3 className="text-xl font-bold mb-2">Empowering Ghalani Prison </h3>
                                <Image width={500} height={300} src="/assets/social/solar-energy-plates.jpg" alt="Solar Energy - Mohmand Agency" className="rounded-lg mb-4 w-full h-auto" />
                                <h4 className="text-lg lg:text-left md:text-left  mb-2">Our commitment to sustainable energy is exemplified by installing a solar power system at Ghalani Prison in the scenic Mohmand Agency. This initiative aims to provide the prison with a reliable and eco-friendly source of electricity, harnessing the limitless potential of solar energy </h4>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="p-4 text-center mx-auto rounded-lg shadow-md"
                            >
                                <h3 className="text-xl font-bold mb-2">Improving Living Conditions</h3>
                                <Image width={500} height={300} src="/assets/social/solar-energy.jpg" alt="Improving Solar Energy" className="rounded-lg mb-4 w-full h-auto" />
                                <h4 className="text-lg lg:text-left md:text-left  mb-2">The solar panels at Ghalani Prison significantly enhance living conditions for both staff and inmates. A consistent electricity supply strengthens safety protocols, supports critical infrastructure, and fosters a positive environment for rehabilitation efforts, promoting a culture of well-being and sustainability. </h4>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="p-4 text-center mx-auto rounded-lg shadow-md"
                            >
                                <h3 className="text-xl font-bold mb-2">Advancing Renewable Energy</h3>
                                <Image width={500} height={300} src="/assets/social/solar-panel.jpg" alt="Solar project at Ghalani Prison" className="rounded-lg mb-4 w-full h-auto" />
                                <h4 className="text-lg lg:text-left md:text-left   mb-2">Our solar project at Ghalani Prison serves as a model for renewable energy adoption in the Mohmand Agency. It showcases the viability and benefits of solar power, promoting sustainable solutions and encouraging broader community adoption. This initiative drives positive change by highlighting how renewable energy can benefit the community.</h4>
                            </motion.div>
                        </div>




                    </motion.div>
                </div>
            </section>





        </>
    );
}




