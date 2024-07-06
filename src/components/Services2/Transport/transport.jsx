import React from 'react';
import './transport.css';
import transport from '../../../assets/transport.jpg'

const Maintenance = () => {
  return (
    <div className='maintenance'>
      <div className="left-container">
        <h2>SOS Transport</h2>
        <p>
        SOS BTP est une filière de la société Groupe SOS, spécialisée dans le bâtiment, les travaux publics et la construction de stations-services. Forte de son expérience et de son savoir-faire, SOS BTP s'est imposée comme un acteur incontournable dans le secteur de la construction en Guinée. Nous nous engageons à offrir des solutions de construction de haute qualité, adaptées aux besoins spécifiques de nos clients.
        </p>
        <p>
        Nos services couvrent une large gamme de projets, allant de la construction résidentielle et commerciale à l'infrastructure publique et aux installations industrielles. Que ce soit pour la réalisation de maisons individuelles, d'immeubles de bureaux, de routes, de ponts, ou encore de stations-services, notre équipe d'experts met tout en œuvre pour garantir des résultats qui surpassent les attentes.
        </p>
        <p>
        Chez SOS BTP, nous accordons une importance primordiale à la qualité et à la durabilité de nos constructions. Nous utilisons des matériaux de premier choix et adoptons les techniques les plus avancées pour assurer la longévité et la robustesse de nos réalisations. De plus, notre engagement envers les normes de sécurité et les réglementations en vigueur est inébranlable, assurant ainsi des chantiers sécurisés et conformes.
        </p>
        
      </div>
      <div className="right-container">
        <img src={transport} alt="Maintenance Image" />
      </div>
    </div>
  );
}

export default Maintenance;
