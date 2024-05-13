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

const markerPosition = {
  lat: 49.248722,
  lng: -122.999617,
};

const customMarkerIcon = 'icons/crash-marker.png';

const MapPage = () => {
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
          <Marker
            position={markerPosition}
            map={map}
            icon={{
              url: customMarkerIcon,
              scaledSize: new window.google.maps.Size(50, 70),
            }}
            onClick={handleMarkerClick} 
          />
          {isInfoWindowOpen && (
            <InfoWindow
              position={markerPosition}
              onCloseClick={handleInfoWindowClose}
            >
              <div className={styles.infobox}>
                <h3>Car Crash</h3>
                <p>Collision between 2 SUV`s on Main street</p>
              </div>
            </InfoWindow>
          )}
        </>
      )}
    </GoogleMap>
  ) : null;
};

export default MapPage;
