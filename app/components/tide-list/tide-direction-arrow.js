import React, { Component } from 'react'

import SmallIcon from '../small-icon'
import downArrow from '../../assets/images/low-tide-arrow.png'
import upArrow from '../../assets/images/high-tide-arrow.png'
import findNextTide from '../../utils/find-next-tide'

export default class extends Component {
  get tideDirectionArrow() {
    if (this.props.direction === 'high') {
      return upArrow
    }
    return downArrow
  }

  render() {
    return (
      <SmallIcon source={this.tideDirectionArrow} style={this.props.style} />
    )
  }
}
