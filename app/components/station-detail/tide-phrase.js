import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import BaseStyle from '../../base-styles'
import RemainingTideTime from './remaining-tide-time'
import TidePhraseDirectionArrow from './tide-phrase-direction-arrow'
import TideDirectionPhrase from './tide-direction-phrase'

const TidePhrase = class extends Component {
  render() {
    const { city, tides } = this.props.current
    const { isPurchased } = this.props

    if (!tides) {
      return null
    }

    return (
      <View style={styles.container}>
        <TidePhraseDirectionArrow tides={tides} style={styles.arrow} />
        <View style={styles.tidePhrase}>
          <View style={styles.phraseRow}>
            <TideDirectionPhrase
              tides={tides}
              style={[BaseStyle.tidePhrase, styles.tideDirectionText]}
            />
            <Text style={BaseStyle.tidePhrase} allowFontScaling={false}>
              Tide
            </Text>
          </View>
          <View style={styles.phraseRow}>
            <Text style={BaseStyle.tidePhrase} allowFontScaling={false}>
              in
            </Text>
            <TouchableOpacity onPress={this.props.toggleModal}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[BaseStyle.tidePhrase, styles.cityText]}
                allowFontScaling={false}
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
    marginVertical: BaseStyle.largeSpacing,
  },
  arrow: {
    marginTop: 10,
  },
  phraseRow: {
    flexDirection: 'row',
  },
  tideDirectionText: {
    color: BaseStyle.baseTextColor,
  },
  cityText: {
    width: width - 100,
    marginBottom: BaseStyle.tinySpacing,
    textDecorationLine: 'underline',
    textDecorationColor: BaseStyle.subtleColor,
  },
})

const mapStateToProps = ({ stations }) => ({
  current: stations.current,
  isPurchased: stations.isPurchased,
})

export default connect(mapStateToProps)(TidePhrase)
