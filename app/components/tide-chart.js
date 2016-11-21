import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
} from 'react-native'

import moment from 'moment'
import _ from 'lodash'

import BaseStyle from '../base-styles'
import leftEdge from '../assets/images/chart/faded-edge-left.png'
import chartEdges from '../assets/images/chart/chart-edges.png'

import {
  VictoryLine,
  VictoryGroup,
  VictoryScatter,
  VictoryLabel,
  VictoryAxis,
} from 'victory-native'

export default class TideChart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { rawTides } = this.props
    return (
      <View style={{position: 'relative', height: 220}}>
        <View style={styles.edgesContainer} pointerEvents='none'>
            <Image source={chartEdges}/>
        </View>
        <ScrollView horizontal={true} style={{flex: 1}}>
          <VictoryGroup
            domainPadding={0}
            samples={200}
            height={220}
            width={2000}
            scale={{x: 'time', y: 'linear'}}
            data={ rawTides }
            x='time'
            y='height'
          >
          <VictoryAxis
            scale={'time'}
            style={{
              axis: {fill: 'transparent', stroke: 'transparent'},
              tickLabels: { stroke: 'red', fill: 'red', fontSize: 50 },
            }}
            tickValues={
              _.map(rawTides, (tide) => {
                return moment(tide.time).format('ha')
              })
            }
            tickFormat={(tick) => tick}
          />
          <VictoryLine
            style={{
              data: {
                stroke: BaseStyle.actionColor,
                strokeWidth: 2.5
              }
            }}
            interpolation='cardinal'
          />
          <VictoryScatter
            labels={(datum) => datum.y}
            labelComponent={<VictoryLabel dy={-0.5} text={(datum) =>  Math.round( datum.y * 10 ) / 10}/>}
            size={7}
            style={{
              labels: {
                fill: BaseStyle.actionColor,
              },
              data: {
                strokeWidth: 3,
                fill: 'white',
                stroke: BaseStyle.baseBackgroundColor,
              },
            }}
          />
          </VictoryGroup>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  edgesContainer: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
})
