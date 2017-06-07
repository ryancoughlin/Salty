import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

import store, { rehydrateStore } from './app/store'
import App from './app/components/app'

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
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Salty', () => Salty)
