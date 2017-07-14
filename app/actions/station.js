import _ from 'lodash'

import request from '../lib/request'
import { geoCodeLocation } from '../lib/location'
import {
  SAVE_LOCATION,
  FETCH_TIDES,
  FETCH_TIDE_CHART,
  FETCH_WATER_TEMPERATURE,
  FETCH_WEATHER,
  FETCH_SWELL_INFO,
  FIND_CITY_NAME,
  START_LOADING_TIDES,
  FINISHED_LOADING_TIDES,
  DELETE_LOCATION,
  FETCH_ALL_STATIONS,
  NOT_NEAR_STATION,
  NEAR_STATION,
  IS_PURCHASED,
} from '../types'

export function fetchTides(location) {
  return dispatch => {
    dispatch({ type: START_LOADING_TIDES })

    const result = request(
      `/tides?latitude=${location.latitude}&longitude=${location.longitude}`,
    )
    result
      .then(json => {
        if (!_.isEmpty(json)) {
          dispatch({ type: NEAR_STATION })
          dispatch({
            type: FETCH_TIDES,
            tides: json,
          })
        } else {
          dispatch({
            type: NOT_NEAR_STATION,
          })
        }
      })
      .finally(() => {
        dispatch({ type: FINISHED_LOADING_TIDES })
      })
  }
}

export function fetchTideChart(location) {
  return dispatch => {
    const { latitude, longitude } = location
    const result = request(
      `/tide-chart?latitude=${latitude}&longitude=${longitude}`,
    )
    result.then(json => {
      dispatch({
        type: FETCH_TIDE_CHART,
        tideChart: json,
      })
    })
  }
}

export function fetchWaterTemperature(location) {
  return dispatch => {
    const { latitude, longitude } = location
    const result = request(
      `/water-temperature?latitude=${latitude}&longitude=${longitude}`,
    )
    result.then(json => {
      dispatch({
        type: FETCH_WATER_TEMPERATURE,
        waterTemperature: json,
      })
    })
  }
}

export function fetchSwellInfo(location) {
  return dispatch => {
    const { latitude, longitude } = location
    const result = request(`/swell?latitude=${latitude}&longitude=${longitude}`)
    result.then(json => {
      dispatch({
        type: FETCH_SWELL_INFO,
        swell: json,
      })
    })
  }
}

export function fetchWeather(location) {
  return dispatch => {
    const { latitude, longitude } = location
    const result = request(
      `/weather?latitude=${latitude}&longitude=${longitude}`,
    )
    result.then(json => {
      dispatch({
        type: FETCH_WEATHER,
        weather: json,
      })
    })
  }
}

export function findCityName(location) {
  return dispatch => {
    geoCodeLocation(location).then(city => {
      dispatch({
        type: FIND_CITY_NAME,
        location,
        city,
      })
    })
  }
}

export function fetchAllStations() {
  return dispatch => {
    request('/stations').then(stations => {
      dispatch({
        type: FETCH_ALL_STATIONS,
        stations,
      })
    })
  }
}

export function saveLocation(location) {
  return { type: SAVE_LOCATION, location }
}

export function deleteLocation(city) {
  return { type: DELETE_LOCATION, city }
}

export function noStationsNearby() {
  return { type: NOT_NEAR_STATION, noStationsNearby: true }
}

export function startLoadingTides() {
  return { type: START_LOADING_TIDES, loading: true }
}

export function finishedLoadingTides() {
  return { type: FINISHED_LOADING_TIDES, loading: false }
}

export function purchaseSuccessful() {
  return { type: IS_PURCHASED, isPurchased: true }
}
