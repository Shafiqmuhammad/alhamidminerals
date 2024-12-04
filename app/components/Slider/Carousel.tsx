import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselItem {
  src: string;
  alt: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <>
      <div id="default-carousel" className="relative w-full  " data-carousel="slide">

        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
              data-carousel-item
            >
              <Image
                height={500}
                width={800} // Ensure the aspect ratio is correct
                src={item.src}
                alt={item.alt}
                layout="responsive" // Ensures that images are responsive
                className="block w-full h-full object-cover" // Ensures the images cover the container
              />

            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-gray-500'}`}
              aria-current={index === activeIndex ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Carousel;





// import { useState } from 'react';
// import Image from 'next/image';

// interface CarouselItem {
//   src: string;
//   alt: string;
// }

// interface CarouselProps {
//   items: CarouselItem[];
// }

// const Carousel: React.FC<CarouselProps> = ({ items }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <>
//       <div id="default-carousel" className="relative w-full mb-2" data-carousel="slide">
//         <p className='text-black'>shahid</p>
//         {/* Carousel wrapper */}
//         <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
//               data-carousel-item
//             >
//               <Image
//                 height={500}
//                 width={600}
//                 src={item.src}
//                 alt={item.alt}
//                 className="block w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//         {/* Slider indicators */}
//         <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//           {items.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-gray-500'}`}
//               aria-current={index === activeIndex ? 'true' : 'false'}
//               aria-label={`Slide ${index + 1}`}
//               onClick={() => setActiveIndex(index)}
//             />
//           ))}
//         </div>
//         {/* Slider controls */}
//         <button
//           type="button"
//           className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//           onClick={handlePrev}
//         >
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg
//               className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 1 1 5l4 4"
//               />
//             </svg>
//             <span className="sr-only">Previous</span>
//           </span>
//         </button>
//         <button
//           type="button"
//           className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//           onClick={handleNext}
//         >
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg
//               className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m1 9 4-4-4-4"
//               />
//             </svg>
//             <span className="sr-only">Next</span>
//           </span>
//         </button>
//       </div>
//     </>
//   );
// };

// export default Carousel;
