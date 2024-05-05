import React from 'react'
import DescargaCv from './descargaCv';
import 'animate.css';
import arrayLinks from '../utils/arrayLinks';

const Navbar = () => {
  const { links } = arrayLinks()

  return (
    <>
        <div className="navbar animate__animated animate__fadeIn animate__delay-900ms animate__slower ">
          <div className="navbar-start">
            {links.map((item, index) => (
              <div className="flex justify-center" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <DescargaCv />
    </>
  )
}
export default Navbar;