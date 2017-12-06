import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'

import BaseStyle from '../../base-styles'
import SwellChart from './swell-chart'

const API_DATE_FORMAT = 'MM/DD/YYYY'

const SwellOverview = class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: null,
      direction: null,
      period: null,
    }
  }

  componentDidMount() {
    this.findCurrentSwell()
  }

  swellsToday(swells) {
    const todaysKey = moment().format(API_DATE_FORMAT)
    return swells[todaysKey]
  }

  findCurrentSwell() {
    const now = moment()
    const todaysSwells = this.swellsToday(this.props.current.swell)
    const currentSwellIndex = _.findIndex(todaysSwells, swell => {
      const time = moment.utc(swell.time).local()
      return now.diff(time) <= 0
    })

    const currentSwell = todaysSwells[currentSwellIndex]

    this.setState({
      type: currentSwell.type,
      compassDirection: currentSwell.compassDirection,
      direction: currentSwell.direction,
      height: currentSwell.height,
      period: currentSwell.period,
    })
  }
  render() {
    const { type, period, compassDirection, height } = this.state

    return (
      <LinearGradient
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0, y: 0.5 }}
        locations={[0, 1]}
        colors={['#52BBFF', '#8ADFFF']}
        style={styles.container}
      >
        <View style={styles.swellOverview}>
          <Text style={[styles.ehancedBlueText, styles.swellHeight]}>
            {height}&apos;
          </Text>
          <Text style={[BaseStyle.secondaryHeader, styles.ehancedBlueText]}>
            {type}
          </Text>
          <Text style={[styles.swellPeriod, styles.ehancedBlueText]}>
            Swell period at {period}s from {compassDirection}
          </Text>
        </View>
        <SwellChart swell={this.props.current.swell} />
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingRight: BaseStyle.smallSpacing,
    paddingTop: 14,
    paddingBottom: BaseStyle.smallSpacing,
    marginHorizontal: BaseStyle.baseSpacing,
    marginBottom: BaseStyle.baseSpacing,
    borderRadius: 10,
    backgroundColor: BaseStyle.actionColor,
    shadowColor: BaseStyle.darkBackgroundColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  swellOverview: {
    paddingLeft: 40,
  },
  swellHeight: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 7,
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
