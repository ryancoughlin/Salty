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
import NextTideRow from './next-tide-row'

import tideIcon from '../../assets/images/tide.png'

export default class FutureTides extends Component {
  formatTideTime(time) {
    const foo = moment(time, 'YYYY-MM-DD HH:mm').format('hh:mma')
    return foo
  }

  formatTideHeight(height) {
    return `${height.toFixed(1)}'`
  }

  render() {
    const { tideTable, nextTides } = this.props

    return (
      <View style={styles.container}>
        <IconHeader
          text="Future Tides"
          icon={tideIcon}
          rightLabel={<ViewTideListButton tideTable={tideTable} />}
        />
        <NextTideRow
          tide={nextTides.high}
          type="High"
        />
        <NextTideRow
          tide={nextTides.low}
          type="Low"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 34,
  },
  futureTideRow: {
    marginLeft: 61,
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
