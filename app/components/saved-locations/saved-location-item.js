import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import BaseStyle from '../../base-styles'

const SavedLocationItem = ({ city }) => (
  <View style={styles.container}>
    <Text style={[BaseStyle.largeHeaderText, styles.cityNameText]}>{city}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 80,
    justifyContent: 'center',
    paddingLeft: BaseStyle.baseSpacing,
  },
})

export default SavedLocationItem
