import React from 'react'
import { StyleSheet, View } from 'react-native'

import IconHeader from '../icon-header'
import ViewTideListButton from './view-tide-list-button'
import TodayTideRow from './today-tide-row'
import tideIcon from '../../assets/images/tide.png'

const TodaysTides = ({ todaysTides, toggleModal }) =>
  (<View style={styles.container}>
    <IconHeader
      text="Today's Tides"
      icon={tideIcon}
      rightLabel={<ViewTideListButton toggleModal={toggleModal} />}
    />
    {todaysTides.map(tide => <TodayTideRow tide={tide} key={tide.height} />)}
  </View>)

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 40,
  },
})

export default TodaysTides
