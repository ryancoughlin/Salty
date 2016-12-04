import React, { Component } from 'react'
import {
} from 'react-native'

import downArrow from '../../assets/images/low-tide-arrow.png'
import upArrow from '../../assets/images/high-tide-arrow.png'
import SmallIcon from '../small-icon'

export default class extends Component {
  get tideDirectionArrow() {
    const { direction } = this.props

    if (direction === 'high') {
      return upArrow
    } else {
      return downArrow
    }
  }

  render() {
    return (
      <SmallIcon source={this.tideDirectionArrow} />
    )
  }
}
