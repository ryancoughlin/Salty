import _ from 'lodash'
import moment from 'moment'

export default function findNextTide(tides) {
  const now = moment()
  const nextTideIndex = _.findIndex(tides, (tide) => {
    const tideTime = moment(tide.time)
    return now.diff(tideTime) <= 0
  })

  return tides[nextTideIndex]
}
