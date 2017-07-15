import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/station'
import MapCallout from './map-callout'
import mapStyle from '../lib/map-style'

const Map = class extends Component {
  componentDidMount() {
    if (!this.props.stations) {
      this.props.fetchAllStations()
    }
  }

  navigateToStation(location) {
    this.props.fetchWeather(location)
    this.props.fetchTides(location)
    this.props.fetchTideChart(location)
    this.props.findCityName(location)
    this.props.dismissModal()
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
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
        customMapStyle={mapStyle}
      >
        {stations.map(station =>
          (<MapView.Marker key={station.id} coordinate={station.location}>
            <MapView.Callout
              tooltip
              onPress={() => this.navigateToStation(station.location)}
            >
              <MapCallout station={station} />
            </MapView.Callout>
          </MapView.Marker>),
        )}
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
