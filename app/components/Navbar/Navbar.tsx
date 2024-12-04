
// import { Disclosure } from '@headlessui/react';
// import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// import { useState } from 'react';
// import Image from 'next/image';
// import Drawer from './Drawer';
// import Drawerdata from './Drawerdata';

// interface NavigationItem {
//   name: string;
//   href: string;
//   current: boolean;
//   submenu?: NavigationItem[];
// }

// const navigation: NavigationItem[] = [
//   { name: 'Home', href: '#Slider', current: true },
//   { name: 'About', href: '/about', current: false },
//   {
//     name: 'Projects',
//     href: '/mine-projects',
//     current: false,
//     submenu: [
//       { name: 'Sro Sha Mine 1', href: '/sro-sha-1', current: false },
//       { name: 'Danishkol Mine', href: '/danishkol-mine', current: false },
//       { name: 'Kamangara Mine', href: '/kamangara-mine', current: false },
//     ],
//   },

//   { name: 'Products', href: '../Products/', current: false },
//   { name: 'Contact Us', href: '/contact-us/', current: false },
//   { name: 'Social Work', href: '/social-work/', current: false },
//   { name: 'Blog', href: '../Blog/', current: false },


//   // {
//   //   name: 'Pages',
//   //   href: '#',
//   //   current: false,
//   //   submenu: [
//   //     { name: 'About Page', href: '/about', current: false },
//   //     { name: 'Contact Page', href: '/contact', current: false },
//   //     { name: 'Blog', href: '/blog', current: false },
//   //     { name: 'Sign In Page', href: '/signin', current: false },
//   //     { name: 'Sign Up Page', href: '/signup', current: false },
//   //     { name: 'Error Page', href: '/error', current: false },
//   //   ],
//   // },



// ];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ');
// }

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);

//   return (
//     <Disclosure as="nav" className="sticky mb-10 top-0 z-50 bg-white shadow-md">
//       <>
//         <div className="mx-auto max-w-7xl px-6 lg:py-2 lg:px-8">
//           <div className="relative flex h-12 items-center justify-between">
//             <div className="flex flex-1 items-center justify-between">
//               <div className="flex items-center">
//                 <Link href="/home">
//                   <Image
//                     height={48}
//                     width={48}
//                     className="h-12 w-12 mr-4"
//                     src="/assets/logo/Logo_Al-Hamid-Minerals.png"
//                     alt="al-hamid-minerals-logo"
//                   />
//                 </Link>
//                 <h1 className="text-lg sm:text-2xl font-bold">Al-Hamid-Minerals</h1>
//               </div>
//               <div className="hidden lg:flex space-x-2">
//                 {navigation.map((item) => (
//                   <div
//                     key={item.name}
//                     className="relative"
//                     onMouseEnter={() => setSubmenuOpen(item.name)}
//                     onMouseLeave={() => setSubmenuOpen(null)}
//                   >
//                     <Link
//                       href={item.href}
//                       className={classNames(
//                         item.current ? 'text-black' : 'text-gray-400 hover:text-blue',
//                         'px-3 py-2 text-base '
//                       )}
//                     >
//                       {item.name}
//                       {item.submenu && <ChevronDownIcon className="ml-1 h-4 w-4 inline" />}
//                     </Link>
//                     {item.submenu && (
//                       <div
//                         className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md ${submenuOpen === item.name ? 'block' : 'hidden'
//                           }`}
//                       >
//                         {item.submenu.map((subItem) => (
//                           <Link
//                             key={subItem.name}
//                             href={subItem.href}
//                             className="block px-4 py-2 text-gray-400 hover:text-blue"
//                           >
//                             {subItem.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="lg:hidden">
//               <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
//             </div>
//             <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
//               <Drawerdata />
//             </Drawer>
//           </div>
//         </div>
//       </>
//     </Disclosure>
//   );
// };

// export default Navbar;



import { Disclosure } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Drawer from './Drawer';
import Drawerdata from './Drawerdata';
import ThemeToggler from './ThemeToggler'; // Make sure to import the ThemeToggler

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  submenu?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '#Slider', current: true },
  { name: 'About', href: '/about', current: false },
  {
    name: 'Projects',
    href: '/mine-projects',
    current: false,
    submenu: [
      { name: 'Sro Sha Mine 1', href: '/sro-sha-1', current: false },
      { name: 'Danishkol Mine', href: '/danishkol-mine', current: false },
      { name: 'Kamangara Mine', href: '/kamangara-mine', current: false },
    ],
  },
  { name: 'Products', href: '../Products/', current: false },
  { name: 'Contact Us', href: '/contact-us/', current: false },
  { name: 'Social Work', href: '/social-work/', current: false },
  { name: 'Blog', href: '../Blog/', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);

  return (
    <Disclosure as="nav" className="sticky mb-10 top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <>
        <div className="mx-auto max-w-7xl px-6 lg:py-2 lg:px-8">
          <div className="relative flex h-12 items-center justify-between">
            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center">
                <Link href="/home">
                  <Image
                    height={48}
                    width={48}
                    className="h-12 w-12 mr-4"
                    src="/assets/logo/Logo_Al-Hamid-Minerals.png"
                    alt="al-hamid-minerals-logo"
                  />
                </Link>
                <h1 className="text-lg sm:text-2xl font-bold dark:text-white">Al-Hamid-Minerals</h1>
              </div>
              <div className="hidden lg:flex space-x-2 items-center">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setSubmenuOpen(item.name)}
                    onMouseLeave={() => setSubmenuOpen(null)}
                  >
                    <Link
                      href={item.href}
                      className={classNames(
                        item.current ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-300 hover:text-blue dark:hover:text-blue-400',
                        'px-3 py-2 text-base'
                      )}
                    >
                      {item.name}
                      {item.submenu && <ChevronDownIcon className="ml-1 h-4 w-4 inline" />}
                    </Link>
                    {item.submenu && (
                      <div
                        className={`absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-md ${
                          submenuOpen === item.name ? 'block' : 'hidden'
                        }`}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-400 dark:text-gray-300 hover:text-blue dark:hover:text-blue-400"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <ThemeToggler /> {/* Add ThemeToggler here */}
              </div>
            </div>
            <div className="lg:hidden flex items-center">
              <ThemeToggler /> {/* Add ThemeToggler for mobile */}
              <Bars3Icon className="block h-6 w-6 text-gray-700 dark:text-gray-300" aria-hidden="true" onClick={() => setIsOpen(true)} />
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
