import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero ' id='hero'>
      <div className="hero-text">
        <h1>Nos compétences au service de l'Afrique</h1>
        <p>Maintenace mécanique & électrique - Forage - BTP - Travaux en hauteur - Transport</p>
        <button className='btnn'><Link to='about' smooth={true} offset={-150} duration={500} className='btn'>Découvrez plus ➡️</Link></button>
      </div>
    </div>
  )
}

export default Hero
