import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native'

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
    console.log("mounted")
    fetchLocation().then((location) => {
      fetchCityName(location).then((city) => {
        this.setState({ city })
      })

      makeRequest(location).then((json) => {
        this.setState({
          weather: json.weather,
          tideChart: json.tides.hourly,
          tideTable: json.tides.formatted,
          nextTides: json.tides.nextTides,
          nextTide: json.tides.nextTide,
          currentTideDirection: json.tides.currentTideDirection,
        })
      })
    })
  }

  render() {
    const { tideChart, weather, city, tideTable, nextTides, nextTide, currentTideDirection } = this.state

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
          nextTide={nextTide}
        />

        <WeatherRow weather={weather.currentWind} icon="wind" />
        <WeatherRow weather={weather.currentWeather} icon={weather.icon} />

        <FutureTides
          tideTable={tideTable}
          nextTides={nextTides}
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
