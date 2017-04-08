import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import ChartPanelHeader from './chart-panel-header'
import BaseStyle from '../../base-styles'
// import chartEdges from '../../assets/images/chart/chart-edges.png'

const ChartPanel = ({ headerText, bodyText, children }) => (
  <View style={styles.container}>
    <ChartPanelHeader
      headerText={headerText}
      bodyText={bodyText}
    />
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    shadowColor: BaseStyle.darkBackgroundColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.07,
    shadowRadius: 20,
    marginBottom: BaseStyle.baseSpacing,
    marginHorizontal: BaseStyle.baseSpacing,
    borderRadius: 2,
  },
  bodyText: {
    fontSize: 14,
    marginLeft: 60,
  },
})

export default ChartPanel
