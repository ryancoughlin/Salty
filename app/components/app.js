import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import _ from 'lodash';
import moment from 'moment';
import Geocoder from 'react-native-geocoder';

import TideList from './tide-list';

export default class extends Component {
  constructor(props, context) {
    super(...arguments);

    this.state = {};
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords)
      const { latitude, longitude } = position.coords;

      Geocoder.geocodePosition({lat: latitude, lng: longitude}).then(location => {
        const placemark = location[0].locality;
        this.setState({ city: placemark });
      });

      const baseURL = 'http://localhost:8000/api/get-data';

      fetch(`${baseURL}?lat=${latitude}&lng=${longitude}`).then(res => res.json()).then(json => {
        const now = moment();
        const todayKey = now.format('DD/MM/YYYY');
        const todaysTides = json.tides[todayKey];
        console.log(todaysTides);

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
      return 'current tide is outgoing';
   } else {
     return 'current tide incoming'
   }
 }

  render() {
    const { allTides, weather, city } = this.state;

    if (!weather) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text>{this.getTideDirection} {city}</Text>
        <Text style={styles.welcome}>
          Your location is {this.state.latitude}, {this.state.longitude}
        </Text>
        <Text style={styles.instructions}>
          {weather.currentWeather}
        </Text>
        <TideList tides={allTides}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
