import React, { Component } from 'react'
import {
  Image,
} from 'react-native'

import downArrow from '../../assets/images/low-tide-arrow.png'
import upArrow from '../../assets/images/high-tide-arrow.png'
import downArrowLarge from '../../assets/images/low-tide-arrow-large.png'
import upArrowLarge from '../../assets/images/high-tide-arrow-large.png'


export default class extends Component {
  get tideDirectionArrow() {
    var direction = 'high'
    var incomingArrow = upArrow
    var outgoingArrow = downArrow

    if (this.props.largeTideArrow) {
      direction = 'Incoming'
      incomingArrow = upArrowLarge
      outgoingArrow = downArrowLarge
    }

    if (this.props.direction === direction) {
      return incomingArrow
    } else {
      return outgoingArrow
    }
  }

  render() {
    return (
      <Image
        source={this.tideDirectionArrow}
        style={this.props.style}
      />
    )
  }
}
