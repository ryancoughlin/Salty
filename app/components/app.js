import React, { Component } from 'react'
import { AppState } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import * as actions from '../actions/station'
import NoNearbyStations from './no-nearby-stations'
import ActivityOverlay from './activity-overlay'
import StationDetail from './station-detail'
import { fetchLocation } from '../lib/location'

const App = class extends Component {
  constructor(props) {
    super(props)

    this.handleAppStateChange = this.handleAppStateChange.bind(this)
    this.state = {
      previousAppState: 'active',
    }
  }

  componentDidMount() {
    this.findCurrentLocation()

    AppState.addEventListener('change', this.handleAppStateChange)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  findCurrentLocation() {
    fetchLocation().then((location) => {
      this.props.findCityName(location)
      this.props.fetchWeather(location)
      this.props.fetchTides(location)
      this.props.fetchTideChart(location)
      this.props.fetchSwellInfo(location)
      this.props.fetchWaterTemperature(location)
    })
  }

  handleAppStateChange = (appState) => {
    this.setState({ previousAppState: appState })

    if (appState === 'unknown') {
      return
    }

    if (appState === 'active' && this.state.previousState !== 'active') {
      this.findCurrentLocation()
    }
  }

  render() {
    const { current } = this.props

    if (!this.props.stationsNearby) {
      return <NoNearbyStations />
    }

    if (_.isEmpty(current) && _.isEmpty(current.weather)) {
      return <ActivityOverlay />
    }

    return <StationDetail />
  }
}

const mapStateToProps = ({ stations }) => ({
  stationsNearby: stations.stationsNearby,
  current: stations.current,
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
