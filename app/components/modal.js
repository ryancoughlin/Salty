import React from 'react'
import { Modal } from 'react-native'

import NavigationBar from './navigation-bar'

const SaltyModal = ({ children, visible, dismissModal }) => (
  <Modal visible={visible} animationType="slide">
    <NavigationBar dismissModal={dismissModal} />
    {children}
  </Modal>
)
export default SaltyModal
