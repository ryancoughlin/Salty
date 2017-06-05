import _ from 'lodash'
import moment from 'moment'

export default function findTideDirection(todaysTides) {
  const now = moment()
  const isPastTide = tide => moment.utc(tide.time).local().diff(now, 'minutes') < 0
  const futureTides = _.filter(todaysTides, tide => !isPastTide(tide))
  const nextTide = futureTides[0].tide

  if (nextTide === 'high' || futureTides.length === 0) {
    return _.upperFirst('incoming')
  } else {
    return _.upperFirst('outgoing')
  }
}
