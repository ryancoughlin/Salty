import _ from 'lodash'
import {
  SAVE_LOCATION,
  FETCH_TIDES,
  FETCH_TIDE_CHART,
  FETCH_WATER_TEMPERATURE,
  FETCH_SWELL_INFO,
  FETCH_WEATHER,
  FIND_CITY_NAME,
  START_LOADING_TIDES,
  FINISHED_LOADING_TIDES,
  DELETE_LOCATION,
  FETCH_ALL_STATIONS,
  NOT_NEAR_STATION,
  NEAR_STATION,
  IS_PURCHASED,
} from '../types'

const initialState = {
  stationsNearby: true,
  loading: true,
  isPurchased: false,
  current: {},
  saved: {},
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TIDES:
      return {
        ...state,
        current: {
          ...state.current,
          ...action.tides,
        },
      }
    case FETCH_TIDE_CHART:
      return {
        ...state,
        current: {
          ...state.current,
          ...state.current.tides,
          chart: action.tideChart,
        },
      }
    case FETCH_WATER_TEMPERATURE:
      return {
        ...state,
        current: {
          ...state.current,
          waterTemperature: action.waterTemperature,
        },
      }
    case FETCH_SWELL_INFO:
      return {
        ...state,
        current: {
          ...state.current,
          swell: action.swell,
        },
      }

    case FETCH_WEATHER:
      return {
        ...state,
        current: {
          ...state.current,
          weather: action.weather,
        },
      }
    case FIND_CITY_NAME:
      return {
        ...state,
        location: action.location,
        current: {
          ...state.current,
          city: action.city,
        },
      }
    case FETCH_ALL_STATIONS:
      return {
        ...state,
        ...action.stations,
      }
    case SAVE_LOCATION:
      return {
        ...state,
        saved: {
          ...state.saved,
          [action.location.city]: {
            ...action.location,
          },
        },
      }
    case START_LOADING_TIDES:
      return {
        ...state,
        loading: true,
      }
    case FINISHED_LOADING_TIDES:
      return {
        ...state,
        loading: false,
      }
    case DELETE_LOCATION:
      return {
        ...state,
        saved: _.omit(state.saved, action.city),
      }
    case NOT_NEAR_STATION:
      return {
        ...state,
        stationsNearby: false,
      }
    case NEAR_STATION:
      return {
        ...state,
        stationsNearby: true,
      }
    case IS_PURCHASED:
      return {
        ...state,
        isPurchased: true,
      }
    default:
      return state
  }
}
