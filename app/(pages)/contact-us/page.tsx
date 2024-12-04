"use client";
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { buttonVariant, fadeIn } from '@/app/components/motion';
import Image from 'next/image';

const AddContactData = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        message: '',
    });

    const router = useRouter();
    const path = usePathname();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contactapi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Contact info added successfully');
                setFormData({ name: '', email: '', contact: '', message: '' });
                router.refresh();
                router.replace(path);
            } else {
                console.error('Failed to add data');
            }
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    return (
        <>
            <Head>
                <title>Contact Us - Al Hamid Minerals</title>
                <meta name="description" content="Get in touch with Al Hamid Minerals for any inquiries or questions about our minerals and services." />
                <meta name="keywords" content="Al Hamid Minerals, contact, inquiries, minerals, services" />
                <html lang="en" />
            </Head>
            {/* 
            <div id="Contact" className="bg-gray-800">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="w-full pt-2 pb-2 lg:pt-4 lg:pb-10"
                >
                    <motion.h2
                        variants={buttonVariant(0.6)}
                        className="text-center text-[#031a18] text-2xl sm:text-4xl font-bold"
                    >
                        Contact Us <span className="text-[#fda313]">About Your Needs</span>
                    </motion.h2>
                </motion.div>
            </div>




            <form onSubmit={handleSubmit} className="max-w-lg mx-auto w-full p-4 bg-white shadow-md rounded">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="contact" className="block mb-2 text-gray-700">Contact No</label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white hover:bg-blue-700 font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Send
                </button>
            </form> */}



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
                        Contact Us <span className="text-[#fda313]">About Your Needs</span>
                    </motion.h1>
                </div>
                <div className="flex justify-center items-center flex-wrap">

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                        variants={buttonVariant(0.6)}
                        className="mx-4 border-2 p-4 rounded-2xl mb-6 border-white w-auto lg:mx-6"
                    >



                        <form onSubmit={handleSubmit} className="max-w-lg mx-auto w-full p-4 bg-white shadow-md rounded">
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="contact" className="block mb-2 text-gray-700">Contact No</label>
                                <input
                                    type="text"
                                    id="contact"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white hover:bg-blue-700 font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Send
                            </button>
                        </form>



                        <div className="max-w-lg mx-auto w-full p-4 bg-white shadow-md rounded">
                            <div className="my-4 mt-10 w-full ">
                                <motion.div
                                    variants={fadeIn('right', 'spring', 0 * 0.5, 0.75)}
                                    className="col-span-2 md:col-span-2 lg:col-span-8 lg:w-[90%] mx-auto text-sm font-bold"
                                >
                                    <div className="flex gap-2 mt-12 ml-2 py-2">
                                        <Image src="/assets/footer/pakistan-flag-icon.svg" alt="pakistan-flag-icon" width={24} height={24} />
                                        <h3 className="text-md font-bold ">PAKISTAN</h3>
                                    </div>

                                    <div className="flex gap-2 ml-2 w-full">
                                        <h4 className="text-sm font-bold lg:w-[30%]">Peshawar</h4>
                                        <p className="text-base font-normal text-gray-300">Badhai Road, Near Motorway Tunnel, Al-Nimra Town, Street No. 1, Peshawar, Pakistan.</p>
                                    </div>

                                    <div className="flex gap-2 ml-2 mt-6 w-full">
                                        <h4 className="text-sm font-bold lg:w-[20%] ">Islamabad</h4>
                                        <p className="text-base font-normal text-gray-300">Sector G-15, Kashmir Highway, Islamabad, Pakistan.</p>
                                    </div>

                                    <div className="flex gap-2 ml-2 mt-6 w-full">
                                        <h4 className="text-sm font-bold lg:w-[25%] ">Mardan</h4>
                                        <p className="text-base font-normal text-gray-300">Plot # A-47, Waqia Marble Industry, Industrial Estate, Mardan, Pakistan.</p>
                                    </div>

                                    <div className="flex gap-2 py-4 lg:ml-10 sm:ml-2 mb-8">
                                        <Image src="/assets/footer/telephone.svg" className="lg:mr-4" alt="telephone-icon" width={24} height={24} />
                                        <h5 className="text-2xl font-semibold text-gray-300">+92 330-455-5554</h5>
                                    </div>
                                </motion.div>
                            </div>
                        </div>



                    </motion.div>

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
};

export default AddContactData;






















// "use client";
// import { usePathname, useRouter } from 'next/navigation';
// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import Head from 'next/head';

// const AddContactData = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         contact: '',
//         message: '',
//     });

//     const router = useRouter();
//     const path = usePathname();

//     const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e: FormEvent) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('/api/contactapi', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 console.log('Contact info added successfully');
//                 setFormData({ name: '', email: '', contact: '', message: '' });
//                 router.refresh();
//                 router.replace(path);
//             } else {
//                 console.error('Failed to add data');
//             }
//         } catch (error) {
//             console.error('Error adding data:', error);
//         }
//     };

//     return (
//         <>
//             <Head>
//                 <title>Contact Us - Al Hamid Minerals</title>
//                 <meta name="description" content="Get in touch with Al Hamid Minerals for any inquiries or questions about our minerals and services." />
//                 <meta name="keywords" content="Al-Hamid-Minerals, contact, inquiries, minerals, services" />
//             </Head>
//             <form onSubmit={handleSubmit} className="max-w-lg mx-auto w-full p-2">
//                 <div className="mb-4">
//                     <label htmlFor="name" className="block mb-2 text-white">Name</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="email" className="block mb-2 text-white">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="contact" className="block mb-2 text-white">Contact No</label>
//                     <input
//                         type="text"
//                         id="contact"
//                         name="contact"
//                         value={formData.contact}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="message" className="block mb-2 text-white">Message</label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         rows={4}
//                         className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
//                         required
//                     ></textarea>
//                 </div>
//                 <button type="submit" className="bg-transparent text-white hover:bg-blue-900 text-blue-700 font-semibold hover:text-lightgrey hover:border-black py-2 px-4 border border-white hover:border-transparent rounded">
//                     Send
//                 </button>
//             </form>
//         </>
//     );
// };

// export default AddContactData;



