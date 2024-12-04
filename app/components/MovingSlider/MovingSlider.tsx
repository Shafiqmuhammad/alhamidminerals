// "use client"
// import Image from "next/image";
// import React, { Component } from "react";
// import Slider from "react-slick";

// // IMAGES DATA FOR CAROUSEL
// interface Data {
//     imgSrc: string;
// }

// const data: Data[] = [
//     { imgSrc: "/assets/packages/carousal_slider/chromite-black-grey-al-hamid-minerals.png" },
//     { imgSrc: "/assets/packages/carousal_slider/chromite-dark-grey-al-hamid-minerals.png" },
//     { imgSrc: "/assets/packages/carousal_slider/granite-ornage-stone-al-hamid-minerals.png" },
//     { imgSrc: "/assets/packages/carousal_slider/granite-yellow-al-hamid-minerals-image.png" },
//     { imgSrc: "/assets/packages/carousal_slider/nephrite-green-al-hamid-minerals.png" },
//     { imgSrc: "/assets/packages/carousal_slider/quartz-rose-al-hamid-minerals.png" },
//     { imgSrc: "/assets/packages/carousal_slider/quartz-rose-mineral-al-hamid-minerals.png" },
//     { imgSrc: "/assets/packages/carousal_slider/quartz-rose-stone-al-hamid-minerals.png" },
// ]

// // CAROUSEL SETTINGS
// export default class MultipleItems extends Component {
//     render() {
//         const settings = {
//             dots: false,
//             infinite: true,
//             slidesToShow: 6,
//             slidesToScroll: 1,
//             arrows: false,
//             autoplay: true,
//             speed: 3000,
//             autoplaySpeed: 3000,
//             cssEase: "linear",
//             responsive: [

//                 {
//                     breakpoint: 1024,
//                     settings: {
//                         slidesToShow: 4,
//                         slidesToScroll: 1,
//                         infinite: true,
//                         dots: false
//                     }
//                 },
//                 {
//                     breakpoint: 700,
//                     settings: {
//                         slidesToShow: 2,
//                         slidesToScroll: 1,
//                         infinite: true,
//                         dots: false
//                     }
//                 },
//                 {
//                     breakpoint: 500,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1,
//                         infinite: true,
//                         dots: false
//                     }
//                 }
//             ]
//         };

//         return (
//             <div className='text-center'>
//                 <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//                     <div className="py-14">
//                         <Slider {...settings}>
//                             {data.map((item, i) => (
//                                 <div key={i}>
//                                     <Image src={item.imgSrc} className="rounded-md" alt={item.imgSrc} width={150} height={150} />
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>
//                     <hr />
//                 </div>
//             </div>
//         )
//     }
// }





"use client";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
    caption: string;
}

const data: Data[] = [
    { imgSrc: "/assets/packages/carousal_slider/chromite-black-grey-al-hamid-minerals.png", caption: "Chromite Black" },
    { imgSrc: "/assets/packages/carousal_slider/chromite-dark-grey-al-hamid-minerals.png", caption: "Chromite" },
    { imgSrc: "/assets/packages/carousal_slider/granite-ornage-stone-al-hamid-minerals.png", caption: "Granite Orange" },
    { imgSrc: "/assets/packages/carousal_slider/granite-yellow-al-hamid-minerals-image.png", caption: "Granite Yellow" },
    { imgSrc: "/assets/packages/carousal_slider/nephrite-green-al-hamid-minerals.png", caption: "Nephrite Jade" },
    { imgSrc: "/assets/packages/carousal_slider/quartz-rose-al-hamid-minerals.png", caption: "Smokey Quartz" },
    { imgSrc: "/assets/packages/carousal_slider/quartz-rose-mineral-al-hamid-minerals.png", caption: "Watery Quartz" },
    { imgSrc: "/assets/packages/carousal_slider/quartz-rose-stone-al-hamid-minerals.png", caption: "Watery Quartz" },
];

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settingsForward = {
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
            ],
        };

        const settingsReverse = {
            ...settingsForward,
            rtl: true, // Enables right-to-left mode for reverse scrolling
        };

        return (
            <div className="text-center mx-auto" style={{ maxWidth: "80%" }}>
                <div className="mb-5">
                    <Slider {...settingsForward}>
                        {data.map((item, i) => (
                            <div key={i} className="p-3">
                                <div className="border border-dark rounded-md p-3">
                                    <Image src={item.imgSrc} className="rounded-md" alt={item.caption} width={150} height={150} />
                                    <div className="mt-2 text-center">{item.caption}</div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="mb-5">
                    <Slider {...settingsReverse}>
                        {data.map((item, i) => (
                            <div key={i} className="p-3">
                                <div className="border border-dark rounded-md p-3">
                                    <Image src={item.imgSrc} className="rounded-md" alt={item.caption} width={150} height={150} />
                                    <div className="mt-2 text-center">{item.caption}</div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
