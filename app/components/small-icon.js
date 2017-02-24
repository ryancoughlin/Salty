import React from 'react'
import {
  StyleSheet,
  View,
  Image,
} from 'react-native'

const SmallIcon = ({ source }) => (
  <View style={styles.container}>
    <Image source={source} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SmallIcon
