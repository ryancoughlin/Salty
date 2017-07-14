import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

const ActivityOverlay = ({ color }) =>
  <ActivityIndicator style={styles.loadingIndicator} size="small" color={color} />

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ActivityOverlay
