import React from 'react';
import './Client.css';
import Ebomaf from '../../assets/ebomaf_logo.png'
import bkg from '../../assets/bkg.png'
import guicopres from '../../assets/Guicopres-logo.png'
import ex from '../../assets/ex.png'

// Engagement icons (replace these with your actual icons)
import { FaHandsHelping, FaClock, FaShieldAlt, FaThumbsUp } from 'react-icons/fa';

const engagements = [
  { icon: Ebomaf, text: `EBOMAF` },
  { icon: bkg, text: `BKG distrubition` },
  { icon: guicopres, text: 'GUICORPES' },
  { icon: ex, text: 'Exemple' },
];

const Engagement = () => {
  return (
    <div className='clients' id="client">
      {engagements.map((engagement, index) => (
        <div key={index} className='client-card'>
          <img src={engagement.icon} alt={engagement.text} className='icon' />
        </div>
      ))}
    </div>
  );
};

export default Engagement;
