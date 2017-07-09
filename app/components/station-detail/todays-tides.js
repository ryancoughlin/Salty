import React from 'react'
import { StyleSheet, View } from 'react-native'

import _ from 'lodash'
import IconHeader from '../icon-header'
import ViewTideListButton from './view-tide-list-button'
import TodayTideRow from './today-tide-row'
import tideIcon from '../../assets/images/tide.png'

const TodaysTides = ({ tideTable, todaysTides, toggleModal }) =>
  (<View style={styles.container}>
    <IconHeader
      text="Today's Tides"
      icon={tideIcon}
      rightLabel={<ViewTideListButton tideTable={tideTable} toggleModal={toggleModal} />}
    />
    {_.map(todaysTides, (tide, i) => <TodayTideRow tide={tide} key={i} />)}
  </View>)

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 40,
  },
})

export default TodaysTides
