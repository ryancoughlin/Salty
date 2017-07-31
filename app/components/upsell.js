import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Animated } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Snackbar from 'react-native-snackbar'
import { Sentry } from 'react-native-sentry'

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
import PurchasingLoader from './purchasing-loader'
import SaltyModal from './modal'
import TermsOfUse from './terms-of-use'
import PrivacyPolicy from './privacy-policy'
import upsellPrimaryArrow from '../assets/images/upsell-white-arrow.png'
import upsellSecondaryArrow from '../assets/images/upsell-dark-arrow.png'

const Upsell = class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      upsellButtonOpacity: new Animated.Value(0),
      productsLoaded: false,
      termsVisible: false,
      privacyPolicyVisible: false,
      isPurchasing: false,
    }
  }

  componentDidMount() {
    loadProducts().then(() => {
      this.setState({ productsLoaded: true })
      this.fadeInUpsellButtons()
    }).catch(error => {
      Sentry.captureMessage('Failed to fetch products from Apple')
      Sentry.setExtraContext({
        error,
      })
      Snackbar.show({
        backgroundColor: BaseStyle.warningColor,
        title: 'We weren&apos;t able to fetch products from Apple',
        duration: 2000,
      })
    })
  }

  purchase(product) {
    Sentry.captureMessage('Start a purchase', { tags: { purchaseType: product } })
    this.setState({ isPurchasing: true })
    buyProduct(product)
      .then(() => {
        this.props.purchaseSuccessful()
      })
      .catch(() => {
        Snackbar.show({
          backgroundColor: BaseStyle.warningColor,
          title: 'Purchase canceled',
          duration: 2000,
        })
      }).finally(() => {
        this.setState({ isPurchasing: false })
      })
  }

  restore() {
    restorePurchases()
      .then(() => {
        Snackbar.show({
          backgroundColor: BaseStyle.darkBackgroundColor,
          title: 'Purchases have been restored',
          duration: 2000,
        })
        this.props.purchaseSuccessful()
      })
      .catch(error => {
        console.log(error)
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

    const { termsVisible, privacyPolicyVisible } = this.state

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TidePhrase />
        <View style={styles.upsell}>
          <View>
            <Text style={BaseStyle.secondaryHeader}>Unlock Salty</Text>
            <Text style={styles.supportingText}>
              Dive into tide overviews, access swell and wind foreacst, save favorite spots and more.
              Each subscription includes 7-day free trial.
            </Text>
            { this.state.productsLoaded &&
              <Animated.View style={{ opacity: this.state.upsellButtonOpacity }}>
                <UpsellButton
                  title="Yearly Subscription"
                  text="$9.99 a year"
                  backgroundColor={styles.primaryButton}
                  textColor={styles.primaryButtonText}
                  onPress={() => this.purchase(yearlySubscription)}
                  accessory={upsellPrimaryArrow}
                />
                <UpsellButton
                  title="Monthly Subscription"
                  text="$0.99 a month"
                  onPress={() => this.purchase(monthlySubscription)}
                  accessory={upsellSecondaryArrow}
                />
              </Animated.View>
          }
          </View>
          <View>
            <TouchableOpacity onPress={this.restore}>
              <Text style={styles.restoreActionUnderline}>
              Restore in-app purchases
            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ termsVisible: !termsVisible })}>
              <Text style={styles.restoreActionUnderline}>
              Terms of Use
            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ privacyPolicyVisible: !privacyPolicyVisible })}>
              <Text style={styles.restoreActionUnderline}>
              Privacy Policy
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <SaltyModal
          visible={termsVisible}
          dismissModal={() => this.setState({ termsVisible: !termsVisible })}
        >
          <TermsOfUse dismissModal={() => this.setState({ termsVisible: !termsVisible })} />
        </SaltyModal>
        <SaltyModal
          visible={privacyPolicyVisible}
          dismissModal={() => this.setState({ privacyPolicyVisible: !privacyPolicyVisible })}
        >
          <PrivacyPolicy dismissModal={() => this.setState({ privacyPolicyVisible: !privacyPolicyVisible })} />
        </SaltyModal>
        {this.state.isPurchasing && <PurchasingLoader isPurchasing />}
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: BaseStyle.smallSpacing,
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
