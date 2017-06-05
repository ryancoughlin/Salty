import _ from 'lodash'
import moment from 'moment'

import findNextTide from './find-next-tide'

export default function findTideDirection(tides) {
  const nextTide = findNextTide(tides)

  if (nextTide.tide === 'high') {
    return _.upperFirst('incoming')
  } else {
    return _.upperFirst('outgoing')
  }
}
