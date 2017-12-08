import React from 'react'
import { Text } from 'react-native'
import _ from 'lodash'

import findNextTide from '../../utils/find-next-tide'

const tideDirection = tides => {
  const nextTide = findNextTide(tides)

  if (nextTide.type === 'high') {
    return _.upperFirst('incoming')
  }

  return _.upperFirst('outgoing')
}

const TideDirectionPhrase = ({ style, tides }) =>
  (<Text style={style}>
    {tideDirection(tides)}
  </Text>)

export default TideDirectionPhrase
