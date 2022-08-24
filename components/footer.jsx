/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='text-gray-600 body-font fixed w-full lg:bottom-0  '>
        <div className="container p-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="bg-white w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                    <span className="ml-3 text-xl">inVenerry</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                    Inventory Management Solution
                </p>
            </div>
            <div className=" flex-grow flex flex-wrap md:pl-20 md:mt-0 mt-10 md:text-left text-center">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm my-3">
                        CATEGORIES
                    </h2>
                    <nav className="list-none">
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                        </li>
                    </nav>
                </div>    
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm my-3">
                        CATEGORIES
                    </h2>
                    <nav className="list-none">
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                        </li>
                    </nav>
                </div>    
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm my-3">
                        CATEGORIES
                    </h2>
                    <nav className="list-none">
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                        </li>
                    </nav>
                </div>    
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm my-3">
                        CATEGORIES
                    </h2>
                    <nav className="list-none">
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">First Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                        </li>
                    </nav>
                </div>    
            </div>   
          </div>
          <div className="bg-gray-100">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">
                    © 2022 Mehrnoosh —
                    <a className="text-gray-600 ml-1" href="https://github.com/IVIehr/nextjs-landing-page" rel="noopener noreferrer" target="_blank">
                        @IVIehr
                    </a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <a className="text-gray-500  hover:text-gray-800 cursor-pointer" href='https://github.com/IVIehr' target="_blank" rel="noopener noreferrer">
                        <svg 
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 22 22"
                          >
                            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"/>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-gray-800 cursor-pointer" href='https://t.me/IVIehr' target="_blank" rel="noopener noreferrer">
                    <svg 
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 50 50"
                          >
                            <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"/>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-500 hover:text-gray-800 cursor-pointer" href='https://ir.linkedin.com/in/mehrnoosh-navidimehr-01399b23b' target="_blank" rel="noopener noreferrer">
                        <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            ></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
      </div> 
    </footer>
  )
}

export default Footer