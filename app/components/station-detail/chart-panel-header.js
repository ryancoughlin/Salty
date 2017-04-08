import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import BaseStyle from '../../base-styles'

const ChartPanelHeader = ({ headerText, bodyText }) => (
  <View style={styles.container}>
    <Text style={BaseStyle.headerStyle}>{headerText}</Text>
    <Text style={styles.bodyText}>{bodyText}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingVertical: BaseStyle.baseSpacing,
    paddingHorizontal: BaseStyle.baseSpacing,
    marginLeft: BaseStyle.baseSpacing,
  },
  bodyText: {
    fontSize: 14,
    marginTop: BaseStyle.tinySpacing,
  },
})

export default ChartPanelHeader
