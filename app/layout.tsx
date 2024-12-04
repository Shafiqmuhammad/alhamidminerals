'use client'
import './globals.css';
import Navbar from './components/Navbar/index';
import FooterNew from './components/FooterNew';
import TawkChat from "./components/Common/TawkChat";
import { FloatingWhatsApp } from "react-floating-whatsapp";


// export const metadata = {
//   title: 'Al Hamid Minerals: Mining Company | Nephrite, Granite, Chromite, Quartz & Gemstones',
//   description: 'Welcome to Al Hamid Minerals, the mining company based in Mohmand Agency, Khyber Pakhtunkhwa, Pakistan. Specialize in the extraction of high-quality nephrite, granite, chromite, quartz, marble, copper and green garnet.',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
   return (
    <html lang="en">
      <body id="home">
         {/* <Navigation /> */}
         <Navbar />
         {children}

         <FooterNew />

         {/* live chat component */}
         <TawkChat />

         <FloatingWhatsApp accountName="Al-Hamid-Minerals" phoneNumber="+923335155343" chatboxClassName="!text-black" />
      </body>
    </html>
  )
}
