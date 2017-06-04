import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

import store, { rehydrateStore } from './app/store'
import { AppNavigator } from './app/app-navigator'

class Salty extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shouldDisplay: false,
    }
  }

  componentDidMount() {
    SplashScreen.hide()
    rehydrateStore(() => this.setState({ shouldDisplay: true }))
  }

  render() {
    if (!this.state.shouldDisplay) return null

    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
AppRegistry.registerComponent('Salty', () => Salty)
