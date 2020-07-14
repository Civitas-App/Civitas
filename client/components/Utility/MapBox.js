import React from 'react'

import {Map, GoogleApiWrapper} from 'google-maps-react'

import {InfoWindow, Marker} from 'google-maps-react'
import business from '../../store/business/singleBusiness'

const mapStyles = {
  width: '80%',
  height: '80%'
}

class MapContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      businesses: [
        {latitude: 41.89608, longitude: -87.66185},
        {latitude: 41.90326, longitude: -87.63063},
        {latitude: 41.910252, longitude: -87.685219},
        {latitude: 41.912701, longitude: -87.681259},
        {latitude: 41.92056, longitude: -87.67014},
        {latitude: 41.912171, longitude: -87.649681},
        {latitude: 41.885141, longitude: -87.643504},
        {latitude: 41.885824, longitude: -87.690799},
        {latitude: 41.908583, longitude: -87.719793},
        {latitude: 41.913076, longitude: -87.725749},
        {latitude: 41.921917, longitude: -87.692021},
        {latitude: 41.842198, longitude: -87.69873},
        {latitude: 41.861078, longitude: -87.708339},
        {latitude: 41.861066, longitude: -87.722868},
        {latitude: 41.828976, longitude: -87.672584},
        {latitude: 41.854758, longitude: -87.628905}
      ]
    }
  }
  displayMarkers = () => {
    return this.state.businesses.map(marker => {
      return (
        <Marker
          key={marker.latitude}
          position={{lat: marker.latitude, lng: marker.longitude}}
          onClick={() => console.log('clicked!')}
        />
      )
    })
  }
  render() {
    return (
      <div id="google_map">
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 41.855116,
            lng: -87.660208
          }}
        >
          {this.displayMarkers()}
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCTH0cK47ZoLDzD7BwFEN06WnLXpilMGTE'
})(MapContainer)
