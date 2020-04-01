import React from 'react';
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={2.4}
          onClick={this.props.onCountryChoice}
          initialCenter={{
            lat: 15,
            lng: 0,
          }}
        >
          <InfoWindow
            position = {{
              lat: (this.props.onClickCoordinates[0]),
              lng: (this.props.onClickCoordinates[1]),
            }}
            visible={this.props.infoWindowVisible}>
              <div>
                <h4>There are no movies for this country</h4>
              </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API,
})(MapContainer);
