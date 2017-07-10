import _ from 'lodash'
import moment from 'moment'

const DATE_FORMAT = 'MM/DD/YYYY'

export default function findNextTide(tides) {
  const now = moment()
  const todayKey = now.format(DATE_FORMAT)
  const todaysTides = tides[todayKey]

  const nextTideIndex = _.findIndex(todaysTides, tide => {
    const tideTime = moment.utc(tide.time).local()
    return now.diff(tideTime) <= 0
  })

  if (nextTideIndex === -1) {
    return findFirstTideTomorrow(tides)
  }

  return todaysTides[nextTideIndex]
}

function findFirstTideTomorrow(tides) {
  const now = moment()
  const tomorrowKey = now.add(1, 'days').format(DATE_FORMAT)

  return tides[tomorrowKey][0]
}
