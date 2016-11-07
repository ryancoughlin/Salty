import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native'

import Navigation from '../components/navigation'
import stationDetailRoute from '../routes/station-detail'
import BaseStyle from '../base-styles'

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={BaseStyle.baseBackgroundColor}
          barStyle='light-content'
        />
        <Navigation initialRoute={stationDetailRoute} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
