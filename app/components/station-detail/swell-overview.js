import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'

import BaseStyle from '../../base-styles'
import SwellSparkline from './swell-sparkline'
import findNextTide from '../../utils/find-next-tide'

const SwellOverview = class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: '',
      direction: '',
      period: '',
    }
  }

  componentDidMount() {
    this.findCurrentSwell()
  }

  findCurrentSwell() {
    const now = moment()
    const currentSwellIndex = _.findIndex(this.props.current.swell, (swell) => {
      const time = moment(swell.time).local()
      return now.diff(time) <= 0
    })

    const currentSwell = this.props.current.swell[currentSwellIndex]

    this.setState({
      type: currentSwell.type,
      direction: currentSwell.direction,
      height: currentSwell.height,
      period: currentSwell.period,
    })
  }
  render() {
    const { type, period, direction, height } = this.state

    return (
      <LinearGradient
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0, y: 0.5 }}
        locations={[0, 1]}
        colors={['#52BBFF', '#8ADFFF']}
        style={styles.container}
      >
        <View>
          <Text style={[styles.ehancedBlueText, styles.swellHeight]}>{height}'</Text>
          <Text style={[BaseStyle.secondaryHeader, styles.ehancedBlueText]}>
            {type}
          </Text>
          <Text style={[styles.swellPeriod, styles.ehancedBlueText]}>
            Swell period at {period}s from {direction}
          </Text>
        </View>
        <SwellSparkline swell={this.props.current.swell} style={styles.swell} />
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: BaseStyle.smallSpacing,
    paddingTop: 14,
    paddingBottom: BaseStyle.smallSpacing,
    marginHorizontal: BaseStyle.baseSpacing,
    marginBottom: BaseStyle.baseSpacing,
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: BaseStyle.actionColor,
    shadowColor: BaseStyle.darkBackgroundColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    marginBottom: BaseStyle.baseSpacing,
    marginHorizontal: BaseStyle.baseSpacing,
    flexDirection: 'row',
  },
  swellHeight: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 3,
  },
  swellPeriod: {
    marginTop: 3,
  },
  ehancedBlueText: {
    color: '#124E76',
    backgroundColor: 'transparent',
  },
})

const mapStateToProps = ({ stations }) => ({
  current: stations.current,
})

export default connect(mapStateToProps, null)(SwellOverview)
