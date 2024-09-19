import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import image1 from '../assets/tarikGabon1.jpg'; 
import image2 from '../assets/tarikGabon2.jpg'; 
import image3 from '../assets/tarikGabon3.jpg'; 
import image4 from '../assets/tarikGabon4.jpg'; 
import image5 from '../assets/image 5.jpg';
import image6 from '../assets/image 6.jpg';
import overlayImage from '../assets/logo3-bg.png';
import './Gabon.css';

const EbomafProject = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: false, // Animate every time it comes into view
    });
  }, []);

  const carouselItems = [
    {
      img: image1,
      title: "Partenariat avec EBOMAF pour le projet BTP",
      description: "Fourniture de services de maintenance pour les machines et les véhicules au Gabon."
    },
    {
      img: image2,
      title: "Assurer le succès avec une maintenance fiable",
      description: "Notre équipe est dédiée à maintenir les machines en bon état de fonctionnement."
    },
    {
      img: image3,
      title: "Haute performance pour la machinerie lourde",
      description: "Nous garantissons un service efficace et rapide pour tout l'équipement."
    }
  ];
  

  const handleOverlayClick = () => {
    window.history.back();
  };

  return (
    <Box>
      {/* Carousel Section */}
      <Box>
        <Box sx={{ position: 'relative' }}>
          <Carousel indicators={false}>
            {carouselItems.map((item, i) => (
              <Paper key={i}>
                <Box sx={{ position: 'relative', width: '100%', height: '695px' }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '20px',
                    }}
                  >
                    <Typography
                      variant="h1"
                      fontFamily='Anton'
                      className='title-font'
                      fontWeight='400'
                      gutterBottom
                      sx={{ color: 'white', mb: 2, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',textTransform: 'uppercase' }}
                      dangerouslySetInnerHTML={{ __html: item.title }} // Render HTML content
                    />
                    <Typography variant="h5" fontFamily='Poppins' fontWeight='400' sx={{ color: 'white' }}>{item.description}</Typography>
                  </Box>
                </Box>
                {/* Optional overlay image */}
                <div
                  className="carousel-overlay"
                  onClick={handleOverlayClick}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    backgroundColor: 'rgb(255,255,255)',
                    borderRadius: '8px',
                    padding: '10px',
                    cursor: 'pointer'
                  }}
                >
                  <img
                    src={overlayImage}
                    alt="Overlay"
                    style={{ display: 'block', width: '150px', height: 'auto' }}
                  />
                </div>
              </Paper>
            ))}
          </Carousel>
        </Box>
      </Box>

      {/* Section 1: About the Project */}
      <Container sx={{ my: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} data-aos="fade-left" className="fade-left" data-aos-duration="1000">
            <Typography variant="h4" textAlign="center" fontFamily='Merriweather' fontWeight='bold' gutterBottom>À propos du Projet</Typography>
            <Typography variant="body1">
              Le projet Ebomaf BTP au Gabon est une initiative majeure d'infrastructure, comprenant la construction de routes, de ponts et de projets immobiliers. <br /><br/>
              <strong>Le Groupe EBOMAF</strong>, reconnu pour ses réalisations en Afrique de l’Ouest, a été choisi pour moderniser le réseau routier gabonais. Les travaux incluent des autoroutes de 2×3 voies reliant Libreville à d'autres villes comme Cocovi, ainsi que des immeubles résidentiels et commerciaux à Ndoum. Estimés à plus de 1,2 milliard de dollars US (700 milliards FCFA), ces projets se déroulent tout au long de l’année, avec une gestion efficace même pendant la saison des pluies.<br/><br/>
              <strong>SOS Maintenance</strong> , en tant que partenaire clé, assure la maintenance de toute la machinerie lourde et des véhicules, garantissant leur bon fonctionnement et contribuant au succès du projet.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} data-aos="fade-right" className="fade-right" data-aos-duration="1000">
            <img
              src={image4}
              alt="About the Project"
              style={{ width: '100%', height: '400px', borderRadius: '8px' }}
            />
          </Grid>
        </Grid>
      </Container>

      <br />

      {/* Section 2: Our Role */}
      <Container sx={{ my: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} data-aos="fade-left" className="fade-left" data-aos-duration="1000">
            <img
              src={image5}
              alt="Our Role"
              style={{ width: '100%', height: '450px', borderRadius: '8px' }}
            />
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} data-aos="fade-right" className="fade-right" data-aos-duration="1000">
            <Typography variant="h4" textAlign="center" fontFamily='Merriweather' fontWeight='bold' gutterBottom>Notre Rôle dans le Projet</Typography>
            <Typography variant="body1">
              <strong>SOS Maintenance</strong> est fier d’être un partenaire essentiel dans cette ambitieuse entreprise.<br/>
              En tant que spécialiste de la maintenance, <strong>SOS Maintenance</strong> fournit des services complets pour l'entretien et la réparation de toute la machinerie lourde et des véhicules impliqués dans le projet. <br/><br/>
              Notre équipe d’experts assure que chaque équipement fonctionne de manière optimale et fiable, en effectuant des vérifications régulières, des réparations préventives et des interventions rapides en cas de besoin.<br/><br/>
              Notre engagement à maintenir des normes élevées de performance et de sécurité est crucial pour le bon déroulement des opérations et pour garantir que le projet se déroule sans accroc. SOS Maintenance joue ainsi un rôle clé dans le succès et la durabilité de ce projet d'envergure, en contribuant à la réalisation des objectifs ambitieux fixés pour le développement des infrastructures au Gabon.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <br />

      {/* Section 3: Maintenance and Support */}
      <Container sx={{ my: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} data-aos="fade-left" className="fade-left" data-aos-duration="1000">
            <Typography variant="h4" textAlign='center' fontFamily='Merriweather' fontWeight='bold' gutterBottom>Maintenance et Support</Typography>
            <Typography variant="body1">
              <strong>Notre équipe</strong>Notre équipe de maintenance hautement qualifiée est disponible 24h/24 et 7j/7 pour s'assurer que toutes les machines et véhicules fonctionnent à pleine capacité, réduisant ainsi les temps d'arrêt et garantissant le bon déroulement du projet.<br/><br/>
              <strong>Nous comprenons</strong>Nous comprenons que, dans les projets d'infrastructure de grande envergure, une panne imprévue peut entraîner des retards considérables, c'est pourquoi nous nous engageons à fournir des services de maintenance préventive et d'intervention rapide.<br/><br/>
              <strong>Nos techniciens</strong>Nos techniciens effectuent des inspections régulières, des entretiens programmés, et utilisent des outils de diagnostic avancés pour détecter les problèmes potentiels avant qu'ils ne surviennent. De plus, notre équipe est équipée des outils les plus récents et des pièces de rechange nécessaires pour effectuer les réparations sur place, assurant ainsi une perturbation minimale du flux de travail.<br/><br/>
              <strong>Avec un soutien</strong>Avec un soutien technique constant et une gestion proactive des équipements, nous veillons à ce que le projet se poursuive sans interruption et dans les délais prévus.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} data-aos="fade-right" className="fade-right" data-aos-duration="1000">
            <img
              src={image3}
              alt="Maintenance and Support"
              style={{ width: '100%', height: '550px', borderRadius: '8px' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EbomafProject;
