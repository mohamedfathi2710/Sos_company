import React from 'react';
import './About.css';
import about_img from '../../assets/logo.jpg';
import play_icon from '../../assets/play_icon.png';
import owner from '../../assets/Tarik.png'

const About = () => {
  return (
    <>
    <div className='about' id='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>About SOS</h3>
        <h2>Nos Compétences Au Service De l'Afrique!</h2>
        <p>Groupe SOS sarl est la filiale guinéenne de la société marocaine SOS Maintenance International. Elle est spécialisée dans la maintenance mécanique et électrique, la chaudronnerie, les travaux en hauteur, le forage, les BTP et le Transport. La société Groupe SOS a été créée par monsieur Tarik Fadil qui cumule à son actif près de vingt ans d'expérience dans les domaines de la maintenance mécanique et de la logistique. Il a travaillé durant ses nombreuses expériences pour des grands groupes français et africains à la fois dans les mines, les BTP et enfin dans l'industrie automobile.</p>
      </div>
    </div>
   

  </>
  );
}

export default About;
