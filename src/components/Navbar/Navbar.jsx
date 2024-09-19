import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo4.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; 
import menu_icon from '../../assets/menu.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 840) {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container2 ${sticky ? 'sticky-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} offset={-150} duration={500}>About Us</ScrollLink></li>
        <li><ScrollLink to='engagement' smooth={true} offset={-150} duration={500}>Engagements</ScrollLink></li>
        <li><ScrollLink to='client' smooth={true} offset={-150} duration={500}>Clients</ScrollLink></li>
        <li><ScrollLink to='services' smooth={true} offset={-150} duration={500}>Nous offrons</ScrollLink></li>
        {/* Use RouterLink for navigating to the Blog page */}
        <li><RouterLink to='/blog'>GABON 2024/2025</RouterLink></li> {/* New Link for page navigation */}
        <li><ScrollLink to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact</ScrollLink></li>
      </ul>
      <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
