import React from 'react'

import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'

const mapStyles = {
  width: '80%',
  height: '80%'
}

class MapContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      showingInfoWinder: false,
      activeMarker: {},
      selectedPlace: {},
      businesses: [
        {position: {latitude: 41.89608, longitude: -87.66185}, name: 'Bennys'},
        {
          position: {latitude: 41.90326, longitude: -87.63063},
          name: 'The Dojo'
        },
        {
          position: {latitude: 41.910252, longitude: -87.685219},
          name: 'Yarn Dogs'
        },
        {
          position: {latitude: 41.912701, longitude: -87.681259},
          name: 'The Music Zone'
        },
        {
          position: {latitude: 41.92056, longitude: -87.67014},
          name: 'Happy-Go-Buckys'
        },
        {
          position: {latitude: 41.912171, longitude: -87.649681},
          name: 'Jason and His Sons'
        },
        {
          position: {latitude: 41.885141, longitude: -87.643504},
          name: 'Jordan and His Dogs'
        },
        {
          position: {latitude: 41.885824, longitude: -87.690799},
          name: 'Tims Dog Groomer'
        },
        {
          position: {latitude: 41.908583, longitude: -87.719793},
          name: 'Windy City Diner'
        },
        {
          position: {latitude: 41.913076, longitude: -87.725749},
          name: 'Yuku Sushi'
        },
        {
          position: {latitude: 41.921917, longitude: -87.692021},
          name: 'Jims Gym'
        },
        {
          position: {latitude: 41.842198, longitude: -87.69873},
          name: 'Kathys Yoga'
        },
        {
          position: {latitude: 41.861078, longitude: -87.708339},
          name: 'Bass and Drums'
        },
        {
          position: {latitude: 41.861066, longitude: -87.722868},
          name: 'The Kickdrum'
        },
        {
          position: {latitude: 41.828976, longitude: -87.672584},
          name: 'Cuts for Less'
        },
        {
          position: {latitude: 41.854758, longitude: -87.628905},
          name: 'Thats So Thrify'
        }
      ],
      //our initial position
      position: {lat: 41.855116, lng: -87.660208}
    }
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.getPosition = this.getPosition.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  //shows pop-up of the business name (want to add address as well)
  onMarkerClick(props, marker) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWinder: true
    })
  }
  //allows us to close the window
  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  //both handleClick and getPosition redirect the page to your current
  //location when button is clicked
  handleClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition)
    }
  }
  getPosition(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    this.setState(() => ({
      position: {
        lat: latitude,
        lng: longitude
      }
    }))
    this.props.google.setCenter(
      this.state.position.lat,
      this.state.position.lng
    )
  }
  //creates all markers on state
  displayMarkers = () => {
    return this.state.businesses.map(marker => {
      return (
        <Marker
          key={marker.latitude}
          position={{
            lat: marker.position.latitude,
            lng: marker.position.longitude
          }}
          name={marker.name}
          onClick={this.onMarkerClick}
        />
      )
    })
  }

  render() {
    const latitude = this.state.position.lat
    const longitude = this.state.position.lng
    return (
      <div id="google_map">
        <button type="submit" onClick={this.handleClick}>
          See businesses near me
        </button>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: latitude,
            lng: longitude
          }}
          center={{
            lat: latitude,
            lng: longitude
          }}
        >
          {this.displayMarkers()}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWinder}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCTH0cK47ZoLDzD7BwFEN06WnLXpilMGTE'
})(MapContainer)
