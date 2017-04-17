import React, { Component } from 'react'
import { View } from 'react-native'

import FullWidthButton from './full-width-button'

export default class SaveButtonLocation extends Component {
  saveLocation() {
    const { city, location } = this.props

    return this.props.saveLocation({
      location: {
        latitude: location.latitude,
        longitude: location.longitude,
      },
      city,
    })
  }

  render() {
    return <FullWidthButton text="Save Station" onPress={() => this.saveLocation()} />
  }
}
