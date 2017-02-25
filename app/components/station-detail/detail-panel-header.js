import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

import BaseStyle from '../../base-styles'

export default class extends Component {
  titleAt = index => (
    this.props.tabData[index].title
  )

  titleStyle = index => (
    index === this.props.activeTab ? [styles.title, styles.activeTitle] : styles.title
  )

  renderTab(_tab, index) {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => this.props.goToPage(index)}
        style={styles.tab}
      >
        <Text
          style={this.titleStyle(index)}
          allowFontScaling={false}
        >
          {this.titleAt(index)}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.tabs.map(this.renderTab.bind(this))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    shadowColor: BaseStyle.darkBackgroundColor,
    shadowOffset: {
      width: 0,
      height: -40,
    },
    shadowOpacity: 0.07,
    shadowRadius: 30,
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
