import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

import BaseStyle from '../base-styles'
import SmallIcon from './small-icon'
import moment from 'moment'

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SmallIcon source={this.props.icon}/>
        <Text style={styles.header}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    height: 30,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    color: BaseStyle.baseTextColor,
  },
})
