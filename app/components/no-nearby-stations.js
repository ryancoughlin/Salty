import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import Map from './map'
import SaltyModal from './modal'

import BaseStyle from '../base-styles'
import smallStationMark from '../assets/images/no-stations-nearby/small-mark.png'

const NoNearbyStations = class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mapVisible: false,
    }
  }

  render() {
    const { mapVisible } = this.state
    const { city } = this.props

    return (
      <View style={styles.container}>
        <View>
          <Image source={smallStationMark} style={styles.smallMark} />
          <Text style={styles.notFoundHeader} allowFontScaling={false}>Oops, we can&apos;t find a station near {city}</Text>
          <TouchableOpacity onPress={() => this.setState({ mapVisible: !mapVisible })}>
            <Text style={styles.findStationText} allowFontScaling={false}>Find stations</Text>
          </TouchableOpacity>
        </View>
        <SaltyModal
          visible={mapVisible}
          dismissModal={() => this.setState({ mapVisible: !mapVisible })}
        >
          <Map dismissModal={() => this.setState({ mapVisible: !mapVisible })} />
        </SaltyModal>
      </View>
    )
  }
}
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
