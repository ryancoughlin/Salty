import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  AppState,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions/station'
import TidePhrase from './tide-phrase'
import WeatherRow from './weather-row'
import TodaysTides from './todays-tides'
import DetailPanel from './detail-panel'
import { fetchLocation } from '../../lib/location'
import BaseStyle from '../../base-styles'

const StationDetail = class extends Component {
  constructor(props) {
    super(props)

    this.handleAppStateChange = this.handleAppStateChange.bind(this)

    this.state = {
      previousAppState: null,
    }
  }

  componentDidMount() {
    this.requestLoctionInformation()
    AppState.addEventListener('change', this.handleAppStateChange)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange = (appState) => {
    this.setState({ previousAppState: appState })

    if (appState === 'unknown') {
      return
    }

    if (appState === 'active' && this.state.previousState !== 'active') {
      this.requestLoctionInformation()
    }
  }

  requestLoctionInformation() {
    const { location, fetchTideData, findCityName } = this.props

    if (location) {
      fetchTideData(location)
      findCityName(location)
    } else {
      fetchLocation().then((location) => {
        fetchTideData(location)
        findCityName(location)
      })
    }
  }

  render() {
    const { city, tides, weather } = this.props.current

    if (this.props.loading) {
      return (
        <ActivityIndicator
          style={styles.loadingIndicator}
          size="large"
        />
      )
    }

    return (
      <ScrollView style={styles.container}>
        <TidePhrase
          style={styles.tidePhrase}
          city={city}
          tides={tides.formatted}
          todaysTides={tides.todaysTides}
        />

        <WeatherRow weather={weather.currentWind} icon="wind" />
        <WeatherRow weather={weather.currentWeather} icon={weather.icon} />

        <TodaysTides
          tideTable={tides.formatted}
          todaysTides={tides.todaysTides}
        />

        <DetailPanel
          wind={weather.wind}
          tideChart={tides.hourly}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: BaseStyle.navigationBarHeight,
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const mapStateToProps = ({ stations }) => ({
  city: stations.current.city,
  current: stations.current,
  loading: stations.loading,
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(StationDetail)
