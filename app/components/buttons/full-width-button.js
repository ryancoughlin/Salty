import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

import BaseStyle from '../../base-styles'

const FullWidthButton = ({ text, onPress }) => (
  <View style={styles.container}>
    <Button onPress={onPress} title={text} color={BaseStyle.actionColor} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: BaseStyle.darkBackgroundColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginVertical: BaseStyle.baseSpacing,
    paddingVertical: BaseStyle.smallSpacing - 3,
  },
})

export default FullWidthButton
