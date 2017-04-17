import React, { Component } from 'react'
import { View } from 'react-native'

import FullWidthButton from './full-width-button'

export default class RemoveStationButton extends Component {
  deleteLocation() {
    return this.props.deleteLocation(this.props.city)
  }

  render() {
    return <FullWidthButton text="Remove Station" onPress={() => this.deleteLocation()} />
  }
}
