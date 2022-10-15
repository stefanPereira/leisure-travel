// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import '../css/NavBar.css'

// const NavBar = () => {
//     const [navBar, setNavBar] = useState(false);
//     useEffect(() => {
//         changeNavBar();
//         window.addEventListener("scroll", changeNavBar);
//     })
//     const changeNavBar = () => {
//         if (window.scrollY > 60) {
//             setNavBar(true);
//         } else {
//             setNavBar(false);
//         }
//     }
//     return (
//         <div className={navBar ? "nav-bar active" : "nav-bar"}>
//             <div className='logo'>LT</div>
//             <ul>
//                 <li><a href="/">HOME</a></li>
//                 <li><a href="/">CONTACT US</a></li>
//                 <li><Link to="/packages">ALL TOURS</Link></li>
//                 <li><a href="/">ABOUT US</a></li>
//             </ul>
//         </div>
//     )
// }

// export default NavBar

import React from "react";
import Logo from "../Images/Logo.png";


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-yellow-50">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            
         
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          {/* <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div> */}
        </div>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-home-square text-lg leading-lg text-black opacity-100"></i><span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-sriLankanTours text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Sri Lankan Tours</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-otherDestinations text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Other Destinations</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-aboutUs-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About Us</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-blog-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Blog</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-contactUs-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}