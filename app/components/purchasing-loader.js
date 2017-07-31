import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator, View, Text, Animated } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/station'
import BaseStyle from '../base-styles'

const Upsell = class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      overlayOpacity: new Animated.Value(0),
    }
  }

  componentWillReceiveProps(props) {
    Animated.timing(this.state.overlayOpacity,
      {
        toValue: props.isPurchasing ? 1 : 0,
      }).start()
  }

  fadeInOverlay() {
    Animated.timing(this.state.upsellButtonOpacity, {
      toValue: 1,
      duration: 1000,
    }).start()
  }

  get overlayOpacityStyle() {
    return {
      opacity: this.state.overlayOpacity,
    }
  }

  render() {
    return (
      <Animated.View style={[styles.container, this.overlayOpacityStyle]}>
        <View style={styles.loader}>
          <ActivityIndicator size="small" style={styles.activityIndicator} />
          <View>
            <Text style={styles.purchasing} allowFontScaling={false}>
              Purchasing...
            </Text>
            <Text style={styles.purchasingDisclaimer} allowFontScaling={false}>
              This can take up to a minute
            </Text>
          </View>
        </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: BaseStyle.overlayColor,
  },
  loader: {
    width: 230,
    borderRadius: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: BaseStyle.darkBackgroundColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    paddingHorizontal: BaseStyle.baseSpacing,
    paddingVertical: BaseStyle.smallSpacing,
    marginBottom: BaseStyle.largeSpacing * 1.5,
  },
  activityIndicator: {
    marginRight: BaseStyle.smallSpacing,
  },
  purchasing: {
    color: BaseStyle.baseTextColor,
    fontSize: 14,
    marginBottom: 1,
    fontWeight: '500',
  },
  purchasingDisclaimer: {
    fontSize: 11,
    color: BaseStyle.baseTextColor,
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
