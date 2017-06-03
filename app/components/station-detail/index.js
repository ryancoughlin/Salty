import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, AppState, Button } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SplashScreen from 'react-native-splash-screen'

import * as actions from '../../actions/station'
import TidePhrase from './tide-phrase'
import WeatherRow from './weather-row'
import TodaysTides from './todays-tides'
import DetailPanel from './detail-panel'
import SaveLocationButton from '../buttons/save-location-button'
import RemoveLocationButton from '../buttons/remove-location-button'
import NavigationBarItem from '../buttons/navigation-bar-item'
import { fetchLocation } from '../../lib/location'

const StationDetail = class extends Component {
  constructor(props) {
    super(props)

    this.handleAppStateChange = this.handleAppStateChange.bind(this)

    this.state = {
      previousAppState: null,
    }
  }

  componentDidMount() {
    const { params } = this.props.navigation.state

    if (params && params.location) {
      this.props.fetchWeather(params.location)
      this.props.fetchTides(params.location)
      this.props.fetchTideChart(params.location)
      this.props.findCityName(params.location)
    } else {
      this.findCurrentLocation()
    }

    AppState.addEventListener('change', this.handleAppStateChange)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange = (appState) => {
    this.setState({ previousAppState: appState })

    if (appState === 'unknown') {
      return
    }

    if (appState === 'active' && this.state.previousState !== 'active') {
      this.findCurrentLocation()
    }
  }

  findCurrentLocation() {
    fetchLocation().then((location) => {
      this.props.fetchWeather(location)
      this.props.fetchTides(location)
      this.props.fetchTideChart(location)
      this.props.findCityName(location)
    })
  }

  render() {
    const { city, tides, weather } = this.props.current
    const { navigate } = this.props.navigation

    if (this.props.loading) {
      return <ActivityIndicator />
    }

    return (
      <ScrollView style={styles.container}>
        <TidePhrase
          style={styles.tidePhrase}
          city={city}
          tides={tides.tables}
          todaysTides={tides.todaysTides}
          navigate={navigate}
        />

        <WeatherRow weather={weather.currentWind} icon="wind" />
        <WeatherRow weather={weather.currentWeather} icon={weather.icon} />
        <TodaysTides tideTable={tides.tables} todaysTides={tides.today} navigate={navigate} />
        <DetailPanel wind={weather.wind} tideChart={tides.chart} />

        {this.props.isSaved
          ? <RemoveLocationButton city={city} deleteLocation={this.props.deleteLocation} />
          : <SaveLocationButton
            saveLocation={this.props.saveLocation}
            location={this.props.location}
            city={city}
          />}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

StationDetail.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <NavigationBarItem
      title="My Locations"
      navigate={() => navigation.navigate('SavedLocations')}
    />
  ),
})

const mapStateToProps = ({ stations }) => ({
  current: stations.current,
  loading: stations.loading,
  saved: stations.saved,
  location: stations.location,
  isSaved: !!stations.saved[stations.current.city],
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(StationDetail)
