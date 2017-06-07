import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import BaseStyle from '../base-styles'
import SmallIcon from './small-icon'

const IconHeader = ({ rightLabel, icon, text }) =>
  <View style={styles.container}>
    <View style={styles.leftLabel}>
      <SmallIcon source={icon} />
      <Text style={BaseStyle.secondaryHeader}>{text}</Text>
    </View>
    {rightLabel}
  </View>

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: BaseStyle.baseSpacing,
    marginBottom: 4,
    alignItems: 'flex-end',
  },
  leftLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default IconHeader
