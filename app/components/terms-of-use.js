import React, { Component } from 'react'
import { StyleSheet, WebView, View } from 'react-native'

import BaseStyle from '../base-styles'

const TermsOfUse = class extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://gist.githubusercontent.com/ryancoughlin/9496a6abf89cb8e58633018bd2078348/raw/4df6805fc7d8b8c3daabfe4198247ab7c885ee81/Salty%2520-%2520Terms%2520of%2520Use' }}
        style={styles.container}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: BaseStyle.smallSpacing,
  },
})

export default TermsOfUse
