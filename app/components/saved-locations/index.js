import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions/station'
import SavedLocationItem from './saved-location-item'
import PanelHeader from './../station-detail/panel-header'
import BaseStyle from '../../base-styles'

const SavedLocations = ({ saved, findCityName, fetchWeather, fetchTides, fetchTideChart, fetchSwellInfo, fetchWaterTemperature }) => (
  <View style={styles.container}>
    <PanelHeader headerText="Other Locations" bodyText="Save your favorites" />
    <View style={styles.savedLocations}>
      {_.map(saved, (station, i) => (
        <SavedLocationItem
          key={i}
          city={station.city}
          viewStation={() => {
            findCityName(station.location)
            fetchWeather(station.location)
            fetchTides(station.location)
            fetchTideChart(station.location)
            fetchSwellInfo(station.location)
            fetchWaterTemperature(station.location)
          }}
        />
      ))}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingLeft: BaseStyle.baseSpacing,
    marginTop: BaseStyle.baseSpacing,
    shadowColor: BaseStyle.darkBackgroundColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
  },
  savedLocations: {
    marginLeft: BaseStyle.baseSpacing,
  },
})

const mapStateToProps = ({ stations }) => ({
  saved: stations.saved,
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SavedLocations)
