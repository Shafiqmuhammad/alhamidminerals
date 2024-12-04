'use client'
import { motion } from "framer-motion";
import Image from "next/image";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "Quality",
        subheading: "Our commitment to quality extends from extraction to delivery, ensuring that every product we offer surpasses expectations.",
    },
    
    {
        heading: "Reliability",
        subheading: "With years of experience and a proven track record, we have established as a trusted partner in the mining industry.",
    },
    {
        heading: "Cost Effectiveness",
        subheading: "Choosing Al Hamid Minerals means choosing cost-effective solutions without compromising on quality.",
    },

    {
        heading: "Communication",
        subheading: "Our clients rely on us for consistent quality, timely delivery, and transparent communication.",
    }
]


const Why = () => {
    return (
        <div id="about" className="className='mx-auto max-w-7xl pt-32  px-4  sm:px-6 sm:py-10 lg:px-8'">

            <div className='mx-auto max-w-7xl pt-32  px-4  sm:px-6 sm:py-10 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <motion.div
                         animate={{ x: [null, 100, 0] }}
                        
                     className="lg:-ml-64" >
                        <Image src="/assets/why/whyWe.png" alt="why-us-image" width={4000} height={900} /> 
                    </motion.div>

                    {/* COLUMN-2 */}
                    <div>
                        <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">Why we best?</h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">Discover why Al Hamid Minerals stands out: unmatched expertise, unwavering reliability, and a commitment to excellence.</h4>

                        <div className="mt-10">
                            {whydata.map((items, i) => (
                                <div className="flex mt-4" key={i}>
                                    <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                                        <Image src="/assets/why/check.svg" alt="check-image" width={24} height={24} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold">{items.heading}</h4>
                                        <h5 className="text-lg text-beach font-normal mt-2">{items.subheading}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Why;
