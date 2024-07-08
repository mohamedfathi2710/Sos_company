import React from 'react';
import './Thauteur.css';
import thauteur from '../../../assets/thauteur.jpg'

const Maintenance = () => {
  return (
    <div className='maintenance'>
      <div className="t-left-container">
        <img src={thauteur} alt="Maintenance Image" />
      </div>
      <div className="t-right-container">
      <h2>Travaux en hauteur</h2>
        <p>
        SOS Travaux en Hauteur se spécialise dans la réalisation de tout type de travaux en hauteur. Nos équipes d'experts possèdent le plus haut niveau de compétence et de qualification requis pour exécuter ces travaux avec précision et sécurité. Nous mettons un point d'honneur à garantir la sécurité absolue de chaque intervention. Chaque membre de notre équipe est formé aux dernières normes de sécurité et est équipé des outils les plus avancés pour assurer des résultats impeccables tout en minimisant les risques. Chez SOS Travaux en Hauteur, nous nous engageons à fournir des solutions efficaces et sûres, répondant aux plus hauts standards de qualité et de fiabilité.
        </p>
      </div>
    </div>
  );
}

export default Maintenance;
