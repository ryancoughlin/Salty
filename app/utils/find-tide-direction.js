import _ from 'lodash'

import findNextTide from './find-next-tide'

export default function findTideDirection(tides) {
  const nextTide = findNextTide(tides)

  if (nextTide.tide === 'high') {
    return _.upperFirst('incoming')
  }
  return _.upperFirst('outgoing')
}
