"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>Al Hamid Minerals: Minerals & Gemstone Traders</title>
                <meta name="description" content="Al Hamid Minerals deals with Nephrite, Granite, Chromite, Quartz & Gemstones." />
                <meta name="keywords" content="Al-Hamid-Minerals, mining, Nephrite, Quartz, Chromite, Granite, Marble, Garnet, Copper, minerals, gemstone" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.alhamidminerals.com/about" />
            </Head>
            <div className="w-full">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="py-[20px] pt-8 mx-auto w-[80%] relative z-10"
                    id="about"
                >
                    <div className="prose prose-lg max-w-none mx-auto">
                        <h1 className="text-center" id="company-overview">About Al-Hamid Minerals</h1>
                        <p className="text-justify">
                            <Link href="https://www.alhamidminerals.com">Al Hamid Minerals</Link> is a renowned mining company based in Khyber Pakhtunkhwa, Pakistan. Known for its commitment to excellence and responsible mining practices, the company specializes in extracting a wide range of valuable minerals, including Nephrite Jade, Quartz, Chromite, Granite, Marble, and Green Garnet. Established with a vision to lead the mining industry, Al Hamid Minerals has earned a reputation for delivering superior-grade minerals to clients worldwide.
                        </p>
                        <Image
                            src="/assets/blog/BlogContent/Al-Hamid-Mineral.jpg"
                            alt="Al Hamid Minerals Mining"
                            width={800}
                            height={400}
                            className="mx-auto"
                            loading="lazy"
                        />

                        <h2 id="mission-and-vision">Mission and Vision</h2>
                        <p className="text-justify">
                            Al Hamid Minerals aims to be a leader in the mining industry, delivering high-quality minerals while adhering to the highest standards of environmental sustainability and community welfare. The company envisions a future where responsible mining practices contribute to the well-being of communities and the preservation of natural resources.
                        </p>

                        <h2 id="work-process">Work Process</h2>
                        <p className="text-justify">
                            Our work process is guided by a commitment to excellence and environmental responsibility. We follow a meticulous process of exploration, extraction, and processing to ensure our minerals meet the highest quality standards. Our team of experts utilizes the latest technology and equipment to maximize efficiency and minimize environmental impact.
                        </p>

                        <h2 id="company-minerals">Company Minerals</h2>

                        <h3 id="nephrite-jade">Nephrite Jade</h3>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3">
                                <Image
                                    src="/assets/packages/gallery/nephrite-05-diamond-alhamid-minerals.png"
                                    alt="Nephrite Jade 1"
                                    width={270}
                                    height={280}
                                    className="mx-auto"
                                    loading="lazy"
                                />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3">
                                <Image
                                    src="/assets/packages/gallery/nephrite-02-diamond-alhamid-minerals.png"
                                    alt="Nephrite Jade 2"
                                    width={270}
                                    height={280}
                                    className="mx-auto"
                                    loading="lazy"
                                />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3">
                                <Image
                                    src="/assets/packages/gallery/nephrite-03-diamond-alhamid-minerals.png"
                                    alt="Nephrite Jade 3"
                                    width={270}
                                    height={280}
                                    className="mx-auto"
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>
                        <p className="text-justify">
                            Nephrite Jade is one of our flagship products, known for its durability and beauty. It is used in various applications, including jewelry, sculptures, and decorative objects.
                        </p>

                        <h3 id="quartz">Quartz</h3>
                        <p className="text-justify">
                            Quartz is a versatile mineral with a wide range of applications. Al Hamid Minerals specializes in the extraction of Smoky Quartz and Watery Quartz, which are in high demand for their quality and purity.
                        </p>

                        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3">
                                <Image
                                    src="/assets/packages/gallery/quartz-01-alhamid-minerals.png"
                                    alt="Smoky Quartz"
                                    width={270}
                                    height={280}
                                    className="mx-auto"
                                    loading="lazy"
                                />
                                <p className="text-center mt-0">Smoky Quartz</p>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3">
                                <Image
                                    src="/assets/packages/gallery/quartz-06-alhamid-minerals.png"
                                    alt="Watery Quartz"
                                    width={270}
                                    height={280}
                                    className="mx-auto"
                                    loading="lazy"
                                />
                                <p className="text-center mt-0 p-0">Watery Quartz</p>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3">
                                <Image
                                    src="/assets/packages/gallery/quartz-04-alhamid-minerals.png"
                                    alt="Milky Quartz"
                                    width={270}
                                    height={280}
                                    className="mx-auto"
                                    loading="lazy"
                                />
                                <p className="text-center mt-0 p-0">Milky Quartz</p>
                            </motion.div>
                        </div>

                        <h3 id="chromite">Chromite</h3>
                        <p className="text-justify">
                            Chromite is another important mineral extracted by Al Hamid Minerals. It is used in the production of stainless steel, alloys, and refractory materials. Our Chromite is sourced from mines in the Mohmand Agency, ensuring the highest quality and purity.
                        </p>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
                                <Image
                                    src="/assets/packages/gallery/chromite-04-diamond-alhamid-minerals.png"
                                    alt="Chromite Mineral"
                                    width={270}
                                    height={280}
                                    className="mx-auto"
                                    loading="lazy"
                                />
                                <p className="text-center mt-0 p-0">Chromite Mineral</p>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
                                <Image
                                    src="/assets/packages/gallery/chromite-03-diamond-alhamid-minerals.png"
                                    alt="Chromite Mineral"
                                    width={270}
                                    height={280}
                                    className="mx-auto"
                                    loading="lazy"
                                />
                                <p className="text-center mt-0 p-0">25% Chromium Chromite</p>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
                                <Image
                                    src="/assets/packages/gallery/chromite-02-diamond-alhamid-minerals.png"
                                    alt="Chromite Mineral"
                                    width={270}
                                    height={280}
                                    className="mx-auto"
                                    loading="lazy"
                                />
                                <p className="text-center mt-0 p-0">40% Chromium Chromite</p>
                            </motion.div>
                        </div>

                        <h3 id="granite">Granite</h3>
                        <p className="text-justify">
                            Granite is a popular building material known for its strength, durability, and beauty. Sourced from our mines in the Mohmand Agency, our granite is extracted using responsible mining practices. It is used in various applications, including countertops, flooring, and monuments.
                        </p>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
                                <Image
                                    src="/assets/packages/gallery/granite-01-diamond-alhamid-minerals.png"
                                    alt="Granite Mineral"
                                    width={270}
                                    height={280}
                                    className="mx-auto"
                                    loading="lazy"
                                />
                                <p className="text-center mt-0 p-0">Granite Mineral</p>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
                                <Image
                                    src="/assets/packages/gallery/granite-02-diamond-alhamid-minerals.png"
                                    alt="Granite Mineral"
                                    width={270}
                                    height={280}
                                    className="mx-auto"
                                    loading="lazy"
                                />
                                <p className="text-center mt-0 p-0">Granite Chromite</p>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
                                <Image
                                    src="/assets/packages/gallery/granite-03-alhamid-minerals.png"
                                    alt="Granite Mineral"
                                    width={270}
                                    height={280}
                                    className="mx-auto"
                                    loading="lazy"
                                />
                                <p className="text-center mt-0 p-0">Granite Mineral</p>
                            </motion.div>
                        </div>

                        <h3 id="marble">Marble</h3>
                        <p className="text-justify">
                            Marble is a luxurious and elegant stone used in various applications, including flooring, countertops, and decorative objects. Our marble is sourced from mines in the Mohmand Agency and is known for its beauty, durability, and versatility.
                        </p>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
                                <Image
                                    src="/assets/packages/gallery/marble-02-alhamid-minerals.png"
                                    alt="Marble Mineral"
                                    width={270}
                                    height={280}
                                    className="mx-auto"
                                    loading="lazy"
                                />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
                                <Image
                                    src="/assets/packages/gallery/marble-03-alhamid-minerals.png"
                                    alt="Marble Mineral"
                                    width={270}
                                    height={280}
                                    className="mx-auto"
                                    loading="lazy"
                                />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
                                <Image
                                    src="/assets/packages/gallery/marble-04-alhamid-minerals.png"
                                    alt="Marble Mineral"
                                    width={270}
                                    height={280}
                                    className="mx-auto"
                                    loading="lazy"
                                />
                            </motion.div>
                        </div>

                        <h2 id="contact-us">Contact Us</h2>
                        <p>
                            Get in Touch If you have any questions, comments, or inquiries, please don’t hesitate to contact us. We’re here to help!
                        </p>
                        <ul>
                            <li><strong>Address:</strong> Al Hamid Minerals, Badhai Road, Near Motorway Tunnel, Al-Nimra Town, Street №1, Peshawar, Pakistan</li>
                            <li><strong>Phone:</strong> +92 330–455–5554</li>
                            <li><strong>Email:</strong> <Link href="mailto:info@alhamidminerals.com">info@alhamidminerals.com</Link></li>
                            <li><strong>Website:</strong> <Link href="https://www.alhamidminerals.com">www.alhamidminerals.com</Link></li>
                            <li><strong>LinkedIn:</strong> <Link href="https://linkedin.com/company/alhamidminerals">linkedin.com/company/alhamidminerals</Link></li>
                            <li><strong>Twitter:</strong> <Link href="https://twitter.com/alhamidmineral">@alhamidmineral</Link></li>
                            <li><strong>Facebook:</strong> <Link href="https://web.facebook.com/alhamidminerals">Al Hamid Minerals</Link></li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default About;






















// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { staggerContainer, fadeIn } from "../components/motion";
// import Head from "next/head";

// const About = () => {
//     return (
//         <>
//             <Head>
//                 <title>Al Hamid Minerals: Minerals & Gemstone Traders</title>
//                 <meta name="description" content="Al Hamid Minerals deals with Nephrite, Granite, Chromite, Quartz & Gemstones." />
//                 <meta name="keywords" content="Al-Hamid-Minerals, mining, Nephrite, Quartz, Chromite, Granite, Marble, Garnet, Copper, minerals, gemstone" />
//             </Head>
//             <div className="w-full  ">
//                 <motion.div
//                     initial="hidden"
//                     whileInView="show"
//                     viewport={{ once: false, amount: 0.25 }}
//                     className="py-[20px] pt-8 mx-auto w-[80%] relative z-10"
//                     id="about"
//                 >
//                     <div className="prose prose-lg max-w-none mx-auto">
//                         <h2 className="text-center" id="company-overview">About Al-Hamid Minerals</h2>
//                         <p className="text-justify">
//                             <Link href="https://www.alhamidminerals.com">Al Hamid Minerals</Link> is a renowned mining company based in Khyber Pakhtunkhwa, Pakistan. Known for its commitment to excellence and responsible mining practices, the company specializes in extracting a wide range of valuable minerals, including Nephrite Jade, Quartz, Chromite, Granite, Marble, and Green Garnet. Established with a vision to lead the mining industry, Al Hamid Minerals has earned a reputation for delivering superior-grade minerals to clients worldwide.
//                         </p>
//                         <Image
//                             src="/assets/blog/BlogContent/Al-Hamid-Mineral.jpg"
//                             alt="AlHamidMinerals_Mining"
//                             width={800}
//                             height={400}
//                             className="mx-auto"
//                         />

