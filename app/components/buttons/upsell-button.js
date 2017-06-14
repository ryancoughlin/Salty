import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

import BaseStyle from '../../base-styles'

const UpsellButton = ({
  title,
  text,
  onPress,
  backgroundColor,
  textColor,
  accessory,
}) =>
  (<TouchableOpacity
    style={[styles.container, backgroundColor]}
    onPress={onPress}
  >
    <View>
      <Text style={[styles.title, textColor]}>
        {title}
      </Text>
      <Text style={[styles.price, textColor]}>
        {text}
      </Text>
    </View>
    <Image source={accessory} />
  </TouchableOpacity>)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: BaseStyle.smallSpacing + 3,
    paddingBottom: BaseStyle.smallSpacing,
    paddingHorizontal: BaseStyle.baseSpacing,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: BaseStyle.darkBackgroundColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    marginBottom: BaseStyle.baseSpacing,
    marginLeft: -20,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 3,
  },
  price: {
    fontFamily: BaseStyle.numericFontFamily,
    fontSize: BaseStyle.smallNumericFontSize,
  },
})

export default UpsellButton
