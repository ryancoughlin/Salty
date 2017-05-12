import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions/station'

import modalClose from '../../assets/images/modal-close.png'

const CloseModalButton = ({ closeModal }) => (
  <TouchableOpacity onPress={() => closeModal()}>
    <Image source={modalClose} style={styles.closeIcon} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  closeIcon: {
    marginLeft: 10,
  },
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatchToProps)(CloseModalButton)
