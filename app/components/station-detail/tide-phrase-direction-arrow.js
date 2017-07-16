import React, { Component } from 'react'

import TideDirectionArrow from '../tide-list/tide-direction-arrow'
import findNextTide from '../../utils/find-next-tide'

export default class extends Component {
  get tideDirection() {
    const nextTide = findNextTide(this.props.tides)
    return nextTide.type
  }

  render() {
    return (
      <TideDirectionArrow direction={this.tideDirection} style={this.props.style} />
    )
  }
}
