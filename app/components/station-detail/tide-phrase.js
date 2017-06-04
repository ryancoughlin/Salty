import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import BaseStyle from '../../base-styles'
import TideDirectionArrow from '../tide-list/tide-direction-arrow'
import RemainingTideTime from './remaining-tide-time'
import findTideDirection from '../../utils/find-tide-direction'

export default class TidePhrase extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tideDirection: findTideDirection(props.todaysTides),
    }
  }

  render() {
    const { city, tides, navigate } = this.props
    const { tideDirection } = this.state

    return (
      <View style={styles.container}>
        <TideDirectionArrow direction={tideDirection} style={styles.arrow} largeTideArrow />
        <View style={styles.tidePhrase}>
          <View style={styles.tideDirectionRow}>
            <Text style={[BaseStyle.tidePhrase, styles.tideDirectionText]}>
              {tideDirection}
            </Text>
            <Text style={BaseStyle.tidePhrase}>Tide</Text>
          </View>
          <View style={styles.tideLocationRow}>
            <Text style={BaseStyle.tidePhrase}>
              in
            </Text>
            <TouchableOpacity onPress={() => navigate('Map')}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[BaseStyle.tidePhrase, styles.cityText]}
              >
                {city}
              </Text>
            </TouchableOpacity>
          </View>
          <RemainingTideTime tides={tides} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: BaseStyle.largeSpacing,
  },
  arrow: {
    marginTop: 10,
  },
  tideDirectionRow: {
    flexDirection: 'row',
  },
  tideDirectionText: {
    color: BaseStyle.baseTextColor,
  },
  tideLocationRow: {
    flex: 1,
    flexDirection: 'row',
  },
  cityText: {
    marginBottom: BaseStyle.tinySpacing,
    marginRight: BaseStyle.baseSpacing,
    textDecorationLine: 'underline',
    textDecorationColor: BaseStyle.subtleColor,
  },
})
