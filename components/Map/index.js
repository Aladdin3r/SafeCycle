import { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import styles from "./Map.module.css"

const containerStyle = {
  width: '430px',
  height: '950px',
  touchAction: 'auto',
  position: 'fixed',
  zIndex: '0',
  top: 0,
};

const center = {
  lat: 49.2498,
  lng: -122.9991,
};

const customMarkerIcon = '/icons/crash-marker.png';

const MapPage = ({ selectedHazard }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  const handleMarkerClick = () => {
    setIsInfoWindowOpen(true);
  };

  const handleInfoWindowClose = () => {
    setIsInfoWindowOpen(false);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      onLoad={map => setMap(map)}
    >
      {map && (
        <>
          {/* Render default marker */}
          <Marker
            position={center}
            map={map}
            icon={{
              url: 'icons/crash-marker.png',
              scaledSize: new window.google.maps.Size(50, 70),
            }}
            onClick={handleMarkerClick} 
          />
          {/* Render selected hazard marker if a hazard is selected */}
          {selectedHazard && (
            <Marker
              position={selectedHazard.coordinate}
              map={map}
              icon={{
                url: customMarkerIcons[selectedHazard.type],
                scaledSize: new window.google.maps.Size(50, 70),
              }}
              onClick={handleMarkerClick} 
            >
              {isInfoWindowOpen && (
                <InfoWindow
                  position={selectedHazard.coordinate}
                  onCloseClick={handleInfoWindowClose}
                >
                  <div className={styles.infobox}>
                    <h3>{selectedHazard.title}</h3>
                    {/* You can add additional information here */}
                  </div>
                </InfoWindow>
              )}
            </Marker>
          )}
        </>
      )}
    </GoogleMap>
  ) : null;
};

export default MapPage;