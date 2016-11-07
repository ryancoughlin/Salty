import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native'

import BaseStyle from '../../base-styles'
import SmallIcon from '../small-icon'
import windIcon from '../../assets/images/wind.png'

export default class TidePhrase extends Component {

  get prepareIcon() {
    if (this.props.wind === "wind") {
      return windIcon
    } else {
      return windIcon
    }
  }

  render() {
    const { weather, icon } = this.props;

    return (
      <View style={styles.container}>
        <SmallIcon source={this.prepareIcon} />
        <Text style={styles.weather}>{weather}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  arrowContainer: {
    marginTop: 11
  },
  weather: {
    fontSize: BaseStyle.baseFontSize,
    color: BaseStyle.baseTextColor,
  },
});
