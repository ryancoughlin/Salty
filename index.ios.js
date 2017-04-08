import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import {
  Scene,
  Router,
  Modal,
  Actions,
} from 'react-native-router-flux'

import store, { rehydrateStore } from './app/store'
import StationDetail from './app/components/station-detail'
import TideList from './app/components/tide-list'
import Map from './app/components/map'
import BaseStyle from './app/base-styles'

class Salty extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shouldDisplay: false,
    }
  }

  componentDidMount() {
    rehydrateStore(() => this.setState({ shouldDisplay: true }))
  }

  render() {
    if (!this.state.shouldDisplay) return null

    return (
      <Provider store={store}>
        <Router
          navigationBarStyle={BaseStyle.navigationBar}
          leftButtonTextStyle={BaseStyle.navigationButton}
          rightButtonTextStyle={BaseStyle.navigationButton}
        >
          <Scene key="modal" component={Modal}>
            <Scene key="root">
              <Scene
                initial
                key="stationDetail"
                component={StationDetail}
                rightTitle="Find"
                onRight={() => Actions.map()}
                type="reset"
              />
              <Scene
                key="map"
                leftTitle="Close"
                direction="vertical"
                onLeft={() => Actions.pop()}
              >
                <Scene
                  titleStyle={BaseStyle.navigationTitle}
                  key="mapModal"
                  title="Find a Station"
                  component={Map}
                />
              </Scene>

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
                  panHandlers={null}
                />
              </Scene>
            </Scene>
          </Scene>
        </Router>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Salty', () => Salty)
