import React from 'react'
import InternalLinks from './internalLinks'

export default function Nav() {
    return (
        <>
            <div className="navbar bg-gray-950 w-full">
                <div className=" lg:hidden  w-full h-16 z-[50] bg-gray-950 ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#666">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu bg-black menu-sm dropdown-content border border-gray-700 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <InternalLinks />
                        </ul>
                    </div>
                    <a id='sobre mi' className="btn btn-ghost text-xl text-gray-300">Porfolio</a>
                </div>
                <div className="navbar hidden bg-gray-950 lg:flex md:flex md:justify-center  shadow-lg backdrop-blur-xl font-bold  text-gray-950 lg:text-gray-400  top-0 h-16  w-full mx-auto  p-0 fixed lg:left-1/2 transform -translate-x-1/2 z-[1]">
                    <InternalLinks />
                </div>
                <div className="navbar-end hidden">
                </div>
            </div>
        </>
    )
}
