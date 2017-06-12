import React from 'react'
import { View } from 'react-native'

import TideChart from './tide-chart'
import WindChart from './wind-chart'
import WaterTemperatureChart from './water-temperature-chart'

const DetailPanel = ({ wind, tideChart, waterTemperature }) =>
  <View>
    <WindChart wind={wind} />
    <TideChart tides={tideChart} />
    <WaterTemperatureChart waterTemperature={waterTemperature} />
  </View>

export default DetailPanel
