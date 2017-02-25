import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

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
    console.log(this.props.tabs)
    return (
      <View style={styles.tabContainer}>
        {this.props.tabs.map(this.renderTab.bind(this))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
  },
  tab: {
    height: 50,
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  title: {
    fontSize: 12,
    color: 'rgba(183, 189, 192, 1.00)',
  },
  activeTitle: {
    color: 'red',
  },
})
