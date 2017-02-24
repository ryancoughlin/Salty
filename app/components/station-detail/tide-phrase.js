import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import BaseStyle from '../../base-styles'
import TideDirectionArrow from '../tide-list/tide-direction-arrow'
import RemainingTideTime from './remaining-tide-time'

const TidePhrase = ({ city, tideDirection, nextTide }) => (
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
          {tideDirection}
        </Text>
        <Text style={[styles.loudHeader, styles.fadedPhraseText]}>Tide</Text>
      </View>
      <Text style={[styles.loudHeader, styles.fadedPhraseText]}>
        in {city}
      </Text>
      <RemainingTideTime nextTide={nextTide} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 50,
    marginTop: 120,
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

export default TidePhrase
