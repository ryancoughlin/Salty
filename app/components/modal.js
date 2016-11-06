import React from 'react'
import {
  Modal as ReactModal,
} from 'react-native'

const SaltyModal = props => (
  <ReactModal
    animationType={'slide'}
    transparent={false}
    onRequestClose={() => {}}
    {...props}
  />
)

export default SaltyModal
