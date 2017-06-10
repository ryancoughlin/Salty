import React, { Component } from 'react'

import FullWidthButton from './full-width-button'

export default class SaveButtonLocation extends Component {
  saveLocation() {
    const { city, location, saveLocation } = this.props

    return saveLocation({
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
