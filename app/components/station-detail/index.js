import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions/station'
import TidePhrase from './tide-phrase'
import WeatherRow from './weather-row'
import TodaysTides from './todays-tides'
import SaltyModal from '../modal'
import TideTable from '../tide-list'
import SavedLocations from '../saved-locations'
import Map from '../map'
import DetailPanel from './detail-panel'
import SaveLocationButton from '../buttons/save-location-button'
import RemoveLocationButton from '../buttons/remove-location-button'
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
    const { tideTableVisible, mapVisible } = this.state
    const { saveLocation, deleteLocation, location } = this.props
    const { city, today, tables, chart, weather } = this.props.current

    return (
      <ScrollView style={styles.container}>
        <TidePhrase
          style={styles.tidePhrase}
          city={city}
          tides={tables}
          toggleModal={() => this.setState({ mapVisible: !mapVisible })}
        />
        <WeatherRow weather={weather.currentWind} icon="wind" />
        <WeatherRow weather={weather.currentWeather} icon={weather.icon} />
        <TodaysTides
          tideTable={tables}
          todaysTides={today}
          toggleModal={() => this.setState({ tideTableVisible: !tideTableVisible })}
        />
        <DetailPanel wind={weather.wind} tideChart={chart} />
        <SavedLocations />

        {this.props.isSaved
          ? <RemoveLocationButton city={city} deleteLocation={deleteLocation} />
          : <SaveLocationButton saveLocation={saveLocation} location={location} city={city} />}

        <SaltyModal
          visible={tideTableVisible}
          dismissModal={() => this.setState({ tideTableVisible: !tideTableVisible })}
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
