import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import {
  Scene,
  Router,
  Modal,
  Actions,
} from 'react-native-router-flux'

import StationDetail from './app/components/station-detail'
import TideList from './app/components/tide-list'
import BaseStyle from './app/base-styles'

class Salty extends Component {
  render() {
    return (
      <Router
        navigationBarStyle={BaseStyle.navigationBar}
        leftButtonStyle={{ marginTop: 2 }}
        leftButtonTextStyle={[BaseStyle.navigationLeftButton, BaseStyle.navigationTitle]}
      >
        <Scene key="modal" component={Modal}>
          <Scene
            key="root"
          >
            <Scene
              initial
              key="stationDetail"
              component={StationDetail}
            />
            <Scene
              key="tideList"
              direction="vertical"
              leftTitle="Close"
              onLeft={() => Actions.pop()}
              panHandlers={null}
            >
              <Scene
                titleStyle={BaseStyle.navigationTitle}
                key="tideListModal"
                title="Tide Tables"
                component={TideList}
                direction="vertical"
                panHandlers={null}
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('Salty', () => Salty)
