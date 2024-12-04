'use client'
import Image from "next/image";
import Contact from "../Contact/Contact";
import { motion } from "framer-motion";
import { buttonVariant, fadeIn } from "../motion";

const Newsletter: React.FC = () => {
    return (
        <div id="Contact" className="bg-gradient-to-r from-darkblue/70  via-darkblue/80 to-black">

            
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="w-full pt-10 pb-10 lg:pt-20 lg:pb-20"
            >
                <motion.h1
                    variants={buttonVariant(0.6)}
                    className="text-center py-4 text-[#40E0D0] text-2xl sm:text-4xl font-bold mb-4"
                >
                    Contact Us <span className="text-[#45f0df]">About Your Needs</span>
                </motion.h1>
                <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2">
                    <div className="my-4 mt-10 w-full grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-8">
                        <motion.div
                            variants={fadeIn('right', 'spring', 0 * 0.5, 0.75)}
                            className="col-span-2 md:col-span-2 lg:col-span-8 lg:w-[90%] mx-auto text-sm font-bold"
                        >
                            <div className="flex gap-2 mt-12 ml-2 py-2">
                                <Image src="/assets/footer/pakistan-flag-icon.svg" alt="pakistan-flag-icon" width={24} height={24} />
                                <h2 className="text-md font-bold text-[#45f0df]">PAKISTAN</h2>
                            </div>

                            <div className="flex gap-2 ml-2 w-full">
                                <h2 className="text-sm font-bold lg:w-[30%] text-[#aaf5ee]">Peshawar</h2>
                                <h5 className="text-base font-normal text-offwhite">Badhai Road, Near Motorway Tunnel, Al-Nimra Town, Street No. 1, Peshawar, Pakistan.</h5>
                            </div>

                            <div className="flex gap-2 ml-2 mt-6 w-full">
                                <h2 className="text-sm font-bold lg:w-[20%] text-[#aaf5ee]">Islamabad</h2>
                                <h5 className="text-base font-normal text-offwhite">Sector G-15, Kashmir Highway, Islamabad, Pakistan.</h5>
                            </div>

                            <div className="flex gap-2 ml-2 mt-6 w-full">
                                <h2 className="text-sm font-bold lg:w-[25%] text-[#aaf5ee]">Mardan</h2>
                                <h5 className="text-base font-normal text-offwhite">Plot # A-47, Waqia Marble Industry, Industrial Estate, Mardan, Pakistan.</h5>
                            </div>

                            <div className="flex gap-2 py-4 lg:ml-10 sm:ml-2 mb-8">
                                <Image src="/assets/footer/telephone.svg" className="lg:mr-4" alt="telephone-icon" width={24} height={24} />
                                <h5 className="text-2xl font-semibold text-offwhite">+92 330-455-5554</h5>
                            </div>
                        </motion.div>
                    </div>

                    <div className="p-10 flex flex-col justify-center">
                        <Contact />
                    </div>
                </div>
            </motion.div>
        </div>



    );
}

export default Newsletter;

