/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import Link from 'next/link';

const navigation = [
    { name: "Product", href: "/products" },
    { name: "Features", href: "/features" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Company", href: "/company" }
];
  
const Header = () => {
  return (
    <div className="relative bg-background-main">
      {/* <div className="max-w-7xl mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 bg-red-500"> */}
        {/* <div className=""> */}
          {/* <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg> */}

          <Popover>
            <div className="relative py-5 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/">
                      <img
                        className="h-8 w-auto sm:h-10 cursor-pointer"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      />
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-background-main rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <a className="font-medium text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                  <Link href="/login">
                    <a className="font-medium text-gray-500 hover:text-gray-900">
                      Login
                    </a>
                  </Link>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-y-auto">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <Link href="/login">
                    <a className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                      Log in
                    </a>
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default Header