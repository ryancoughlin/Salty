import React, { Component } from 'react'
import {
  StyleSheet,
} from 'react-native'
import MapView from 'react-native-maps'

import { Actions } from 'react-native-router-flux'
import Config from '../lib/config'
import MapCallout from './map-callout'
import stationMarker from '../assets/images/map/station-marker.png'

export default class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stations: null,
      userLocation: null,
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords)
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      })
    })

    fetch(`${Config.HOST}/get-stations`).then(res => res.json()).then((json) => {
      this.setState({ stations: json.stations })
    })
  }

  pushStationDetail(station) {
    Actions.stationDetail({
      ...station,
    })
  }

  render() {
    const { stations, userLocation } = this.state

    if (!stations) {
      return null
    }

    return (
      <MapView
        style={styles.container}
        region={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.315,
          longitudeDelta: 0.321,
        }}
      >
        {stations.map((station, index) => (
          <MapView.Marker
            key={index}
            image={stationMarker}
            coordinate={{
              latitude: station.location[0],
              longitude: station.location[1],
            }}
            calloutOffset={{ x: 0, y: 30 }}
          >
            <MapView.Callout
              tooltip
              width={258}
              height={98}
              onPress={() => {
                Actions.stationDetail({
                  ...station,
                })
              }}
            >
              <MapCallout station={station} />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </MapView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
