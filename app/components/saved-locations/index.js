import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import SavedLocationItem from './saved-location-item'
import CloseModalButton from '../buttons/close-modal-button'
import BaseStyle from '../../base-styles'

const SavedLocations = ({ saved }) => (
  <View style={styles.container}>
    <Text style={[BaseStyle.largeHeaderText, styles.locationHeader]}>My Locations</Text>
    <FlatList
      style={styles.listView}
      data={_.values(saved)}
      renderItem={({ item }) => <SavedLocationItem {...item} />}
      keyExtractor={item => item.location.longitude}
    />
  </View>
)

SavedLocations.navigationOptions = ({ navigation }) => ({
  headerLeft: <CloseModalButton goBack={navigation.goBack('SavedLocations')} />,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    flex: 1,
  },
  locationHeader: {
    backgroundColor: BaseStyle.baseBackgroundColor,
    paddingLeft: BaseStyle.baseSpacing,
    color: BaseStyle.subtleColor,
  },
})

const mapStateToProps = ({ stations }) => ({
  saved: stations.saved,
})

export default connect(mapStateToProps)(SavedLocations)
