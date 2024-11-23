import React, { useEffect, useRef } from 'react';

const MapComponent = ({ latitude, longitude }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: latitude, lng: longitude },
        zoom: 12,
      });

      new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map,
      });
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC_dhNJ3rkD6hEUiU5gRR3l5aQZvtANCJ8`;
      script.async = true;
      script.onload = loadMap;
      document.body.appendChild(script);
    } else {
      loadMap();
    }
  }, [latitude, longitude]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default MapComponent;