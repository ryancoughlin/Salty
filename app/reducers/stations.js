import _ from 'lodash'
import {
  SAVE_LOCATION,
  FETCH_TIDES,
  FETCH_TIDE_CHART,
  FETCH_WEATHER,
  FIND_CITY_NAME,
  START_LOADING_TIDES,
  FINISHED_LOADING_TIDES,
  DELETE_LOCATION,
  FETCH_ALL_STATIONS,
} from '../types'

const initialState = {
  loading: true,
  current: {
    city: 'Loading...',
  },
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
          tides: {
            ...state.current.tides,
            chart: action.tideChart,
          },
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
    default:
      return state
  }
}
