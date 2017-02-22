import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import BaseStyle from '../../base-styles'
import TideDirectionArrow from '../tide-list/tide-direction-arrow'
import RemainingTideTime from './remaining-tide-time'

export default class TidePhrase extends Component {
  get buildTidePhrase() {
    const { tideDirection } = this.props

    if (tideDirection === 'high') {
      return 'Incoming'
    } else {
      return 'Outgoing'
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
        <View style={styles.tidePhrase}>
          <View style={styles.tidePhraseRow}>
            <Text style={[styles.loudHeader, styles.tideDirectionText]}>
              {this.buildTidePhrase}
            </Text>
            <Text style={[styles.loudHeader, styles.fadedPhraseText]}>Tide</Text>
          </View>
          <Text style={[styles.loudHeader, styles.fadedPhraseText]}>
            in {city}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 40,
    marginTop: 100,
  },
  arrowContainer: {
    marginTop: 12,
  },
  tidePhrase: {
    width: 600,
  },
  tidePhraseRow: {
    flexDirection: 'row',
  },
  tideDirectionText: {
    color: BaseStyle.baseTextColor,
  },
  loudHeader: {
    fontSize: BaseStyle.phraseFontSize,
    fontWeight: 'bold',
    color: '#E5E7E9',
    marginRight: 8,
    lineHeight: 60,
  },
})
