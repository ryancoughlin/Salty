import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import BaseStyle from '../../base-styles'

const NavigationBarItem = ({ navigate, title }) => (
  <TouchableOpacity onPress={navigate}>
    <Text style={BaseStyle.navigationButton}>{title}</Text>
  </TouchableOpacity>
)

export default NavigationBarItem
