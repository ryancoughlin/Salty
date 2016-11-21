import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import BaseStyle from '../../base-styles'
import TideDirectionArrow from '../tide-list/tide-direction-arrow'

export default class TidePhrase extends Component {
  get buildTidePhrase() {
    const { tideDirection } = this.props

    if (tideDirection === 'high') {
      return 'Incoming tide at'
    } else {
      return 'Outgoing tide at'
    }
  }

  render() {
    const { city, tideDirection } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.arrowContainer}>
          <TideDirectionArrow
            direction={tideDirection}
            style={styles.arrow}
          />
        </View>
        <Text style={styles.tidePhrase}>{this.buildTidePhrase} {city}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  arrowContainer: {
    marginTop: 11
  },
  tidePhrase: {
    fontSize: BaseStyle.phraseFontSize,
    color: BaseStyle.baseTextColor,
  },
})