//                         <h2 id="mission-and-vision">Mission and Vision</h2>
//                         <p className="text-justify">
//                             Al Hamid Minerals aims to be a leader in the mining industry, delivering high-quality minerals while adhering to the highest standards of environmental sustainability and community welfare. The company envisions a future where responsible mining practices contribute to the well-being of communities and the preservation of natural resources.
//                         </p>

//                         <h2 id="work-process">Work Process</h2>
//                         <p className="text-justify">
//                             Our work process is guided by a commitment to excellence and environmental responsibility. We follow a meticulous process of exploration, extraction, and processing to ensure our minerals meet the highest quality standards. Our team of experts utilizes the latest technology and equipment to maximize efficiency and minimize environmental impact.
//                         </p>

                    



//                         <h2 id="company-minerals">Company Minerals</h2>

//                         <h3 id="nephrite-jade">Nephrite Jade</h3>
//                         <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
//                             <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3">
//                                 <Image
//                                     src="/assets/packages/gallery/nephrite-05-diamond-alhamid-minerals.png"
//                                     alt="Nephrite Jade 1"
//                                     width={270}
//                                     height={280}
//                                     className="mx-auto"
//                                 />
//                             </motion.div>
//                             <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3">
//                                 <Image
//                                     src="/assets/packages/gallery/nephrite-02-diamond-alhamid-minerals.png"
//                                     alt="Nephrite Jade 2"
//                                     width={270}
//                                     height={280}
//                                     className="mx-auto"
//                                 />
//                             </motion.div>
//                             <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3">
//                                 <Image
//                                     src="/assets/packages/gallery/nephrite-03-diamond-alhamid-minerals.png"
//                                     alt="Nephrite Jade 3"
//                                     width={270}
//                                     height={280}
//                                     className="mx-auto"
//                                 />
//                             </motion.div>
//                         </div>
//                         <p className="text-justify">
//                             Nephrite Jade is one of our flagship products, known for its durability and beauty. It is used in various applications, including jewelry, sculptures, and decorative objects.
//                         </p>










