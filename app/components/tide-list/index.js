import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
} from 'react-native'

import Navigation from '../navigation'
import TideList from '../tide-list'

export default class extends Component {
  get initialRoute() {
    return {
      title: '',
      component: TideList,
      renderLeftButton: this.renderLeftButton.bind(this),
      sceneProps: {
        close: this.props.close,
        tides: this.props.tides
      },
    }
  }

  renderLeftButton() {
    return (
      <TouchableOpacity
        onPress={this.props.close} >
        <Text>Close</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return <Navigation initialRoute={this.initialRoute} />
  }
}
