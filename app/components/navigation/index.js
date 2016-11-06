import React, { Component } from 'react'
import {
  Navigator,
  Text,
  View,
  StyleSheet,
} from 'react-native'

import SaltyModal from '../modal'
import BaseStyle from '../../base-styles'

export default class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalRoute: null,
    }
  }

  renderModalContent() {
    if (!this.state.modalRoute) { return null }

    return this.renderScene(this.state.modalRoute, this.navigator)
  }

  routeMapper() {
    return {
      LeftButton: this.renderLeftButton.bind(this),
      RightButton: this.renderRightButton.bind(this),
      Title: this.renderTitle.bind(this),
    }
  }

  onWillFocus(route) {
    if (route.onAppear) {
      route.onAppear()
    }
  }

  renderScene(route) {
    return (
      <route.component
        {...route.sceneProps}
        navigatePop={() => this.navigator.pop()}
        navigatePush={route => this.navigator.push(route)}
        navigatePopToRoot={() => this.navigator.popToTop()}
        navigatePresentModal={modalRoute => this.setState({ modalRoute })}
        navigateDismissModal={() => this.setState({ modalRoute: null })}
        immediatelyResetRouteStack={routes => this.navigator.immediatelyResetRouteStack(routes)}
      />
    )
  }

  renderLeftButton(route, navigator, index, navState) {
    if (index > 0 && !route.renderLeftButton) {
      return <Text>Back</Text>
    } else if (route.renderLeftButton) {
      return route.renderLeftButton(route, navigator)
    } else {
      return null
    }
  }

  renderRightButton(route, navigator, index, navState) {
    if (route.renderRightButton) {
      return route.renderRightButton(route, navigator)
    } else {
      return null
    }
  }

  renderTitle(route, navigator, index, navState) {
    if (typeof route.title === 'string') {
      return <Text style={styles.titleLabel}>{route.title}</Text>
    } else {
      return route.title(route, navigator, index, navState)
    }
  }

  renderNavigationBar() {
    return (<Navigator.NavigationBar
      style={styles.navigationBar}
      routeMapper={this.routeMapper()}
    />)
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          onWillFocus={this.onWillFocus.bind(this)}
          navigationBar={this.renderNavigationBar()}
          renderScene={this.renderScene.bind(this)}
          ref={c => this.navigator = c}
          {...this.props}
        />
        <SaltyModal visible={!!this.state.modalRoute}>
          {this.renderModalContent()}
        </SaltyModal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseStyle.baseBackgroundColor
  },
  navigationBar: {
    height: 54,
  }
})
