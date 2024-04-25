import React from 'react';

const Footer = () => {
return (
    <>
    <footer className="relative z-10 footer footer-center p-10   text-white text-md rounded ">
            <nav className="grid grid-flow-col gap-4">
                <ul className="menu menu-horizontal text-sm ">
                </ul>
            </nav> 
        <aside>
            <p className='flex mx-auto mt-2 font-extrabold'>Muchas gracias por llegar hasta aqui!! No dudes en contactarme
            <svg viewBox="0 0 48 48"   className=" ms-2 h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#34dfdc"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M44 24V9H24H4V24V39H24" stroke="#41a1b4" strokeWidth="4" ></path> <path d="M44 34L30 34" stroke="#41a1b4" strokeWidth="4" ></path> <path d="M39 29L44 34L39 39" stroke="#41a1b4" strokeWidth="4" ></path> <path d="M4 9L24 24L44 9" stroke="#41a1b4" strokeWidth="4" ></path> </g></svg>
            </p>
        </aside>
    </footer>
    </>
)
}
export default Footer;