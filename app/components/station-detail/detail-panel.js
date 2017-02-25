import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import ScrollableTabView from 'react-native-scrollable-tab-view'
import SlidingUpPanel from 'react-native-sliding-up-panel'
import DetailPanelHeader from './detail-panel-header'
import TideChart from './tide-chart'
import WindChart from './wind-chart'

export default class DetailPanel extends Component {
  get tabs() {
    const { wind, tideChart } = this.props
    return [
      {
        title: 'Available Sessions',
        component: <WindChart wind={wind} />,
        key: 'foo',
      },
      {
        title: 'Booked Sessions',
        component: <TideChart tides={tideChart} />,
        key: 'bar',
      },
    ]
  }

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
          <ScrollableTabView renderTabBar={this.tabBar.bind(this)}>
            {this.tabs.map(tab => tab.component)}
          </ScrollableTabView>
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
