import React from 'react';
import './transport.css';
import transport from '../../../assets/transport.jpg'

const Maintenance = () => {
  return (
    <div className='maintenance'>
      <div className="tr-left-container">
        <h2>SOS Transport</h2>
        <p>
        L'offre Transport de Groupe SOS représente une solution clé-en-main de logistique intégrée, entièrement adaptée à vos besoins spécifiques. Nous prenons en charge tous les aspects nécessaires pour assurer que même les transports les plus complexes atteignent leur destination à bon port, et dans les délais impartis.
        </p>
        <p>
        Notre approche inclut une planification méticuleuse, une gestion rigoureuse des opérations, et l'utilisation de technologies avancées pour garantir une efficacité optimale à chaque étape du processus. Chez Groupe SOS, nous nous engageons à offrir des solutions de transport fiables, flexibles et parfaitement ajustées à vos exigences, afin de répondre à vos besoins logistiques avec excellence et professionnalisme.
        </p>

        
      </div>
      <div className="tr-right-container">
        <img src={transport} alt="Maintenance Image" />
      </div>
    </div>
  );
}

export default Maintenance;
