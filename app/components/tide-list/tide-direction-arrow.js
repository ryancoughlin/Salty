import React, { Component } from 'react'
import {
  Image,
  View,
  StyleSheet,
} from 'react-native'

import BaseStyle from '../../base-styles'
import downArrow from '../../assets/images/low-tide-arrow.png'
import upArrow from '../../assets/images/high-tide-arrow.png'

export default class extends Component {
  get tideDirectionArrow() {
    const { direction } = this.props

    if(direction === 'high') {
      return upArrow
    } else {
      return downArrow
    }
  }

  render() {
    return (
      <View style={styles.imageContainer}>
        <Image source={this.tideDirectionArrow} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 16,
    height: 16,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
})
