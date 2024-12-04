import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactFooter from "../Contact/ContactFooter";
const socialMediaIcons = [
    { href: 'https://www.facebook.com/alhamidminerals', src: '/assets/icons/facebook.png', alt: 'Facebook-Alhamid-Minerals' },
    { href: 'https://twitter.com/alhamidmineral', src: '/assets/icons/twitter.png', alt: 'Twitter-Alhamid-Minerals' },
    { href: 'https://www.instagram.com/alhamidmineralss', src: '/assets/icons/youtube.png', alt: 'YouTube-Alhamid-Minerals' },
    { href: 'https://www.instagram.com/alhamidmineralss', src: '/assets/icons/insta.png', alt: 'IInstagram-Alhamid-Minerals' },
    { href: 'https://www.linkedin.com/company/102399973/admin/feed/posts/', src: '/assets/icons/linkedin.png', alt: 'LinkedIn-Alhamid-Minerals' },


];


const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-200 py-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="mb-2 text-center inline-block">
                            <Image
                                src="/assets/logo/Logo_Al-Hamid-Minerals.png"
                                alt="logo"
                                className=" text-center"
                                width={150}
                                height={50}
                            />
                        </Link>

                        <ul className="space-y-2">
                            <li className="text-gray-800">Email: info@alhamidminerals.com</li>
                            <li className="text-gray-800">Phone: +92 330 455 5554</li>
                        </ul>




                        <div className="flex justify-center space-x-4 mb-4">
                            {socialMediaIcons.map((icon) => (
                                <Link href={icon.href} key={icon.alt}>
                                    <Image src={icon.src} alt={icon.alt} width={30} height={30} className="hover:opacity-75 transition-opacity duration-300" />
                                </Link>
                            ))}
                        </div>



                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-blue-500 text-lg font-semibold">About us</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-700 hover:text-blue-500">About Us</Link>
                            </li>
                            <li>
                                <Link href="#Contact" className="text-gray-700 hover:text-blue-500">Contact us</Link>
                            </li>
                            <li>
                                <Link href="#Projects" className="text-gray-700 hover:text-blue-500">Projects</Link>
                            </li>
                            <li>
                                <Link href="../Products/" className="text-gray-700 hover:text-blue-500">Minerals</Link>
                            </li>
                            <li>
                                <Link href="../Blog/" className="text-gray-700 hover:text-blue-500">Blog</Link>
                            </li>
                            <li>
                                <Link href="/mine-projects" className="text-gray-700 hover:text-blue-500">Social Projects</Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-500">Privacy Policy</Link>
                            </li>

                        </ul>
                    </div>


                    <div className="flex flex-col  w-72  space-y-4 ">
                        <h2 className="text-blue-500 text-lg font-semibold">Get in Touch</h2>
                        <ContactFooter />
                    </div>

                </div>


            </div>
            <div className="w-full mt-4 justify-items-center bg-blue">
                <div className="">
                    <p className="bg-black/70 text-[#40E0D0] pt-4  pb-4 md:pt-10 md:pb-10 lg:pt-10 lg-pb-10 text-center align-middle relative z-10">
                        Al Hamid Minerals | Developed by <a href="/">Shahid Mahmood</a> | &copy; 2024
                    </p>
                </div>
            </div>



        </footer>
    );
};

export default Footer;
