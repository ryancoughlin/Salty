import stations from './stations'

export default function(state = {}, action) {
  return {
    stations: stations(state.stations, action),
  }
}
