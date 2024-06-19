
import logo from "../img/gg.jpg";
import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import '../../App.css';
import Darkmode from "../modules/Darkmode";

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <div className="relative w-full dark:bg-neutral-900 duration-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img
              width="30"
              height="30"
              src={logo}
              alt="Logo"
            />
          </span>
          <span className="font-bold text-gray-900 dark:text-gray-100">GadgetGalaxy</span>
        </div>
        
        <div className="hidden lg:block justify-items-center">
          <ul className="ml-12 inline-flex space-x-8 items-center h-full">
            {menuItems.map((item) => (
              <li key={item.name} className="h-full flex items-center">
                <a
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}



<div className="dropdown relative inline-flex group ">
      <button id="dropdown-hover" type="button" className="dropdown-toggle inline-flex justify-center items-center gap-1 py-1 px-2 text-sm text-gray-900 dark:text-gray-100 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 "> Dropdown Hover
      </button>
      <div className="dropdown-menu rounded-xl shadow-lg bg-white  absolute top-full w-72 mt-2 hidden group-hover:block" aria-labelledby="dropdown-hover">
      <ul className="py-2  dark:bg-neutral-900">
        <li>
          <a className="block px-4 py-2 hover:bg-gray-100 text-gray-900  dark:text-white font-medium" href="/"> Top Rated </a>
        </li>
        <li>
          <a className="block px-4 py-2 hover:bg-gray-100 text-gray-900 dark:text-white font-medium" href="/"> Trending </a>
        </li>
        <li>
          <a className="block px-4 py-2 hover:bg-gray-100 text-gray-900 dark:text-white font-medium" href="/"> Discount </a>
        </li>
        <li>
          <a className="block px-4 py-2 hover:bg-gray-100 text-red-500 font-medium" href="/"> Hot's </a>
        </li>
      </ul>
      </div>
      </div>


          </ul>
        </div>

        <div className="flex grow justify-end items-center space-x-4">
          <div className="flex grow justify-end items-center relative group">
            <input
              className={`search-bar transition-all duration-300 ${
                isInputVisible ? 'w-96 opacity-100 px-5 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' : 'w-0 opacity-0'
              }`}
              type="text"
              placeholder="Search"
            />
            <IoMdSearch 
              className="text-xl text-gray-600 group-hover:text-pretty dark:text-gray-400 cursor-pointer ml-2 absolute top-1/2 -translate-y-1/2 right-3 duration-200" 
              onClick={toggleInputVisibility} 
            />
          </div>

          <button className="relative">
            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              4
            </div>
          </button>

          <div className="pl-4">
            <Darkmode />
          </div>
        </div>

        <div className="ml-2 lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer text-gray-900 dark:text-gray-100" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 dark:divide-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img
                        width="30"
                        height="30"
                        src={logo}
                        alt="Logo"
                      />
                    </span>
                    <span className="font-bold text-gray-900 dark:text-gray-100">GadgetGalaxy</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <span className="ml-3 text-base font-medium">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


