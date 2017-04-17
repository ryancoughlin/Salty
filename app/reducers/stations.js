import _ from 'lodash'
import {
  SAVE_LOCATION,
  FETCH_TIDE_DATA,
  FIND_CITY_NAME,
  START_LOADING_TIDES,
  FINISHED_LOADING_TIDES,
  DELETE_LOCATION,
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
