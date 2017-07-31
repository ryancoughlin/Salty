import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

import BaseStyle from '../../base-styles'

const ViewTideListButton = ({ toggleModal }) =>
  (<TouchableOpacity onPress={toggleModal} style={styles.container}>
    <Text style={styles.viewTidesText}>View All</Text>
  </TouchableOpacity>)

const styles = StyleSheet.create({
  viewTidesText: {
    fontSize: 16,
    fontWeight: '500',
    color: BaseStyle.actionColor,
  },
})

export default ViewTideListButton
