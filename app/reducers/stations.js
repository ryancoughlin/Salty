import _ from 'lodash'
import {
  SAVE_LOCATION,
  FETCH_TIDE_DATA,
  FIND_CITY_NAME,
  START_LOADING_TIDES,
  FINISHED_LOADING_TIDES,
  DELETE_LOCATION,
  FETCH_ALL_STATIONS,
  ERROR_LOADING_TIDES,
} from '../types'

const initialState = {
  error: false,
  loading: true,
  current: {},
  saved: {},
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TIDE_DATA:
      return {
        ...state,
        current: {
          ...state.current,
          ...action.locationData,
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
        error: false,
      }
    case ERROR_LOADING_TIDES:
      return {
        ...state,
        loading: false,
        error: true,
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
