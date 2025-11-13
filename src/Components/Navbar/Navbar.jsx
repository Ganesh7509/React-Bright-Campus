

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/Logoo.png'
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setsticky(true) : setsticky(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={Logo} alt="logo" className="logo" />
      <ul>
        {/* ✅ Notice: no '/' before the id */}
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="programs" smooth={true} offset={-80} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-80} duration={500}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-80} duration={500}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-80} duration={500}>Testimonials</Link></li>
        <li>
          <Link to="contact" smooth={true} offset={-80} duration={500}>
            <button className="btn">Contact us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
