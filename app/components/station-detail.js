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

 get getTideDirection() {
   const { currentTide } = this.state;

   if (currentTide.tide === 'high') {
     return 'Incoming tide at';
   } else {
     return 'Outgoing tide at'
   }
  }

  render() {
    const { allTides, weather, city } = this.state;

    if (!weather) {
      return null;
    }

    return (
      <ScrollView contentContainerStyle={{marginTop: 54}}>
        <View style={styles.container}>
          <Text style={styles.tidePhrase}>{this.getTideDirection} {city}</Text>
          <Text style={styles.weatherRow}>{weather.currentWeather}</Text>
          <Text style={styles.weatherRow}>{weather.currentWind}</Text>

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
    flex: 1,
    backgroundColor: BaseStyle.baseBackgroundColor,
  },
  tidePhrase: {
    fontSize: BaseStyle.phraseFontSize,
    color: BaseStyle.baseTextColor,
    marginTop: 20,
    marginBottom: 20,
  },
  weatherRow: {
    fontSize: BaseStyle.baseFontSize,
    color: BaseStyle.baseTextColor,
    marginBottom: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