//                         <h3 id="quartz">Quartz</h3>
//                         <p className="text-justify">
//                             Quartz is a versatile mineral with a wide range of applications. Al Hamid Minerals specializes in the extraction of Smoky Quartz and Watery Quartz, which are in high demand for their quality and purity.
//                         </p>

//                         <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
//                             <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3">
//                                 <Image
//                                     src="/assets/packages/gallery/quartz-01-alhamid-minerals.png"
//                                     alt="Smoky Quartz"
//                                     width={270}
//                                     height={280}
//                                     className="mx-auto"
//                                 />
//                                 <p className="text-center mt-0">Smoky Quartz</p>
//                             </motion.div>
//                             <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3">
//                                 <Image
//                                     src="/assets/packages/gallery/quartz-06-alhamid-minerals.png"
//                                     alt="Watery Quartz"
//                                     width={270}
//                                     height={280}
//                                     className="mx-auto"
//                                 />
//                                 <p className="text-center mt-0 p-0">Watery Quartz</p>
//                             </motion.div>
//                             <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3">
//                                 <Image
//                                     src="/assets/packages/gallery/quartz-04-alhamid-minerals.png"
//                                     alt="Milky Quartz"
//                                     width={270}
//                                     height={280}
//                                     className="mx-auto"
//                                 />
//                                 <p className="text-center mt-0 p-0">Milky Quartz</p>
//                             </motion.div>
//                         </div>








//                         <h3 id="chromite">Chromite</h3>
//                         <p className="text-justify">
//                             Chromite is another important mineral extracted by Al Hamid Minerals. It is used in the production of stainless steel, alloys, and refractory materials. Our Chromite is sourced from mines in the Mohmand Agency, ensuring the highest quality and purity.
//                         </p>
//                         <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
//                             <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
//                                 <Image
//                                     src="/assets/packages/gallery/chromite-04-diamond-alhamid-minerals.png"
//                                     alt="Chromite Mineral"
//                                     width={270}
//                                     height={280}
//                                     className="mx-auto"
//                                 />
//                                 <p className="text-center mt-0 p-0">Chromite Mineral</p>
//                             </motion.div>



//                             <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
//                                 <Image
//                                     src="/assets/packages/gallery/chromite-03-diamond-alhamid-minerals.png"
//                                     alt="Chromite Mineral"
//                                     width={270}
//                                     height={280}
//                                     className="mx-auto"
//                                 />
//                                 <p className="text-center mt-0 p-0">25% Chromium Chromite</p>
//                             </motion.div>



//                             <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
//                                 <Image
//                                     src="/assets/packages/gallery/chromite-02-diamond-alhamid-minerals.png"
//                                     alt="Chromite Mineral"
//                                     width={270}
//                                     height={280}
//                                     className="mx-auto"
//                                 />
//                                 <p className="text-center mt-0 p-0">40% Chromium Chromite</p>
//                             </motion.div>

//                         </div>







