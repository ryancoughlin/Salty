import React from 'react'
import { View } from 'react-native'

import WaterLevelCard from './water-level-card'
import WindCard from './wind-card'
import WaterTemperatureCard from './water-temperature-card'

import SwellOverview from './swell-overview'

const DetailPanel = ({ wind, tideChart, waterTemperature }) =>
  (<View>
    <SwellOverview tides={tideChart} />
    <WindCard data={wind} />
    <WaterLevelCard data={tideChart} />
    <WaterTemperatureCard data={waterTemperature} />
  </View>)

export default DetailPanel
