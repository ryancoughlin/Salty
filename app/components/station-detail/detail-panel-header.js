import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import BaseStyle from '../../base-styles'

export default class extends Component {

  get activeStyle() {
    return styles.activeTitle
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigation}>
          <TouchableOpacity
            onPress={this.props.showTideChart}
          >
            <Text style={[styles.navigationTitle, this.activeStyle]}>Tides</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.showWindChart}>
            <Text style={[styles.navigationTitle, this.activeStyle]}>Wind</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.overviewText}>Yesterday to Monday</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    shadowColor: BaseStyle.darkBackgroundColor,
    shadowOffset: {
      width: 0,
      height: -40,
    },
    shadowOpacity: 0.07,
    shadowRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 130,
  },
  navigationTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  overviewText: {
    fontSize: 12,
    fontFamily: BaseStyle.numericFontFamily,
    marginTop: 4,
  },
  activeTitle: {
    color: BaseStyle.actionColor,
  },
  tab: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  activeTitle: {
    color: 'teal',
  },
})
