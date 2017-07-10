import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

const ActivityOverlay = () =>
  <ActivityIndicator style={styles.loadingIndicator} size="large" />

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center'
  }
})

export default ActivityOverlay
