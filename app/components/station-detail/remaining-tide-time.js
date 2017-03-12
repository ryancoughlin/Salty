import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import _ from 'lodash'
import moment from 'moment'
import findNextTide from '../../utils/find-next-tide'
import BaseStyle from '../../base-styles'

export default class RemainingTideTime extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nextTide: findNextTide(this.props.tides),
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.forceUpdate()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  get formattedTime() {
    const time = moment(this.state.nextTide.time)
    const diff = moment.duration(time.diff(moment()))

    return `${this.padNumbers(diff.hours())}:${this.padNumbers(diff.minutes())}:${this.padNumbers(diff.seconds())} `
  }

  get formattedTideDirection() {
    return `UNTIL ${this.state.nextTide.tide.toUpperCase()}`
  }

  padNumbers(number) {
    return _.padStart(number, 2, 0)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.futureTideInfo}>
          {this.formattedTime}
          {this.formattedTideDirection}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 2,
  },
  futureTideInfo: {
    fontFamily: BaseStyle.numericFontFamily,
    fontSize: 12,
  },
})
