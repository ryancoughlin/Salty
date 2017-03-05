import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import IconHeader from '../icon-header'

const ChartPanelHeader = ({ icon, headerText, bodyText }) => (
  <View style={styles.container}>
    <IconHeader
      icon={icon}
      text={headerText}
    />
    <Text style={styles.bodyText}>{bodyText}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  bodyText: {
    fontSize: 14,
    marginLeft: 60,
  },
})

export default ChartPanelHeader
