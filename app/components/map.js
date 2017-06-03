import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationActions } from 'react-navigation'

import CloseModalButton from './buttons/close-modal-button'
import * as actions from '../actions/station'
import MapCallout from './map-callout'
import mapStyle from '../lib/map-style'
import stationMarker from '../assets/images/station-marker.png'

const Map = class extends Component {
  componentDidMount() {
    if (!this.props.stations) {
      this.props.fetchAllStations()
    }
  }

  navigateToStation(location) {
    const stationDetail = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'StationDetail', params: { location } })],
    })

    this.props.navigation.dispatch(stationDetail)
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
          latitudeDelta: 0.200,
          longitudeDelta: 0.200,
        }}
        customMapStyle={mapStyle}
      >
        {stations.map((station, index) => (
          <MapView.Marker key={index} coordinate={station.location}>
            <MapView.Callout tooltip onPress={() => this.navigateToStation(station.location)}>
              <MapCallout station={station} />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </MapView>
    )
  }
}

Map.navigationOptions = ({ navigation }) => ({
  headerLeft: <CloseModalButton goBack={navigation.goBack('StationDetail')} />,
})

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
