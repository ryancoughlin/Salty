import { Navigation } from 'react-native-navigation'

import Map from './app/components/map'
import StationDetail from './app/components/station-detail'
import TideList from './app/components/tide-list'
import BaseStyle from './app/base-styles'

Navigation.registerComponent('Salty.StationDetail', () => StationDetail)
Navigation.registerComponent('Salty.Map', () => Map)
Navigation.registerComponent('Salty.TideList', () => TideList)

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Salty.StationDetail',
    navigatorStyle: BaseStyle.navigationBarStyles,
  },
  animationType: 'slide-up',
})
