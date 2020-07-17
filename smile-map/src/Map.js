import React, { Component } from 'react';
import { apiKey } from './config.js'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          {/* <Marker position={{ lat: 48.00, lng: -122.00}} /> */}
        </Map>
    );
  }

}


export default GoogleApiWrapper({
  apiKey: apiKey
})(MapContainer);


