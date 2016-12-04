import React, { Component } from 'react'
import {
  StyleSheet,
} from 'react-native'

import MapView from 'react-native-maps'

export default class Map extends Component {
  constructor(props) {
    super(props)

    this.state = { stations: null }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords

      this.setState({
        userLocation: { latitude, longitude },
      })
    })

    fetch('http://localhost:8000/api/get-stations').then(res => res.json()).then((json) => {
      this.setState({ stations: json.formattedStations })
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
          showPointsOfInterest: false,
          showBuildings: false,
        }}
      >
        {stations.map(station => (
          <MapView.Marker
            coordinate={{
              latitude: station.location[0],
              longitude: station.location[1],
            }}
          />
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
