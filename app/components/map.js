import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-map-clustering'
import { Marker } from 'react-native-maps'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/station'
import MapCallout from './map-callout'
import mapStyle from '../lib/map-style'
import mapMarker from '../assets/images/station-marker.png'

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
    this.props.fetchSwellInfo(location)
    this.props.fetchWaterTemperature(location)
    this.props.dismissModal()
  }

  animate(coordinate) {
    const newRegion = {
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
      latitudeDelta:
        this.mapView.state.region.latitudeDelta - this.mapView.state.region.latitudeDelta / 2,
      longitudeDelta:
        this.mapView.state.region.longitudeDelta - this.mapView.state.region.longitudeDelta / 2,
    }
    this.mapView._root.animateToRegion(newRegion, 250)
  }

  render() {
    const { stations, location } = this.props

    if (!stations) {
      return null
    }

    return (
      <MapView
        ref={ref => (this.mapView = ref)}
        onClusterPress={coordinate => {
          this.animate(coordinate)
        }}
        style={styles.container}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
        customMapStyle={mapStyle}
      >
        {stations.map(station => (
          <Marker image={mapMarker} key={station.id} coordinate={station.location} />
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
