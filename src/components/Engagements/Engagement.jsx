import React, { useEffect } from 'react';
import './Engagement.css';
import { FaHandsHelping, FaClock, FaShieldAlt, FaThumbsUp } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const engagements = [
  { icon: <FaHandsHelping />, text: `La mise à disposition d'une équipe d'intervention hautement qualifiée 24h/7 j` },
  { icon: <FaClock />, text: `La garantie et la qualité du travail (pièces de recharge d'origine)` },
  { icon: <FaShieldAlt />, text: 'Le respect des délais de réparation' },
  { icon: <FaThumbsUp />, text: 'Le recrutement des meilleurs éléments de terrain (ingénieurs, techniciens, mécaniciens) en mécanique générale et en électricité' },
];

const Engagement = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='engagements' id='engagement'>
      {engagements.map((engagement, index) => (
        <div key={index} className='engagement-card' data-aos="zoom-in">
          <div className='icon'>{engagement.icon}</div>
          <div className='text'>{engagement.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Engagement;
