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
          <View style={styles.tideDirectionRow}>
            <Text style={[BaseStyle.tidePhraseStyle, styles.tideDirectionText]}>
              {tideDirection}
            </Text>
            <Text style={[BaseStyle.tidePhraseStyle, styles.fadedPhraseText]}>Tide</Text>
          </View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              BaseStyle.tidePhraseStyle,
              styles.fadedPhraseText,
            ]}
          >
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
    marginBottom: BaseStyle.largeSpacing,
  },
  arrow: {
    marginTop: 10,
  },
  tidePhrase: {
    flex: 1,
  },
  tideDirectionRow: {
    flexDirection: 'row',
  },
  tideDirectionText: {
    color: BaseStyle.baseTextColor,
  },
})
