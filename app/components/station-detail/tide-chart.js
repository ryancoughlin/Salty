import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
} from 'react-native'

import moment from 'moment'
import _ from 'lodash'

import BaseStyle from '../../base-styles'
import chartEdges from '../../assets/images/chart/chart-edges.png'

import {
  VictoryLine,
  VictoryChart,
  VictoryScatter,
  VictoryLabel,
  VictoryAxis,
} from 'victory-native'

export default class TideChart extends Component {
  render() {
    const { tides } = this.props

    const tickStyle = {
      axis: {
        strokeOpacity: 1,
      },
      tickLabels: {
        fontSize: 12,
        fill: 'red',
      },
    }

    return (
      <View style={styles.container}>
        <View style={styles.edgesContainer} pointerEvents='none'>
          <Image source={chartEdges}/>
        </View>
        <ScrollView horizontal={true} style={{flex: 1}}>
          <VictoryChart
            padding={50}
            height={200}
            width={3000}
            x='time'
            y='height'
            data={ tides }
            scale={{x: 'time', y: 'linear'}}
          >
            <VictoryLine
              interpolation='cardinal'
              x='time'
              y='height'
              data={ tides }
              style={{
                data: {
                  stroke: BaseStyle.actionColor,
                  strokeWidth: 2.5
                }
              }}
            />
            <VictoryScatter
              x='time'
              y='height'
              data={ tides }
              labels={(datum) => datum.y}
              labelComponent={<VictoryLabel dy={-0.2 } text={(datum) =>  Math.round( datum.y * 10 ) / 10}/>}
              size={7}
              style={{
                labels: {
                  fill: BaseStyle.actionColor,
                  fontFamily: BaseStyle.numericFontFamily,
                  fontSize: 12,
                },
                data: {
                  strokeWidth: 3,
                  fill: 'white',
                  stroke: BaseStyle.baseBackgroundColor,
                },
              }}
            />
          <VictoryAxis
            dependentAxis
            scale='time'
            orientation='bottom'
            tickValues={
              _.map(tides, (tide) => {
                return moment(tide.time).format('ha')
              })
            }
          />
          </VictoryChart>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  edgesContainer: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
})
