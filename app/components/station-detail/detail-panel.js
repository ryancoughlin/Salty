import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import ScrollableTabView from 'react-native-scrollable-tab-view'
import SlidingUpPanel from 'react-native-sliding-up-panel'
import DetailPanelHeader from './detail-panel-header'
import TideChart from './tide-chart'
import WindChart from './wind-chart'

export default class DetailPanel extends Component {
  render() {
    const { wind, tideChart } = this.props

  tabBar() {
    return <DetailPanelHeader tabData={this.tabs} />
  }

  render() {
    console.log(this.tabs)
    return (
      <View style={styles.container}>
        <SlidingUpPanel
          handlerHeight={80}
          handlerDefaultView={<DetailPanelHeader tabData={this.tabs} />}
          containerMaximumHeight={500}
          allowStayMiddle={false}
        >
          <ScrollView horizontal pagingEnabled>
            <TideChart tides={tideChart} />
            <WindChart wind={wind} />
          </ScrollView>
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
