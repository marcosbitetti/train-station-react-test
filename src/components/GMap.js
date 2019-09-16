import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

const MAPS_API = 'AIzaSyCkESvFyPx5akWPiIHVpq1qEylZcDeE55M'

function MapContainer(props) {

  const google = props.google||{}
  const center = props.center||{lat:-23.06,lng:-45.70}

  return (
    <Map
      google={google}
      zoom={16}
      initialCenter={center}
      style={{width:550,height:200}}
      >
      <Marker
          name={'Current location'} />
    </Map>
  )
}



export default GoogleApiWrapper({
  apiKey: MAPS_API
})(MapContainer)
