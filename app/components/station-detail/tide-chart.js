import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
} from 'react-native'

import _ from 'lodash'
import {
  VictoryLine,
  VictoryChart,
  VictoryScatter,
  VictoryAxis,
} from 'victory-native'

import BaseStyle from '../../base-styles'
import chartEdges from '../../assets/images/chart/chart-edges.png'

export default class TideChart extends Component {
  get formattedTides() {
    return _.map(this.props.tides, (tide) => {
      return {
        ...tide,
        time: new Date(tide.time),
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }} horizontal>
          <VictoryChart
            height={200}
            width={2100}
            scale={{ x: 'time', y: 'linear' }}
            padding={{ top: 30, right: 20, bottom: 40, left: 20 }}
          >
            <VictoryAxis
              scale="time"
              orientation="bottom"
              offsetY={30}
              tickValues={
                _.map(this.formattedTides, (tide) => {
                  return tide.time
                })
              }
              style={BaseStyle.chartAxisStyles}
            />
            <VictoryLine
              domainPadding={{ x: [3, 0] }}
              data={this.formattedTides}
              interpolation="cardinal"
              x="time"
              y="height"
              style={{
                data: {
                  stroke: BaseStyle.actionColor,
                  strokeWidth: 3,
                },
              }}
            />
            <VictoryScatter
              x="time"
              y="height"
              data={this.formattedTides}
              labels={datum => `${datum.y}'`}
              size={6}
              style={{
                labels: {
                  fill: BaseStyle.baseTextColor,
                  fontFamily: BaseStyle.numericFontFamily,
                  fontSize: 12,
                },
                data: {
                  strokeWidth: 5,
                  fill: BaseStyle.actionColor,
                  stroke: 'white',
                },
              }}
            />
          </VictoryChart>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    shadowColor: BaseStyle.darkBackgroundColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    marginBottom: 40,
  },
  edgesContainer: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
})
