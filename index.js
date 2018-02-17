import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import { Sentry } from 'react-native-sentry'
import Config from 'react-native-config'

import store, { rehydrateStore } from './app/store'
import App from './app/components/app'

class Salty extends Component {
  constructor(props) {
    super(props)

    if (process.env.NODE_ENV === 'production') {
      Sentry.config(Config.SENTRY_PRODUCTION_DSN).install()
    } else {
      Sentry.config(Config.SENTRY_DEVELOPMENT_DSN).install()
    }

    this.state = {
      shouldDisplay: false
    }
  }

  componentWillMount() {
    SplashScreen.hide()

    rehydrateStore(() => {
      this.setState({ shouldDisplay: true })
    })
  }

  render() {
    const { shouldDisplay } = this.state

    return (
      <Provider store={store}>
        <App shouldDisplay={shouldDisplay} />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Salty', () => Salty)
