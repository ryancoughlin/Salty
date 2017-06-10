import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

import BaseStyle from '../../base-styles'

const ViewTideListButton = ({ navigate }) =>
  <TouchableOpacity onPress={() => navigate('TideList')} style={styles.container}>
    <Text style={styles.viewTidesText}>View All</Text>
  </TouchableOpacity>

const styles = StyleSheet.create({
  viewTidesText: {
    fontSize: 14,
    color: BaseStyle.baseTextColor,
  },
})

export default ViewTideListButton
