import React, { Component } from 'react'
import {
  StyleSheet,
} from 'react-native'
import MapView from 'react-native-maps'

import MapMarker from './map-marker'
import Config from '../lib/config'
import { mapStyle } from '../utils/map-style'

export default class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stations: null,
      region: {
        latitude: null,
        longitude: null,
        latitudeDelta: 0.315,
        longitudeDelta: 0.321,
      },
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords)
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      })
    })

    fetch(`${Config.HOST}/get-stations`).then(res => res.json()).then((json) => {
      this.setState({ stations: json.stations })
    })
  }

  render() {
    const { stations, region } = this.state

    if (!stations) {
      return null
    }

    return (
      <MapView
        style={styles.container}
        customMapStyle={mapStyle}
        region={region}
      >
        {stations.map(station => (
          <MapView.Marker
            coordinate={{
              latitude: station.location[0],
              longitude: station.location[1],
            }}
          >
            <MapMarker {...station} />
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
