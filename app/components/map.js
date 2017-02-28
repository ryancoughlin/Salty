import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/station'
import mapStyle from '../lib/map-style'

const Map = class extends Component {
  componentDidMount() {
    if (!this.props.stations) {
      this.props.fetchAllStations()
    }
  }

  render() {
    const { stations, location } = this.props

    if (!stations) {
      return null
    }

    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.315,
          longitudeDelta: 0.321,
          showPointsOfInterest: false,
          showBuildings: false,
        }}
        customMapStyle={mapStyle}
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

const mapStateToProps = ({ stations }) => ({
  stations: stations.stations,
  location: stations.location,
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Map)
