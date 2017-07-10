import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import BaseStyle from '../../base-styles'
import TideDirectionArrow from '../tide-list/tide-direction-arrow'
import RemainingTideTime from './remaining-tide-time'
import findTideDirection from '../../utils/find-tide-direction'

export default class TidePhrase extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tideDirection: findTideDirection(props.tides)
    }
  }

  render() {
    const { city, tides, toggleModal } = this.props
    const { tideDirection } = this.state

    return (
      <View style={styles.container}>
        <TideDirectionArrow
          direction={tideDirection}
          style={styles.arrow}
          largeTideArrow
        />
        <View style={styles.tidePhrase}>
          <View style={styles.phraseRow}>
            <Text style={[BaseStyle.tidePhrase, styles.tideDirectionText]}>
              {tideDirection}
            </Text>
            <Text style={BaseStyle.tidePhrase}>Tide</Text>
          </View>
          <View style={styles.phraseRow}>
            <Text style={BaseStyle.tidePhrase}>in</Text>
            <TouchableOpacity onPress={toggleModal}>
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
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: BaseStyle.largeSpacing
  },
  arrow: {
    marginTop: 10
  },
  phraseRow: {
    flexDirection: 'row'
  },
  tideDirectionText: {
    color: BaseStyle.baseTextColor
  },
  cityText: {
    width: width - 100,
    marginBottom: BaseStyle.tinySpacing,
    textDecorationLine: 'underline',
    textDecorationColor: BaseStyle.subtleColor
  }
})
