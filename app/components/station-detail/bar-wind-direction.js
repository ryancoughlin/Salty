import React from 'react'
import { G, Path } from 'react-native-svg'
import { Bar } from 'victory-native'

const BarWindDirection = props => (
  <G>
    <Bar {...props} style={{ fill: props.color, width: 1 }} />
    <Path x={props.x - 9} y={props.y0} d="M1.055.75h15" stroke={props.color} strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
    <G origin={'4, 6'} rotate={props.datum.direction} x={props.x - 4} y={props.y0 + 11}>
      <Path d="M4.464 1.16L8 10H5L4 8l-1 2H0l3.536-8.84c.102-.256.393-.38.65-.278.127.05.227.152.278.28z" fill={props.color} fillRule="evenodd" />
    </G>
  </G>)

export default BarWindDirection
