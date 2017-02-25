import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import TidePhrase from './tide-phrase'
import WeatherRow from './weather-row'
import FutureTides from './future-tides'
import DetailPanel from './detail-panel'
import makeRequest from '../../lib/request'
import { fetchLocation, fetchCityName } from '../../lib/location'

export default class StationDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: null,
    }
  }

  componentDidMount() {
    SplashScreen.hide()

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
          currentTideDirection: json.tides.currentTideDirection,
        })
      })
    })
  }

  render() {
    const { tideChart, weather, city, tideTable, todaysTides, currentTideDirection } = this.state

    if (!weather) {
      return (
        <ActivityIndicator
          style={styles.loadingIndicator}
          size="large"
        />
      )
    }

    return (
      <View style={styles.container}>
        <TidePhrase
          style={styles.tidePhrase}
          tideDirection={currentTideDirection}
          city={city}
          todaysTides={todaysTides}
        />

        <WeatherRow weather={weather.currentWind} icon="wind" />
        <WeatherRow weather={weather.currentWeather} icon={weather.icon} />

        <FutureTides
          tideTable={tideTable}
          todaysTides={todaysTides}
        />

        <DetailPanel
          wind={weather.wind}
          tideChart={tideChart}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -62,
  },
})
