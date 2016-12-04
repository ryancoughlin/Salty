import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import BaseStyle from '../../base-styles'
import IconHeader from '../icon-header'
import TideChart from './tide-chart'
import ViewTideListButton from './view-tide-list-button'

import tideIcon from '../../assets/images/tide.png'

export default class extends Component {
  render() {
    const { tideChart, tideTable } = this.props

    return (
      <View style={styles.container}>
        <IconHeader
          text="Tides"
          icon={tideIcon}
          rightLabel={<ViewTideListButton tideTable={tideTable}/>}
        />
        <TideChart tides={tideChart} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: BaseStyle.largeSpacing,
  },
})
