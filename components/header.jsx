/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Popover } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
    { name: "Product", href: "/products" },
    { name: "Features", href: "/features" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Company", href: "/company" },
    { name: "Login", href: "/login" }
];
  
function Header() {
  return (
    <div className="relative bg-blue-500 overflow-hidden">
      <div className="max-w-7xl mx-auto bg-orange-600">
        <div className="relative z-10 pb-8 bg-pink-400 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <Popover>
            <div className="pt-6 px-4 sm:px-6 lg:px-8 bg-red-900">
              <nav className="flex items-center justify-between sm:h-10 lg:justify-start bg-white"
                aria-label="Global"
              >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/workflow">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              </nav>
            </div>
          </Popover>
        </div> 
      </div>
    </div>
  )
}

export default Header