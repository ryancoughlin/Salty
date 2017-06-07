import React from 'react'
import { StyleSheet, View } from 'react-native'

import CloseModalButton from './buttons/close-modal-button'
import BaseStyle from '../base-styles'

const NavigationBar = ({ dismissModal }) => (
  <View style={styles.container}>
    <CloseModalButton dismissModal={dismissModal} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 64,
    justifyContent: 'center',
    paddingTop: 26,
    paddingHorizontal: BaseStyle.smallSpacing,
  },
})

export default NavigationBar
