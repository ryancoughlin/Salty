import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions/station'
import TidePhrase from './tide-phrase'
import WeatherRow from './weather-row'
import TodaysTides from './todays-tides'
import DetailPanel from './detail-panel'
import SaveLocationButton from '../buttons/save-location-button'
import RemoveLocationButton from '../buttons/remove-location-button'
import SavedLocations from '../saved-locations'
import TideTable from '../tide-list'
import Map from '../map'
import SaltyModal from '../modal'
import BaseStyle from '../../base-styles'

const StationDetail = class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tideTableVisible: false,
      mapVisible: false,
    }
  }

  render() {
    const { mapVisible, tideTableVisible } = this.state
    const { saveLocation, deleteLocation, location } = this.props
    const {
      city,
      todaysTides,
      weather,
    } = this.props.current

    return (
      <ScrollView style={styles.container}>
        <TidePhrase
          toggleModal={() => this.setState({ mapVisible: !mapVisible })}
        />

        <WeatherRow weather={weather.currentWind} icon="wind" />
        <WeatherRow weather={weather.currentWeather} icon={weather.icon} />
        <TodaysTides
          todaysTides={todaysTides}
          toggleModal={() =>
            this.setState({ tideTableVisible: !tideTableVisible })}
        />

        <DetailPanel />
        <SavedLocations />

        {this.props.isSaved
          ? <RemoveLocationButton city={city} deleteLocation={deleteLocation} />
          : <SaveLocationButton
            saveLocation={saveLocation}
            location={location}
            city={city}
          />}

        <SaltyModal
          visible={tideTableVisible}
          dismissModal={() =>
            this.setState({ tideTableVisible: !tideTableVisible })}
        >
          <TideTable />
        </SaltyModal>
        <SaltyModal
          visible={mapVisible}
          dismissModal={() => this.setState({ mapVisible: !mapVisible })}
        >
          <Map />
        </SaltyModal>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: BaseStyle.baseSpacing,
  },
})

const mapStateToProps = ({ stations }) => ({
  current: stations.current,
  saved: stations.saved,
  location: stations.location,
  isSaved: !!stations.saved[stations.current.city],
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(StationDetail)
