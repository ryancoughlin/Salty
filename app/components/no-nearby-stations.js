import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

import BaseStyle from '../base-styles'
import smallStationMark from '../assets/images/no-stations-nearby/small-mark.png'

const NoNearbyStations = ({ city, navigation }) =>
  <View style={styles.container}>
    <View>
      <Image source={smallStationMark} style={styles.smallMark} />
      <Text style={styles.notFoundHeader}>Oops, we can't find a station near {city}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Map')}>
        <Text style={styles.findStationText}>Find stations</Text>
      </TouchableOpacity>
    </View>
  </View>

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: BaseStyle.darkBackgroundColor,
    flex: 1,
    paddingHorizontal: BaseStyle.baseSpacing,
  },
  smallMark: {
    width: 56,
    height: 56,
    marginBottom: BaseStyle.largeSpacing * 2,
  },
  notFoundHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
  },
  findStationText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: BaseStyle.largeSpacing * 2,
    marginTop: BaseStyle.baseSpacing,
    textDecorationLine: 'underline',
    textDecorationColor: 'white',
  },
})

export default NoNearbyStations
