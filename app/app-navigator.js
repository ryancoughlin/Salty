import { StackNavigator } from 'react-navigation'

import BaseStyle from './base-styles'
import StationDetail from './components/station-detail'
import TideList from './components/tide-list'
import SavedLocations from './components/saved-locations'

export const AppNavigator = StackNavigator(
  {
    StationDetail: { screen: StationDetail },
    TideList: { screen: TideList },
    SavedLocations: { screen: SavedLocations },
  },
  {
    mode: 'modal',
    navigationOptions: {
      headerStyle: {
        ...BaseStyle.navigation.navigationBar,
      },
    },
  },
)
