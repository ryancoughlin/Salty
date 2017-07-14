import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import WaterLevelCard from './water-level-card'
import WindCard from './wind-card'
import WaterTemperatureCard from './water-temperature-card'

import SwellOverview from './swell-overview'

const DetailPanel = ({ current }) =>
  (<View>
    <SwellOverview />
    <WindCard />
    <WaterLevelCard />
    <WaterTemperatureCard data={current.waterTemperature} />
  </View>)

const mapStateToProps = ({ stations }) => ({
  saved: stations.saved,
  current: stations.current,
})

export default connect(mapStateToProps)(DetailPanel)
