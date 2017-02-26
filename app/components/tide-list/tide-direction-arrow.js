import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
} from 'react-native'

import downArrow from '../../assets/images/low-tide-arrow.png'
import upArrow from '../../assets/images/high-tide-arrow.png'

export default class extends Component {
  get tideDirectionArrow() {
    if (this.props.direction === 'high') {
      return upArrow
    } else {
      return downArrow
    }
  }

  render() {
    return (
      <Image
        source={this.tideDirectionArrow}
        style={styles.container}
      />
    )
  }
}

const styles = ({
  container: {
    marginRight: 20,
  },
})
