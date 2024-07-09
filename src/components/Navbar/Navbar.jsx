import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo4.png';
import { Link } from 'react-scroll';
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
    <nav className={`container ${sticky ? 'sticky-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='engagement' smooth={true} offset={-150} duration={500}>Engagements</Link></li>
        <li><Link to='client' smooth={true} offset={-150} duration={500}>Clients</Link></li>
        <li><Link to='services' smooth={true} offset={-150} duration={500}>Nous offrons</Link></li>
        <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact</Link></li>
      </ul>
      <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
