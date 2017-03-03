import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  AppState,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import TidePhrase from './tide-phrase'
import WeatherRow from './weather-row'
import TodaysTides from './todays-tides'
import DetailPanel from './detail-panel'
import makeRequest from '../../lib/request'
import { fetchLocation, fetchCityName } from '../../lib/location'
import BaseStyle from '../../base-styles'

export default class StationDetail extends Component {
  constructor(props) {
    super(props)

    this.handleAppStateChange = this.handleAppStateChange.bind(this)

    this.state = {
      weather: null,
      previousAppState: null,
      loading: true,
    }
  }

  componentDidMount() {
    SplashScreen.hide()
    this.fetchTideData()
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
      this.fetchTideData()
    }
  }

  fetchTideData() {
    this.setState({ loading: true })
    fetchLocation().then((location) => {
      fetchCityName(location).then((city) => {
        this.setState({ city })
      })

      makeRequest(location).then((json) => {
        this.setState({
          weather: json.weather,
          tideChart: json.tides.hourly,
          tideTable: json.tides.formatted,
          todaysTides: json.tides.todaysTides,
          loading: false,
          currentTideDirection: json.tides.currentTideDirection,
        })
      })
    })
  }

  render() {
    const { tideChart, weather, city, tideTable, todaysTides, currentTideDirection, loading } = this.state

    if (loading) {
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
          tideDirection={currentTideDirection}
          city={city}
          tides={tideTable}
        />

        <WeatherRow weather={weather.currentWind} icon="wind" />
        <WeatherRow weather={weather.currentWeather} icon={weather.icon} />

        <TodaysTides
          tideTable={tideTable}
          todaysTides={todaysTides}
        />

        <DetailPanel
          wind={weather.wind}
          tideChart={tideChart}
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
    marginTop: -62,
  },
})