//                         <h3 id="granite">Granite</h3>
//                         <p className="text-justify">
//                             Granite is a popular building material known for its strength, durability, and beauty. Sourced from our mines in the Mohmand Agency, our granite is extracted using responsible mining practices. It is used in various applications, including countertops, flooring, and monuments.
//                         </p>
//                         <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
//                             <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
//                                 <Image
//                                     src="/assets/packages/gallery/granite-01-diamond-alhamid-minerals.png"
//                                     alt="Granite Mineral"
//                                     width={270}
//                                     height={280}
//                                     className="mx-auto"
//                                 />
//                                 <p className="text-center mt-0 p-0">Granite Mineral</p>
//                             </motion.div>



//                             <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
//                                 <Image
//                                     src="/assets/packages/gallery/granite-02-diamond-alhamid-minerals.png"
//                                     alt="Granite Mineral"
//                                     width={270}
//                                     height={280}
//                                     className="mx-auto"
//                                 />
//                                 <p className="text-center mt-0 p-0">Granite Chromite</p>
//                             </motion.div>



//                             <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
//                                 <Image
//                                     src="/assets/packages/gallery/granite-03-alhamid-minerals.png"
//                                     alt="Granite Mineral"
//                                     width={270}
//                                     height={280}
//                                     className="mx-auto"
//                                 />
//                                 <p className="text-center mt-0 p-0">Granite Mineral</p>
//                             </motion.div>

//                         </div>






//                         <h3 id="Marble">Marble</h3>
//                         <p className="text-justify">
//                             Marble is a luxurious and elegant stone used in various applications, including flooring, countertops, and decorative objects. Our marble is sourced from mines in the Mohmand Agency and is known for its beauty, durability, and versatility.
//                         </p>
//                         <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
//                             <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
//                                 <Image
//                                     src="/assets/packages/gallery/marble-02-alhamid-minerals.png"
//                                     alt="Marble Mineral"
//                                     width={270}
//                                     height={280}
//                                     className="mx-auto"
//                                 />
//                             </motion.div>



//                             <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
//                                 <Image
//                                     src="/assets/packages/gallery/marble-03-alhamid-minerals.png"
//                                     alt="Marble Mineral"
//                                     width={270}
//                                     height={280}
//                                     className="mx-auto"
//                                 />

//                             </motion.div>



//                             <motion.div whileHover={{ scale: 1.1 }} className="w-full lg:w-1/3 mx-auto">
//                                 <Image
//                                     src="/assets/packages/gallery/marble-04-alhamid-minerals.png"
//                                     alt="Marble Mineral"
//                                     width={270}
//                                     height={280}
//                                     className="mx-auto"
//                                 />

//                             </motion.div>

//                         </div>







//                         <h2 id="contact-us">Contact Us</h2>
//                         <p>
//                             Get in Touch If you have any questions, comments, or inquiries, please don’t hesitate to contact us. We’re here to help!
//                         </p>
//                         <ul>
//                             <li><strong>Address:</strong> Al Hamid Minerals, Badhai Road, Near Motorway Tunnel, Al-Nimra Town, Street №1, Peshawar, Pakistan</li>
//                             <li><strong>Phone:</strong> +92 330–455–5554</li>
//                             <li><strong>Email:</strong> <Link href="mailto:info@alhamidminerals.com">info@alhamidminerals.com</Link></li>
//                             <li><strong>Website:</strong> <Link href="https://www.alhamidminerals.com">www.alhamidminerals.com</Link></li>
//                             <li><strong>LinkedIn:</strong> <Link href="https://linkedin.com/company/alhamidminerals">linkedin.com/company/alhamidminerals</Link></li>
//                             <li><strong>Twitter:</strong> <Link href="https://twitter.com/alhamidmineral">@alhamidmineral</Link></li>
//                             <li><strong>Facebook:</strong> <Link href="https://web.facebook.com/alhamidminerals">Al Hamid Minerals</Link></li>
//                         </ul>




//                     </div>
//                     {/* <div className="z-[-1] w-[100%] h-[100%] absolute inset-0 bg-darkblue/90" /> */}
//                 </motion.div>

//             </div>
//         </>
//     );
// };

// export default About;
