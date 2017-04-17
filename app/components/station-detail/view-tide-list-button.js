import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import BaseStyle from '../../base-styles'

export default class extends Component {
  openTideList() {}

  render() {
    return (
      <TouchableOpacity onPress={this.openTideList.bind(this)} style={styles.container}>
        <Text style={styles.viewTidesText}>View All</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  viewTidesText: {
    fontSize: 14,
    color: BaseStyle.baseTextColor,
  },
})
