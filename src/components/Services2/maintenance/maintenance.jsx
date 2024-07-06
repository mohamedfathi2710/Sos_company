import React from 'react';
import './maintenance.css';
import maintenance from '../../../assets/mécanique.jpg'

const Maintenance = () => {
  return (
    <div className='maintenance'>
      <div className="m-left-container">
        <h2>Maintenance mécanique & électrique</h2>
        <p>
            Depuis 2015, <strong>SOS Maintenance International</strong> s'engage à fournir des solutions complètes de maintenance mécanique et électrique, optimisant la gestion de vos parcs automobiles, camions et engins, ainsi que de vos bâtiments. Nous nous distinguons par notre capacité à non seulement assurer la maintenance de vos équipements, mais aussi à vous fournir en pièces de rechange essentielles pour garantir la continuité de vos opérations.
        </p>
        <p>
            Dans le cadre de nos services de maintenance, nous sommes spécialisés dans une large gamme de travaux incluant la soudure et la chaudronnerie, adaptés à vos besoins spécifiques. Notre expertise s'étend également aux domaines de la logistique et de la sous-traitance, où nous avons développé des solutions sur mesure pour répondre aux exigences rigoureuses de nos clients.
        </p>
        <p>
            Pour renforcer notre engagement envers l'excellence et l'innovation, nous avons mis en place une cellule de formation dédiée. Cette initiative vise à transmettre notre savoir-faire et à former les futurs professionnels de la maintenance mécanique et électrique, garantissant ainsi la pérennité de nos services et la satisfaction continue de nos partenaires.
        </p>
        
      </div>
      <div className="m-right-container">
        <img src={maintenance} alt="Maintenance Image" />
      </div>
    </div>
  );
}

export default Maintenance;
