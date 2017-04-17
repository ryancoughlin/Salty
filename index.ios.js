import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'

import store, { rehydrateStore } from './app/store'
import StationDetail from './app/components/station-detail'

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
        <StationDetail />
      </Provider>
    )
  }
}

const SaltyApp = StackNavigator(
  {
    Salty: { screen: Salty },
  },
  {
    style: {
      backgroundColor: 'white',
    },
  },
)

AppRegistry.registerComponent('Salty', () => SaltyApp)
