// pages/privacy-policy.tsx
import React from 'react';
import Head from 'next/head';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <Head>
                <title>Privacy Policy | Al Hamid Minerals</title>
                <meta name="description" content="Privacy Policy of Al Hamid Minerals, outlining how we collect, use, and protect your information." />
                <meta name="keywords" content="Al Hamid Minerals, Privacy Policy, Data Protection, Information Security" />
            </Head>
            <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
                <p className="mb-4">
                    At Al Hamid Minerals, we are committed to protecting your privacy. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to ensure your information is secure.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <p className="mb-4">
                    We collect information that you provide to us directly, such as when you fill out a contact form, subscribe to our newsletter, or make a purchase. This information may include your name, email address, phone number, and payment details.
                </p>
                <p className="mb-4">
                    We also collect information automatically as you navigate through our site. This may include usage details, IP addresses, and information collected through cookies and other tracking technologies.
                </p>
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="mb-4">
                    We use the information we collect to provide, maintain, and improve our services. This includes using your information to:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Process transactions and send you related information.</li>
                    <li>Respond to your comments, questions, and requests.</li>
                    <li>Send you technical notices, updates, security alerts, and support messages.</li>
                    <li>Analyze trends, usage, and activities to improve our services.</li>
                    <li>Personalize your experience and provide advertisements, content, or features that match your interests.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p className="mb-4">
                    We take reasonable measures to protect your information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, please be aware that no data transmission over the Internet or method of electronic storage is 100% secure.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <p className="mb-4">
                    You have the right to access, correct, update, or delete your personal information. You can do this by contacting us at the information provided below.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-none mb-4">
                    <li><strong>Address:</strong> Al Hamid Minerals, Badhai Road, Near Motorway Tunnel, Al-Nimra Town, Street №1, Peshawar, Pakistan</li>
                    <li><strong>Phone:</strong> +92 330–455–5554</li>
                    <li><strong>Email:</strong> info@alhamidminerals.com</li>
                </ul>
                <p className="text-center text-gray-600">Last updated: [Date]</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
