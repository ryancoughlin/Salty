import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import BaseStyle from '../../base-styles'
import rightArrow from '../../assets/images/right-arrow.png'

const SavedLocationItem = ({ city, viewStation }) => (
  <TouchableOpacity style={styles.container} onPress={viewStation}>
    <Text style={[BaseStyle.secondaryHeader, styles.cityNameText]}>{city}</Text>
    <Image source={rightArrow} style={styles.rightArrow} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f2f3',
    flex: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    marginLeft: BaseStyle.baseSpacing,
  },
  rightArrow: {
    marginRight: BaseStyle.baseSpacing,
  },
})

export default SavedLocationItem
