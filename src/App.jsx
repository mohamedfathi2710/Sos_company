import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Service';
import Title from './components/Title/Title';
import About from './components/About/About';
import Maintenance from './components/Services2/maintenance/maintenance';
import Forage from './components/Services2/Forage/Forage';
import BTP from './components/Services2/BTP/btp';
import Thauteur from './components/Services2/Travaux_Hauteur/Thauteur';
import Transport from './components/Services2/Transport/transport';
import Contact from './components/Contact/Contact';
import Engagement from './components/Engagements/Engagement';
import Client from './components/Clients/Client';
import Videoplayer from './components/videoplayer/videoplayer';
import Blog from './pages/Gabon'; // Ensure this import is correct

// This function component renders the App with the Navbar conditionally
const AppContent = () => {
  const [playState, setPlayState] = useState(false);
  const location = useLocation(); // Use location to check the current path

  return (
    <>
      {/* Conditionally render Navbar if not on the /blog page */}
      {location.pathname !== '/blog' && <Navbar />}

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About setPlayState={setPlayState} />
            <Maintenance />
            <div className="container">
              <Title subTitle="" title="Nos ENGAGEMENTS" />
              <Engagement />
            </div>
            <Forage />
            <Title subTitle="" title="Our Clients" />
            <Client />
            <BTP />
            <div className="container">
              <Title subTitle="" title="Nos Services" />
              <Services />
            </div>
            <Thauteur />
            <Transport />
            <div className="container">
              <Title subTitle="Contactez-nous" title="Get in Touch" />
              <Contact />
            </div>
            <Videoplayer playState={playState} setPlayState={setPlayState} />
          </>
        } />
        <Route path="/blog" element={<Blog />} /> 
      </Routes>
    </>
  );
};

// This component ensures the AppContent is wrapped with Router
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
