import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/station'
import MapCallout from './map-callout'
import mapMarker from '../assets/images/station-marker.png'

import GeoJSON from 'geojson'
import BaseStyle from '../base-styles'

import color from 'tinycolor2'

import Mapbox from '@mapbox/react-native-mapbox-gl'

Mapbox.setAccessToken('pk.eyJ1Ijoic25vd2Nhc3QiLCJhIjoiRThTZEJUVSJ9.iBDNGv5t_HMMwho_8GRcOQ')

const Map = class extends Component {
  constructor(props) {
    super(props)

    this.state = { stations: {} }
  }

  componentDidMount() {
    if (!this.props.stations) {
      this.props.fetchAllStations()
    }
    this.buildGeoJSON()
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

  buildGeoJSON() {
    const geoJSON = GeoJSON.parse(this.props.stations, {
      Point: ['location.latitude', 'location.longitude'],
      include: ['name', 'id'],
    })
    this.setState({ stations: geoJSON })

    console.log(geoJSON)
  }

  render() {
    const { stations, location } = this.props

    if (!stations) {
      return null
    }

    return (
      <Mapbox.MapView
        styleURL="mapbox://styles/snowcast/cj48x1j1s24zf2so58er7t4kx"
        zoomLevel={10}
        centerCoordinate={[location.longitude, location.latitude]}
        style={styles.container}
        showUserLocation
      >
        <Mapbox.ShapeSource id="stations" shape={this.state.stations} cluster>
          <Mapbox.SymbolLayer
            id="symbolLocationSymbols"
            minZoomLevel={1}
            style={mapStyles.clusterCount}
          />
          <Mapbox.SymbolLayer id="pointCount" style={mapStyles.clusterCount} />

          <Mapbox.CircleLayer
            id="clusteredPoints"
            belowLayerID="pointCount"
            filter={['has', 'point_count']}
            style={mapStyles.clusteredPoints}
          />

          <Mapbox.SymbolLayer
            id="singlePoint"
            filter={['!has', 'point_count']}
            style={mapStyles.singlePoint}
          />
        </Mapbox.ShapeSource>
      </Mapbox.MapView>
    )
  }
}
const mapStyles = Mapbox.StyleSheet.create({
  singlePoint: {
    iconImage: mapMarker,
    iconAllowOverlap: true,
    iconSize: 0.4,
  },

  clusteredPoints: {
    circleColor: Mapbox.StyleSheet.source(
      [
        [10, BaseStyle.actionColor],
        [
          30,
          color(BaseStyle.actionColor)
            .darken(20)
            .toString(),
        ],
        [
          40,
          color(BaseStyle.actionColor)
            .darken(40)
            .toString(),
        ],
        [
          50,
          color(BaseStyle.actionColor)
            .darken(60)
            .toString(),
        ],
      ],
      'point_count',
      Mapbox.InterpolationMode.Exponential,
    ),

    circleRadius: Mapbox.StyleSheet.source(
      [[0, 24], [100, 34], [750, 44]],
      'point_count',
      Mapbox.InterpolationMode.Exponential,
    ),

    circleOpacity: 0.9,
    circleStrokeWidth: 3,
    circleStrokeColor: 'white',
  },

  clusterCount: {
    textField: '{point_count}',
    textSize: 14,
    textColor: 'white',
  },
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
