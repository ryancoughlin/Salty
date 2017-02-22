import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import SlidingUpPanel from 'react-native-sliding-up-panel'
import DetailPanelHeader from './detail-panel-header'
import TideChart from './tide-chart'

import BaseStyle from '../../base-styles'

export default class DetailPanel extends Component {
  render() {
    const { tideChart } = this.props

    return (
      <View style={styles.container}>
        <SlidingUpPanel
          handlerHeight={80}
          handlerDefaultView={<DetailPanelHeader />}
          containerMaximumHeight={300}
          allowStayMiddle={false}
        >
          <TideChart tides={tideChart} />
        </SlidingUpPanel>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 0,
  },
})
