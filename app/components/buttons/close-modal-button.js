import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions/station'
import modalClose from '../../assets/images/modal-close.png'

const CloseModalButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.goBack(null)}>
    <Image source={modalClose} style={styles.closeIcon} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  closeIcon: {
    marginLeft: 10,
  },
})

export default CloseModalButton
