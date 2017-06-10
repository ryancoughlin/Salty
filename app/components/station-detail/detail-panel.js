import React from 'react'
import { View } from 'react-native'

import TideChart from './tide-chart'
import WindChart from './wind-chart'

const DetailPanel = ({ wind, tideChart }) =>
  <View>
    <TideChart tides={tideChart} />
    <WindChart wind={wind} />
  </View>

export default DetailPanel
