import { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import styles from "./Map.module.css"
import { useRouter } from 'next/router';

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
const NewMarkerIcon = '/icons/closure-marker.png';

const MapPage = ({ customMarkerDescription }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
  const [isCustomMarkerInfoWindowOpen, setIsCustomMarkerInfoWindowOpen] = useState(false);
  const [description, setDescription] = useState('');

  const router = useRouter();
  const { query } = router;
  const { description: queryDescription } = query;

  useEffect(() => {
    setDescription(queryDescription || '');
    setIsInfoWindowOpen(!!queryDescription); 
  }, [queryDescription]);

  const handleDefaultMarkerClick = () => {
    setIsInfoWindowOpen(true);
    setIsCustomMarkerInfoWindowOpen(false);
  };

  const handleCustomMarkerClick = () => {
    setIsCustomMarkerInfoWindowOpen(true);
    setIsInfoWindowOpen(false);
  };

  const handleInfoWindowClose = () => {
    setIsInfoWindowOpen(false);
    setIsCustomMarkerInfoWindowOpen(false);
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
            position={center}
            map={map}
            icon={{
              url: 'icons/crash-marker.png',
              scaledSize: new window.google.maps.Size(50, 70),
            }}
            onClick={handleDefaultMarkerClick} 
          >
            {isInfoWindowOpen && (
              <InfoWindow
                onCloseClick={handleInfoWindowClose}
              >
                <div className={styles.infobox}>
                  <h3>Car Crash</h3>
                  {<p>Car crash between bike and vehicle</p>}
                </div>
              </InfoWindow>
            )}
          </Marker>

          <Marker
            position={{ lat: 49.249214, lng: -122.999961 }}
            map={map}
            icon={{
              url: NewMarkerIcon,
              scaledSize: new window.google.maps.Size(50, 70),
            }}
            onClick={handleCustomMarkerClick} 
          >
            {isCustomMarkerInfoWindowOpen && (
              <InfoWindow
                onCloseClick={handleInfoWindowClose}
              >
                <div className={styles.infobox}>
                  <h3>New Hazard</h3>
                  {<p>Pedestrian walkway closed</p>}
                </div>
              </InfoWindow>
            )}
          </Marker>
        </>
      )}
    </GoogleMap>
  ) : null;
};

export default MapPage;