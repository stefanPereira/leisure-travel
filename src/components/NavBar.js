import React, { useState, useEffect } from 'react'
import '../css/NavBar.css'

const NavBar = () => {
    const [navBar, setNavBar] = useState(false);
    useEffect(() => {
        changeNavBar();
        window.addEventListener("scroll", changeNavBar);
    })
    const changeNavBar = () => {
        if (window.scrollY > 60) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    }
    return (
        <div className={navBar ? "nav-bar active" : "nav-bar"}>
            <div className='logo'>LT</div>
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">CONTACT US</a></li>
                <li><a href="">ABOUT US</a></li>
            </ul>
        </div>
    )
}

export default NavBar