import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'

import {
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryAxis,
} from 'victory-native'
import moment from 'moment'
import _ from 'lodash'
import BaseStyle from '../../base-styles'

export default class TideChart extends Component {
  render() {
    const { wind } = this.props

    const newWind = wind.map((w, i) => {
        return Object.assign({}, wind[i], {time: new Date(w.time)});
    });


    console.log(newWind)

    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }} horizontal>
          <VictoryChart
            height={230}
            width={2500}
            scale={{x: "time"}}
          >
            <VictoryBar
              y="windSpeed"
              x="time"
              data={newWind}
              labelComponent={
                <VictoryLabel
                  dy={-0.25}
                  dx={-20}
                  textAnchor="middle"
                />
              }
              labels={
                (datum) => `${datum.y}mph`
              }
              style={{
                data: {
                  fill: BaseStyle.actionColor,
                  width: 34,
                },
                labels: {
                  fontSize: 12,
                  padding: 5,
                  fontFamily: BaseStyle.numericFontFamily,
                  fill: BaseStyle.baseTextColor,
                }
              }}
            />
            <VictoryAxis
              tickValues={
                _.map(newWind, (wind) => {
                  return wind.time
                })
              }
              style={{
                axis: { stroke: 'red' },
                tickLabels: {
                  fontSize: 10,
                  padding: 5,
                  fontFamily: BaseStyle.numericFontFamily,
                  fill: BaseStyle.subtleColor,
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
  },
  edgesContainer: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
})
