import React, { useEffect } from 'react';
import './About.css';
import about_img from '../../assets/logo3.png';
import play_icon from '../../assets/play_icon.png';
import owner from '../../assets/Tarik.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = ({ setPlayState }) => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handlePlayClick = () => {
    console.log('Play icon clicked');
    setPlayState(true);
  };

  return (
    <>
      <div className='about' id='about'>
        <div className="about-left" data-aos="fade-right">
          <img src={about_img} alt="" className='about-img' />
          <img src={play_icon} alt="" className='play' onClick={handlePlayClick} />
        </div>
        <div className="about-right" data-aos="fade-left">
          <h3>À propos de SOS</h3>
          <h2>Nos Compétences Au Service De l'Afrique!</h2>
          <p>Groupe SOS sarl est la filiale togolais de la société marocaine SOS Maintenance International. Elle est spécialisée dans la maintenance mécanique et électrique, la chaudronnerie, les travaux en hauteur, le forage, les BTP et le Transport. La société Groupe SOS a été créée par monsieur Tarik Fadil qui cumule à son actif près de vingt ans d'expérience dans les domaines de la maintenance mécanique et de la logistique. Il a travaillé durant ses nombreuses expériences pour des grands groupes français et africains à la fois dans les mines, les BTP et enfin dans l'industrie automobile.</p>
        </div>
      </div>
    </>
  );
}

export default About;
