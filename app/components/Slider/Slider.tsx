"use client"
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Carousel from './Carousel';



interface imgType {
    imgSrc: string;
    // heading: string;
    // percent: string;
    // subheading: string;
}


// const imageData: imgType[] = [
//     {
//         imgSrc: '/assets/packages/granite-green-diamond-al-hamid-minerals-image.jpeg',
//     },
//     {
//         imgSrc: "/assets/packages/quartz-blue-gemstone-al-hamid-minerals-image.jpeg",
//     },
//     {
//         imgSrc: "/assets/packages/chromite-al-hamid-minerals-image.jpeg",
//     },
//     {
//         imgSrc: "/assets/packages/quartz-blue-gemstone-al-hamid-minerals-image.jpeg",

//     },
//     // {
//     //     imgSrc: '/assets/packages/granite-green-diamond-al-hamid-minerals-image.jpeg',
//     // },
//     // {
//     //     imgSrc: "/assets/packages/chromite-al-hamid-minerals-image.jpeg",

//     // }

// ]



const items = [
    { src: '/assets/carousel/chromite-alhamid-minerals-1.jpg', alt: 'Chromite Minerals' },
    { src: '/assets/carousel/nephrite-jade-alhamid-minerals.jpg', alt: 'Nephrite Jade' },
    { src: '/assets/carousel/quartz-alhamid-minerals.jpg', alt: 'Quartz Minerals' },
    { src: '/assets/carousel/nephrite-jade-alhamid-minerals-5.jpg', alt: 'Nephrite Jade' },
    { src: '/assets/carousel/quartz-alhamid-minerals.jpg', alt: 'Quartz Minerals' },

];



export default function Slider() {
    // const [width, setWidth]=useState(0);
    // const carousel:any = useRef();

    // useEffect(()=>{
    //     console.log(carousel.current);
    //     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    // }, []);

    return (

        <div id="Slider">

            <Carousel items={items} />
        </div>







        //     <div className=" w-[90%] mx-auto ">
        //     <motion.div ref={carousel} className="overflow-hidden    ">
        //         <motion.div drag='x' dragConstraints={{right:0, left:-width}} className="flex transition-all    ">
        //             {imageData.map((image, index) => {
        //                 return (<>
        //                     <motion.div key={index} className='min-h-[20rem] w-[30rem] p-6'>
        //                         <Image     alt={`Slide ${index}`} src={image.imgSrc} width={300} height={500} className='w-[100%] h-[100%] rounded-lg pointer-events-none ' />
        //                     </motion.div>
        //                 </>
        //                 );

        //             })}
        //         </motion.div>



        //     </motion.div>

        // </div>
    )
}
