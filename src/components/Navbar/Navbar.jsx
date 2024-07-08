import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo4.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu.png'

const Navbar = () => {

{ /*   const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[])*/}

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='engagement' smooth={true} offset={-150} duration={500}>Engagements</Link></li>
            <li><Link to='client' smooth={true} offset={-150} duration={500}>Clients</Link></li>
            <li><Link to='services' smooth={true} offset={-150} duration={500}>We Offer</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
