import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';
import './Location.css';

const countries = [
  { name: 'Lome', country: 'Togo', latitude: 6.1319, longitude: 1.2220, blogPath: '#' },
  //{ name: 'Porto-Novo', country: 'Benin', latitude: 6.4969, longitude: 2.6289, blogPath: '#' },
  { name: 'Ouagadougou', country: 'Burkina Faso', latitude: 12.3686, longitude: -1.5275, blogPath: '#' },
  { name: 'Libreville', country: 'Gabon', latitude: 0.4162, longitude: 9.4673, blogPath: '/blog' }
];

const Location = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    if (globeRef.current) {
      const globe = Globe()(globeRef.current)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundColor('rgba(0, 0, 0, 0)') // Transparent background
        .pointOfView({ lat: 0, lng: 0, altitude: 1.5 });

      globe
        .labelsData(countries)
        .labelLat(d => d.latitude)
        .labelLng(d => d.longitude)
        .labelText(d => d.name)
        .labelSize(1.5)
        .labelDotRadius(0.8)
        .labelColor(() => 'white')
        .onLabelClick(d => {
          window.location.href = d.blogPath;
        });
    }
  }, []);

  return (
    <div className="location-container">
     
      <div className="globe-container" ref={globeRef}></div>
    </div>
  );
};

export default Location;
