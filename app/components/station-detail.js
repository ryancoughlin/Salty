import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

import _ from 'lodash'
import moment from 'moment'
import Geocoder from 'react-native-geocoder'
import TideListNavigator from './tide-list/index'
import BaseStyle from '../base-styles'
import SaltyModal from './modal'
import TidePhrase from './station-detail/tide-phrase'
import WeatherRow from './station-detail/weather-row'
import Tides from './station-detail/tides'

export default class StationDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tideListModalVisible: false,
    }
  }

  viewTideList() {
    this.setState({
      tideListModalVisible: true,
    })
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      Geocoder.geocodePosition({lat: latitude, lng: longitude}).then(location => {
        const placemark = location[0].locality;
        this.setState({ city: placemark });
      });

      const baseURL = 'http://localhost:8000/api/get-data';

      fetch(`${baseURL}?lat=${latitude}&lng=${longitude}`).then(res => res.json()).then(json => {
        const now = moment();
        const todayKey = now.format('MM/DD/YYYY');
        const todaysTides = json.tides[todayKey];

        const nextTideIndex = _.findIndex(todaysTides, function(tide) {
          const tideTime = moment(tide.time, 'YYYY-MM-DD HH:mm')
          return now.diff(tideTime) <= 0;
        });

        // IF NEXT TIDE IS 0, GET PREVIOUS DAY
        // _.last(json.tides[yesterdayKey].tides)

        const nextTide = todaysTides[nextTideIndex];
        const currentTide = todaysTides[nextTideIndex - 1];

        this.setState({
          latitude,
          longitude,
          nextTide,
          currentTide,
          weather: json.weather,
          allTides: json.tides,
        })
      });
    },
     (error) => console.log(error)
   );
 }

  render() {
    const { allTides, weather, city, currentTide } = this.state;

    if (!weather) {
      return null;
    }

    return (
      <ScrollView contentContainerStyle={{marginTop: 54}}>
        <View style={styles.container}>
          <TidePhrase
            style={styles.tidePhrase}
            tideDirection={currentTide.tide}
            city={city}
          />

          <WeatherRow weather={weather.currentWeather} icon='wind' />
          <WeatherRow weather={weather.currentWind} icon='wind' />

          <Tides />

          <TouchableOpacity onPress={this.viewTideList.bind(this)}>
            <Text>View Tides</Text>
          </TouchableOpacity>

          <SaltyModal
            animatedType="slide"
            visible={this.state.tideListModalVisible}
          >
            <TideListNavigator
              close={() => this.setState({ tideListModalVisible: false })}
              tides={allTides}
            />
          </SaltyModal>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BaseStyle.baseBackgroundColor,
  },
});
