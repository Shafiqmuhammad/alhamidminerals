// components/ThemeToggler.tsx
'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-gray-200 dark:bg-gray-800 flex h-9 w-9 md:h-14 md:w-14 cursor-pointer items-center justify-center rounded-full text-black dark:text-white transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 md:h-6 md:w-6"
        >
          <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M6.343 6.343l-1.414 1.414M18.364 6.343l-1.414 1.414M6.343 17.657l-1.414-1.414M12 5a7 7 0 000 14 7 7 0 000-14z" />
        </svg>
      ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 md:h-6 md:w-6"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
      )}
    </button>
  );
};

export default ThemeToggler;













// 'use client'

// import { useState, useEffect } from 'react';

// const ThemeToggler = () => {
//   const [theme, setTheme] = useState<string>('light');

//   useEffect(() => {
//     if (localStorage.getItem('theme') === 'dark' ||
//       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//       document.documentElement.classList.add('dark');
//       setTheme('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       setTheme('light');
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (theme === 'dark') {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//       setTheme('light');
//     } else {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//       setTheme('dark');
//     }
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded focus:outline-none"
//       aria-label="Toggle theme"
//     >
//       {theme === 'dark' ? (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M6.343 6.343l-1.414 1.414M18.364 6.343l-1.414 1.414M6.343 17.657l-1.414-1.414M12 5a7 7 0 000 14 7 7 0 000-14z" />
//         </svg>
//       ) : (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M6.343 6.343l-1.414 1.414M18.364 6.343l-1.414 1.414M6.343 17.657l-1.414-1.414M12 5a7 7 0 000 14 7 7 0 000-14z" />
//         </svg>
//       )}
//     </button>
//   );
// };

// export default ThemeToggler;
