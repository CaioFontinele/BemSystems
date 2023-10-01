import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -5.1175058,
  lng: -42.7872593,
};



const options = {
  zoom: 8,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyB_SwAZUxBHj3dfDPtFdUrTlH0RSar89Tk">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={options.zoom}
      />
    </LoadScript>
  );
}

export default Map;