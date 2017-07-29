import _ from 'lodash'
import moment from 'moment'

const now = moment()

export default function findNextTide(tides) {
  const allTides = _.flatten(_.values(tides))
  const nextTideIndex = _.findIndex(allTides, tide => {
    const tideTime = moment.utc(tide.time).local()
    return now.diff(tideTime) <= 0
  })

  return allTides[nextTideIndex]
}
