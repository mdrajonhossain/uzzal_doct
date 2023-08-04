"use client";
import { useState } from "react";
import Link from 'next/link'



const Navber = () => {
  const [count, setCount] = useState(true);


  const Slieasdfo = () => {
    setCount(!count)
  }




  return (
    <>
      <nav className="bg-blue-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">

            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden" onClick={() => Slieasdfo()}>
              <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-1  ">
                <Link href="/">
                  <img className="h-14 w-16 rounded-full" src="./logo.jpg" alt="Your Company" />
                </Link>
              </div>
            </div>

            <div className="flex md:block hidden sm:items-stretch sm:justify-end">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <div className="uppercase text-white hover:bg-white hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"><Link href="/">Home</Link></div>
                  <div className="uppercase text-white hover:bg-white hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"><Link href="/">Course</Link></div>
                  <div className="uppercase text-white hover:bg-white hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"><Link href="/rural_physician_information">Dr. Info</Link></div>
                  <div className="uppercase text-white hover:bg-white hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"><Link href="/">About</Link></div>
                  <div className="uppercase text-white hover:bg-white hover:text-blue-500 rounded-md px-3 py-2 text-sm font-medium"><Link href="/">Contact</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={count ? "sm:hidden hidden md-block" : "sm:hidden"} id="mobile-menu">
          <div class="space-y-1 text-center px-2 pb-3 pt-2">
            <div className="uppercase text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"><Link href="/">Home</Link></div>
            <a href="#" className="uppercase text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Course</a>
            <div className="uppercase text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"><Link href="/rural_physician_information">Dr. Info</Link></div>
            <a href="#" className="uppercase text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</a>
            <a href="#" className="uppercase text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</a>
          </div>
        </div>
      </nav>
    </>
  )
}


export default Navber;