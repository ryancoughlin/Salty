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
import BaseStyle from '../base-styles'
import TidePhrase from './station-detail/tide-phrase'
import WeatherRow from './station-detail/weather-row'
import Tides from './station-detail/tides'
import makeRequest from '../lib/request'
import { fetchLocation, fetchCityName } from '../lib/location'

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
        const todaysTides = json.tides[todayKey]

        const nextTideIndex = _.findIndex(todaysTides, function(tide) {
          const tideTime = moment(tide.time, 'YYYY-MM-DD HH:mm')
          return now.diff(tideTime) <= 0
        })

        console.log(nextTideIndex)

        // const yesterdayKey = moment().add(-1, 'days').format('MM/DD/YYYY');
        // const yesterdaysTide =  _.last(json.tides[yesterdayKey].tides)
        // const currentTide = todaysTides[nextTideIndex - 1]
        const nextTide = todaysTides[nextTideIndex]
        const currentTide = todaysTides[nextTideIndex - 1]

        this.setState({
          nextTide,
          currentTide,
          weather: json.weather,
          tides: json.tides,
          rawTides: json.rawTides,
        })
      })
    })
  }

  render() {
    const { weather, city, currentTide, rawTides } = this.state

    if (!weather) {
      return null
    }

    return (
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <TidePhrase
            style={styles.tidePhrase}
            tideDirection={currentTide.tide}
            city={city}
          />

          <WeatherRow weather={weather.currentWeather} icon='wind' />
          <WeatherRow weather={weather.currentWind} icon='wind' />

          <Tides rawTides={rawTides} />

          <TouchableOpacity onPress={this.openTideList.bind(this)}>
            <Text>View Tides</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }

  openTideList() {
    this.props.navigator.showModal({
      title: 'Tides',
      screen: 'Salty.TideList',
      passProps: { tides: this.state.tides },
      navigatorStyle: BaseStyle.navigationBarStyles,
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseStyle.baseBackgroundColor,
  },
})
