import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Sidebar = ({ isOpen, toggle }) => {
    return (
            <nav className={isOpen === true ? "transition-all z-20 ease-out duration-300 fixed top-0 left-0 right-0 bg-gray-800 p-6 bg-opacity-80 backdrop-blur-lg h-full visible lg:invisible" : "transition-all z-20 ease-out duration-300 fixed top-[-100vh] left-0 right-0 items-center justify-between bg-gray-800 p-6 bg-opacity-80 backdrop-blur-lg h-full invisible"}>
                <div className="flex">
                  <div className="flex grow items-center text-white">
                      <span className="font-semibold text-xl tracking-tight mr-4">Abyss</span>
                  </div>
                  <div className="block">
                      <button onClick={toggle} className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-gray-400 hover:border-gray-400">
                          <svg className="fill-current h-3 w-3" viewBox="2 2 18 18" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </button>
                  </div>
                </div>
                <div className="mt-[10vh] gap-10 text-3xl grid justify-items-center">
                  <a href="dashboard" className="inline-block px-4 py-2 leading-none border rounded text-white text-2xl border-white hover:border-transparent hover:text-slate-900 hover:bg-white">Dashboard</a>
                </div>
            </nav>
    );
}

export default Sidebar;