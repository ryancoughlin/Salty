import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import BaseStyle from '../base-styles'
import SmallIcon from './small-icon'

export default class extends Component {
  render() {
    const { rightLabel } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.leftLabel}>
          <SmallIcon source={this.props.icon} />
          <Text style={styles.header}>{this.props.text}</Text>
        </View>
        {rightLabel}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: BaseStyle.smallSpacing,
    marginRight: BaseStyle.baseSpacing,
    alignItems: 'flex-end',
  },
  leftLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    color: BaseStyle.baseTextColor,
    fontWeight: '600',
  },
})
