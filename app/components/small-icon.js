import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
} from 'react-native'

export default class SmallIcon extends Component {
  render() {
    const { source } = this.props

    return (
      <View style={styles.container}>
        <Image source={source} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 16,
    marginHorizontal: 26,
  },
})
