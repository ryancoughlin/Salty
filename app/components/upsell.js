import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Snackbar from 'react-native-snackbar'

import * as actions from '../actions/station'
import BaseStyle from '../base-styles'
import {
  loadProducts,
  buyProduct,
  restorePurchases,
  monthlySubscription,
  yearlySubscription,
} from '../lib/in-app-purchase'
import UpsellButton from './buttons/upsell-button'
import TidePhrase from './station-detail/tide-phrase'
import upsellPrimaryArrow from '../assets/images/upsell-white-arrow.png'
import upsellSecondaryArrow from '../assets/images/upsell-dark-arrow.png'

const Upsell = class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      upsellButtonOpacity: new Animated.Value(0),
      productsLoaded: false,
    }
  }

  componentDidMount() {
    loadProducts().then(() => {
      this.setState({ productsLoaded: true })
      this.fadeInUpsellButtons()
    }).catch(() => {
      alert('Error loading products from Apple')
    })
  }

  purchase(product) {
    buyProduct(product)
      .then(() => {
        Snackbar.show({
          backgroundColor: BaseStyle.darkBackgroundColor,
          title: 'Purchase succesful, stay salty',
          duration: 2000,
        })
        this.props.purchaseSuccessful()
      })
      .catch((error) => {
        Snackbar.show({
          backgroundColor: BaseStyle.warningColor,
          title: "Purchase didn't complete, please try again",
          duration: 2000,
        })
      })
  }

  restore() {
    restorePurchases()
      .then(() => {
        Snackbar.show({
          backgroundColor: BaseStyle.darkBackgroundColor,
          title: 'Purchases have been restored',
          duration: 1600,
        })
        this.props.purchaseSuccessful()
      })
      .catch((error) => {
        Snackbar.show({
          backgroundColor: BaseStyle.warningColor,
          title: 'Not able to restore purchases at this time',
          duration: 2000,
        })
      })
  }

  fadeInUpsellButtons() {
    Animated.timing(this.state.upsellButtonOpacity, {
      toValue: 1,
      duration: 300,
    }).start()
  }

  render() {
    if (!this.props.current) {
      return null
    }

    return (
      <View style={styles.container}>
        <TidePhrase />
        <View style={styles.upsell}>
          <View>
            <Text style={BaseStyle.secondaryHeader}>Unlock Salty</Text>
            <Text style={styles.supportingText}>
              Swell and wind forecast, tides, save your favorite spots and more.
              Includes 7-day free trial.
            </Text>
            { this.state.productsLoaded &&
              <Animated.View style={{ opacity: this.state.upsellButtonOpacity }}>
                <UpsellButton
                  title="Yearly Subscription"
                  text="$19.99 a year"
                  backgroundColor={styles.primaryButton}
                  textColor={styles.primaryButtonText}
                  onPress={() => this.purchase(yearlySubscription)}
                  accessory={upsellPrimaryArrow}
                />
                <UpsellButton
                  title="Monthly Subscription"
                  text="$1.99 a month"
                  onPress={() => this.purchase(monthlySubscription)}
                  accessory={upsellSecondaryArrow}
                />
              </Animated.View>
          }
          </View>
          <TouchableOpacity onPress={this.restore}>
            <Text style={styles.restoreActionUnderline}>
              ...or restore in-app purchases.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  upsell: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: BaseStyle.baseSpacing,
    paddingRight: BaseStyle.baseSpacing,
    paddingLeft: BaseStyle.largeSpacing + 14,
  },
  supportingText: {
    marginTop: 6,
    marginBottom: BaseStyle.baseSpacing,
    lineHeight: 19,
  },
  primaryButton: {
    backgroundColor: BaseStyle.darkBackgroundColor,
  },
  primaryButtonText: {
    color: 'white',
  },
  restoreActionUnderline: {
    fontWeight: '500',
  },
})

const mapStateToProps = ({ stations }) => ({
  isPurchased: stations.isPurchased,
  current: stations.current,
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Upsell)
