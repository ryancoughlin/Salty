import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/station'
import BaseStyle from '../base-styles'

const NetworkError = ({ location, fetchTideData, findCityName }) => (
  <View style={styles.container}>
    <Text>Network Error!!!</Text>
    <Text>Network Error!!!</Text>

    <TouchableOpacity
      onPress={() => {
        fetchTideData(location)
        findCityName(location)
      }}
    >
      <Text>Try again</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatchToProps)(NetworkError)
