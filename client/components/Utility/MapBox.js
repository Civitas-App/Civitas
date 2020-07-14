import React, {Component} from 'react'

import {Map, GoogleApiWrapper} from 'google-maps-react'
import {render} from 'enzyme'

const mapStyles = {
  width: '80%',
  height: '80%'
}

class MapContainer extends React.Component {
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
        />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCTH0cK47ZoLDzD7BwFEN06WnLXpilMGTE'
})(MapContainer)
