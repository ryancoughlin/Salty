import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import SlidingUpPanel from 'react-native-sliding-up-panel'
import DetailPanelHeader from './detail-panel-header'
import TideChart from './tide-chart'
import WindChart from './wind-chart'

export default class DetailPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tideChartVisible: true,
    }
  }

  render() {
    const { wind, tideChart } = this.props
    const { tideChartVisible } = this.state

    return (
      <View style={styles.container}>
        <SlidingUpPanel
          handlerHeight={70}
          handlerDefaultView={(
            <DetailPanelHeader
              showTideChart={() => this.setState({ tideChartVisible })}
              showWindChart={() => this.setState({ tideChartVisible: !tideChartVisible })}
            />
          )}
          allowStayMiddle={false}
          containerMaximumHeight={280}
        >
          { tideChartVisible
            ? <TideChart tides={tideChart} />
            : <WindChart wind={wind} />
          }
        </SlidingUpPanel>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    bottom: 0,
  },
})
