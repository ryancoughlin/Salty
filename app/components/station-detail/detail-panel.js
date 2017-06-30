import React from 'react'
import { View } from 'react-native'

import TideChart from './tide-chart'
import WindChart from './wind-chart'
import WaterTemperatureChart from './water-temperature-chart'

const DetailPanel = ({ wind, tideChart, waterTemperature }) =>
  <View>
    <TideChart tides={tideChart} />
    <WindChart wind={wind} />
    <WaterTemperatureChart waterTemperature={waterTemperature} />
  </View>

export default DetailPanel
