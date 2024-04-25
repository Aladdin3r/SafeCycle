'use client'

import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

const mapStyles = {
    width: '100%',
    height: '50%'
};

const MapGoogle= () => {

    return (
        <Map
            google={window.google}
            zoom={17}
            style={mapStyles}
            initialCenter={
                {
                    lat: 19.020145856138136, 
                    lng: -98.24006775697993
                }
            }
        ></Map>
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAtLzeeemriF2TQhBYBiMcK9Dmar7ihmTA"
})(MapGoogle);