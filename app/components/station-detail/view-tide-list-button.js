import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import BaseStyle from '../../base-styles'

export default class extends Component {
  openTideList() {
    Actions.tideList({ tides: this.props.tideTable })
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.openTideList.bind(this)}
        style={styles.container}
      >
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
