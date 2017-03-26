import requestTideData from '../lib/request'
import { geoCodeLocation } from '../lib/location'
import {
  SAVE_LOCATION,
  FETCH_TIDE_DATA,
  FIND_CITY_NAME,
  START_LOADING_TIDES,
  FINISHED_LOADING_TIDES,
} from '../types'

export function saveLocation(location) {
  return { type: SAVE_LOCATION, location }
}

export function fetchTideData(location) {
  return dispatch => {
    dispatch({ type: START_LOADING_TIDES })
    requestTideData(location).then((json) => {
      dispatch({
        type: FETCH_TIDE_DATA,
        locationData: json
      })
    }).then(() => {
      dispatch({ type: FINISHED_LOADING_TIDES })
    })
  }
}

export function findCityName(location) {
  return dispatch => {
    geoCodeLocation(location).then((city) => {
      dispatch({
        type: FIND_CITY_NAME,
        city: city,
      })
    })
  }
}

export function startLoadingTides() {
  return { type: START_LOADING_TIDES, loading: true }
}

export function finishedLoadingTides() {
  return { type: FINISHED_LOADING_TIDES, loading: false }
}
