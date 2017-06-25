import React, { Component } from 'react'
import { AppState, ActivityIndicator, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/station'
import NoNearbyStations from './no-nearby-stations'
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
    const { loading } = this.props

    if (!this.props.stationsNearby) {
      return <NoNearbyStations />
    }

    if (loading) {
      return <ActivityIndicator style={styles.loadingIndicator} size="large" />
    }

    return <StationDetail navigation={this.props.navigation} />
  }
}

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
})

const mapStateToProps = ({ stations }) => ({
  stationsNearby: stations.stationsNearby,
  loading: stations.loading,
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
