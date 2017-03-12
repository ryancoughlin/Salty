import _ from 'lodash'

export default function findTideDirection(todaysTides) {
  const futureTides = _.filter(todaysTides, tide => !tide.pastTide)

  if (futureTides[0] === 'high') {
    return _.upperFirst('incoming')
  } else {
    return _.upperFirst('outgoing')
  }
}
