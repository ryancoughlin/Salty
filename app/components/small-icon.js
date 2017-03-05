import React from 'react'
import {
  StyleSheet,
  Image,
} from 'react-native'

const SmallIcon = ({ source, style }) => (
  <Image
    style={[styles.container, style]}
    source={source}
  />
)

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    marginHorizontal: 20,
  },
})

export default SmallIcon
