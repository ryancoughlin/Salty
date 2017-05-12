import React, { Component } from 'react'

import SmallIcon from '../small-icon'
import downArrow from '../../assets/images/low-tide-arrow.png'
import upArrow from '../../assets/images/high-tide-arrow.png'

export default class extends Component {
  get tideDirectionArrow() {
    let direction = 'high'

    if (this.props.largeTideArrow) {
      direction = 'Incoming'
    }

    if (this.props.direction === direction) {
      return upArrow
    } else {
      return downArrow
    }
  }

  render() {
    return (
      <SmallIcon
        source={this.tideDirectionArrow}
        style={this.props.style}
      />
    )
  }
}
