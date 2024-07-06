import React from 'react';
import './Engagement.css';

// Engagement icons (replace these with your actual icons)
import { FaHandsHelping, FaClock, FaShieldAlt, FaThumbsUp } from 'react-icons/fa';

const engagements = [
  { icon: <FaHandsHelping />, text: `La mise à disposition d'une équipe d'intervention hautement qualifiée 24h/7 j` },
  { icon: <FaClock />, text: `La garantie et la qualité du travail (pièces de recharge d'origine)` },
  { icon: <FaShieldAlt />, text: 'Le respect des délais de réparation' },
  { icon: <FaThumbsUp />, text: 'Le recrutement des meilleurs éléments de terrain (ingénieurs, techniciens, mécaniciens) en mécanique générale et en électricité' },
];

const Engagement = () => {
  return (
    <div className='engagements' id='engagement'>
      {engagements.map((engagement, index) => (
        <div key={index} className='engagement-card'>
          <div className='icon'>{engagement.icon}</div>
          <div className='text'>{engagement.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Engagement;
