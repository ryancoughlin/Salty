import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import moment from 'moment'
import BaseStyle from '../../base-styles'
import IconHeader from '../icon-header'
import ViewTideListButton from './view-tide-list-button'

import tideIcon from '../../assets/images/tide.png'

export default class FutureTides extends Component {
  formatTideTime(time) {
    const foo = moment(time, 'YYYY-MM-DD HH:mm').format('hh:mma')
    console.log(foo)
    return foo
  }

  formatTideHeight(height) {
    return `${height.toFixed(1)}'`
  }

  render() {
    const { tideTable, futureTides } = this.props

    return (
      <View style={styles.container}>
        <IconHeader
          text="Future Tides"
          icon={tideIcon}
          rightLabel={<ViewTideListButton tideTable={tideTable}/>}
        />

        <View style={styles.futureTideRow}>
          <Text style={styles.futureTideType}>High</Text>
          <Text style={styles.futureTideInfo}>
            {this.formatTideTime(futureTides.high.time)} / {this.formatTideHeight(futureTides.high.height)}
          </Text>
        </View>
        <View style={styles.futureTideRow}>
          <Text style={styles.futureTideType}>Low</Text>
          <Text style={styles.futureTideInfo}>{this.formatTideTime(futureTides.low.time)} / {this.formatTideHeight(futureTides.low.height)}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 34,
  },
  futureTideRow: {
    marginLeft: 73,
    flexDirection: 'row',
    marginBottom: 5,
  },
  futureTideType: {
    width: 40,
    fontWeight: '600',
    fontSize: 14,
  },
  futureTideInfo: {
    fontFamily: BaseStyle.numericFontFamily,
    fontSize: 14,
  },
})
