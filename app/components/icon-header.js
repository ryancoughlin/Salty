import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import BaseStyle from '../base-styles'
import SmallIcon from './small-icon'
import ViewTideListButton from './station-detail/view-tide-list-button'

export default class extends Component {
  render() {
    const { rightLabel } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.leftLabel}>
          <SmallIcon source={this.props.icon}/>
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
    height: 34,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: BaseStyle.baseSpacing,
    marginRight: BaseStyle.baseSpacing,
  },
  leftLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    color: BaseStyle.baseTextColor,
    fontFamily: BaseStyle.headlineFontFamily,
  },
})
