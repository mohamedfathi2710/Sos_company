import React from 'react';
import './Service.css';

// Import local icons or images (replace these with your actual images)
import image1 from '../../assets/transport.jpg'; 
import image2 from '../../assets/thauteur.jpg'; 

const services = [
  { image: image1, text: `Réparation <br/> Une proximitéau service de la réactivité.
                            Nous nous appuyons sur une équipe et des moyens spécialisés pour effectuer les réparations mécaniques et électriques.
                            Nous mettons à votre disposition tout au long de l'année des ingénieurs et techniciens qui assureront les opérations
                            de proximité et de premier niveau dans un souci permanent d'efficacité et de réactivité.`, reverse: false },
  { image: image2, text: `Les contrats de sous-traitance S.O.S Maintenance International sont élaborés en fonction des besoins de nos clients.
                          En effet, nous effectuons en amont de la signature de celui-ci un diagnostic de vos besoins avec nos èquipes d'ingénuiers et de techniciens.
                          Viabiliser les équipements et optimiser les couts de maintenance c'est notre engagement.
                          Afin de garantir l'efficacité des interventions et la coordination des équipes, S.O.S MAINTENANCE INTERNATIONAL assure le pilotage global des opérations.
                          Un seul interlocuteur garantit la qualité et la réactivité de l'intervention.`, reverse: true },
];

const Service = () => {
  return (
    <div className='services' id='services'>
      {services.map((service, index) => (
        <div key={index} className={`service-card ${service.reverse ? 'reverse' : ''}`}>
          <img src={service.image} alt='Service' className='service-image' />
          <div className='service-text'  >{service.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Service;
