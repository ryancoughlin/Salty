import React, { Component } from 'react'
import { Animated } from 'react-native'
import Animation from 'lottie-react-native'

import windAnimation from '../../../animations/wind.json'

export default class FutureTides extends Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: new Animated.Value(0),
    }
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
    }).start()
  }

  render() {
    return (
      <Animation
        style={{
          width: 20,
          height: 20,
        }}
        source={windAnimation}
      />
    )
  }
}
