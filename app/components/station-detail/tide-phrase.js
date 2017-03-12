import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

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
    const { city, tides } = this.props
    const { tideDirection } = this.state
    return (
      <View style={styles.container}>
        <TideDirectionArrow
          direction={tideDirection}
          style={styles.arrow}
          largeTideArrow
        />
        <View style={styles.tidePhrase}>
          <View style={styles.tidePhraseRow}>
            <Text style={[styles.loudHeader, styles.tideDirectionText]}>
              {tideDirection}
            </Text>
            <Text style={[styles.loudHeader, styles.fadedPhraseText]}>Tide</Text>
          </View>
          <Text style={[styles.loudHeader, styles.fadedPhraseText]}>
            in {city}
          </Text>
          <RemainingTideTime tides={tides} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 40,
    marginTop: 40,
  },
  arrow: {
    marginTop: 14,
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
