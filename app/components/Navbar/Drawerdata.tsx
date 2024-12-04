import React from "react";
import Link from "next/link";
interface NavigationItem {
  name: string;
  href: string;
  current: boolean;

}

const navigation: NavigationItem[] = [
  // { name: 'Home', href: '#home', current: true },
  // { name: 'About', href: '#about', current: false },
  // { name: 'Projects', href: '#Projects', current: false },
  // { name: 'Products', href: '#', current: false },
  // { name: 'Contact Us', href: '#Contact', current: false },

  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },

  // {
  //   name: 'Projects',
  //   href: '/mine-projects',
  //   current: false,
  //   submenu: [
  //     { name: 'Sro Sha Mine 1', href: '/sro-sha-1', current: false },
  //     { name: 'Danishkol Mine', href: '/danishkol-mine', current: false },
  //     { name: 'Kamangara Mine', href: '/kamangara-mine', current: false },
  //   ],
  // },

  { name: 'Products', href: '../Products/', current: false },
  { name: 'Projects', href: '#Projects', current: false },
  { name: 'Contact Us', href: '/contact-us/', current: false },
  { name: 'Social Work', href: '/social-work/', current: false },
  { name: 'Blog', href: '../Blog/', current: false },
  { name: 'Privacy Policy', href: '/privacy-policy/', current: false },

]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                  'px-2 py-1 text-lg font-normal opacity-75 block'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            {/* <div className="mt-4"></div>
            <button className="bg-white w-full text-blue border border-lightblue font-medium py-2 px-4 rounded">
              Sign In
            </button>
            <button className="bg-lightblue w-full hover:bg-blue hover:text-white text-blue font-medium my-2 py-2 px-4 rounded">
              Sign up
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;

