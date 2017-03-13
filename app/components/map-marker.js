import React, { Component } from 'react'
import {
  Image,
} from 'react-native'

import stationMarker from '../assets/images/station-marker.png'

export default class MapMarker extends Component {
  render() {
    return (
      <Image source={stationMarker} />
    )
  }
}
