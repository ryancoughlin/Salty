import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

import modalClose from '../../assets/images/modal-close.png'

const CloseModalButton = ({ dismissModal }) =>
  (<TouchableOpacity onPress={dismissModal}>
    <Image source={modalClose} style={styles.closeIcon} />
  </TouchableOpacity>)

const styles = StyleSheet.create({
  closeIcon: {
    marginLeft: 10,
  },
})

export default CloseModalButton
