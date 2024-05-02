'use client'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Loader } from "@googlemaps/js-api-loader"

const containerStyle = {
    width: '100vw',
    height: '100vh',
    marginTop: '10vh',
    touchAction: 'auto',
    position: 'fixed',
    zIndex: '0'
  };

  const loader = new Loader({
    apiKey: "YOUR_API_KEY",
    version: "weekly",
    ...additionalOptions,
  });
  
  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps");
  };
  const center = {
    lat: 49.2498,
    lng: -122.9991
  };
  
  const mapOptions = {
    styles: [
        {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [
                { color: '#fff' }
            ]
        }
    ]
  }

  const MapPage = () => {
    return (
      <LoadScript 
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      mapIds={['da4f6b07e44c857f']}
      mapOptions={mapOptions}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
          options={{
            draggable: true,
            zoomControl: true,
            gestureHandling: 'greedy',
          }}

        > 
          
        </GoogleMap>
      </LoadScript>
    );   
  };
  
  export default MapPage;