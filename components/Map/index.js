'use client'
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
    width: '430px',
    height: '820px',
    touchAction: 'auto',
    position: 'fixed',
    zIndex: '0',
    top: 0,
    bottom:'116px',
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
            mapIds: ['da4f6b07e44c857f'],
            ...mapOptions
          }}

        /> 
      </LoadScript>
    );   
  };
  
  export default MapPage;