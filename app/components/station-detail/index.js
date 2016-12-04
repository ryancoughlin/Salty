import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

import _ from 'lodash'
import moment from 'moment'

import BaseStyle from '../../base-styles'
import TidePhrase from './tide-phrase'
import WeatherRow from './weather-row'
import Tides from './tides'
import Wind from './wind'
import makeRequest from '../../lib/request'
import { fetchLocation, fetchCityName } from '../../lib/location'

export default class StationDetail extends Component {
  constructor(props) {
    super(props)

    this.state = { weather: null }
  }

  componentDidMount() {
    fetchLocation().then(location => {
      fetchCityName(location).then(city => {
        this.setState({ city: city })
      })

      makeRequest(location).then(json => {
        const now = moment()
        const todayKey = now.format('MM/DD/YYYY')
        const todaysTides = json.tides.formatted[todayKey]

        const nextTideIndex = _.findIndex(todaysTides, function(tide) {
          const tideTime = moment(tide.time, 'YYYY-MM-DD HH:mm')
          return now.diff(tideTime) <= 0
        })

        if(nextTideIndex == -1) {
          console.log('no tides for current day')

          const tomorrowKey = moment().add(1, 'days').format('MM/DD/YYYY')
          const followingNextDayTide = _.first(json.tides.formatted[tomorrowKey])

          console.log('tomorrowKey', tomorrowKey)
          console.log('first tide of tomorrow', followingNextDayTide)

          this.setState({
            nextTide: followingNextDayTide,
            currentTide,
          })
        } else {
          const nextTide = todaysTides[nextTideIndex]
          const currentTide = todaysTides[nextTideIndex - 1]
          this.setState({
            nextTide,
            currentTide,
          })
        }

        this.setState({
          weather: json.weather,
          wind: json.weather.wind,
          tideChart: json.tides.hourly,
          tideTable: json.tides.formatted,
        })
      })
    })
  }

  render() {
    const { tideChart, weather, city, currentTide, tideTable } = this.state

    if (!weather) {
      return null
    }

    return (
      <ScrollView style={styles.container}>
        <View>
          <TidePhrase
            style={styles.tidePhrase}
            tideDirection={currentTide}
            city={city}
          />

          <WeatherRow weather={weather.currentWind} icon='wind' />
          <WeatherRow weather={weather.currentWeather} icon='wind' />

          <Tides
            tideChart={tideChart}
            tideTable={tideTable}
            />
          <Wind wind={weather.wind} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseStyle.baseBackgroundColor,
  }
})
