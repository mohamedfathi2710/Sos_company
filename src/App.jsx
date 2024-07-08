import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Service'
import Title from './components/Title/Title'
import About from './components/About/About'
import Maintenance from './components/Services2/maintenance/maintenance'
import Forage from './components/Services2/Forage/Forage'
import BTP from './components/Services2/BTP/btp'
import Thauteur from './components/Services2/Travaux_Hauteur/Thauteur'
import Transport from './components/Services2/Transport/transport'
import Contact from './components/Contact/Contact'
import Engagement from './components/Engagements/Engagement'
import Client from './components/Clients/Client'
import Videoplayer from './components/videoplayer/videoplayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
        <About setPlayState={setPlayState}/>
        <Maintenance/>
        <div className='container'>
        <Title subTitle='' title='Nos ENGAGEMENTS'/>
        <Engagement/>
        </div>
        <Forage/>
        <Title subTitle='' title='Our Clients'/>
        <Client/>
        <BTP/>
        <div className='container'>
        <Title subTitle='' title='Nos Services'/>
        <Services/>
        </div>
        <Thauteur/>
        <Transport/>
        <div className="container">
        <Title subTitle='contact US' title='Get in Touch'/>
        <Contact/>
        </div>
        <Videoplayer playState={playState} setPlayState={setPlayState}/>
     
      
    </div>
  )
}

export default App
