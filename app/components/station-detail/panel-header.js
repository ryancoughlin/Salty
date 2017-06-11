import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import BaseStyle from '../../base-styles'

const PanelHeader = ({ headerText, bodyText }) => (
  <View style={styles.container}>
    <Text style={BaseStyle.secondaryHeader}>{headerText}</Text>
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
    color: BaseStyle.mediumGray,
    fontSize: 14,
    marginTop: BaseStyle.tinySpacing - 2,
  },
})

export default PanelHeader
