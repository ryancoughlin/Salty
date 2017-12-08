import React from 'react'
import { StyleSheet, WebView } from 'react-native'

import BaseStyle from '../base-styles'

const PrivacyPolicy = () => (
  <WebView
    source={{ uri: 'https://gist.githubusercontent.com/ryancoughlin/7edc6b96cd1dd21a08b28f8e05cf3ce3/raw/8b77a858beaed7326b8948a333d35ed5c0326153/Salty%2520for%2520iOS%2520Privacy%2520Policy.md' }}
    style={styles.container}
  />
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: BaseStyle.smallSpacing,
  },
})

export default PrivacyPolicy
