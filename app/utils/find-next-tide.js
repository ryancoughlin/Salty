import _ from 'lodash'
import moment from 'moment'

export default function findNextTide(tides) {
  const allTides = _.flatten(_.values(tides))
  const nextTideIndex = _.findIndex(allTides, tide => {
    const tideTime = moment.utc(tide.time).local()
    return moment().diff(tideTime) <= 0
  })

  return allTides[nextTideIndex]
}
