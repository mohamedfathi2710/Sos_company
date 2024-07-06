import React, { useEffect } from 'react';
import './Client.css';
import Ebomaf from '../../assets/ebomaf_logo.png';
import bkg from '../../assets/bkg.png';
import guicopres from '../../assets/Guicopres-logo.png';
import ex from '../../assets/ex.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Engagement icons (replace these with your actual icons)
import { FaHandsHelping, FaClock, FaShieldAlt, FaThumbsUp } from 'react-icons/fa';

const engagements = [
  { icon: Ebomaf, text: `EBOMAF` },
  { icon: bkg, text: `BKG distrubition` },
  { icon: guicopres, text: 'GUICORPES' },
  { icon: ex, text: 'Exemple' },
];

const Engagement = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='clients' id="client">
      {engagements.map((engagement, index) => (
        <div key={index} className='client-card' data-aos="fade-up" data-aos-duration="1000">
          <img src={engagement.icon} alt={engagement.text} className='icon' />
        </div>
      ))}
    </div>
  );
};

export default Engagement;
