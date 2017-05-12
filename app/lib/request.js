import { Alert } from 'react-native'
import Config from './config'

export default function requestTideData(location) {
  const { latitude, longitude } = location
  const baseUrl = `${Config.HOST}/api/get-data`
  const url = `${baseUrl}?latitude=${latitude}&longitude=${longitude}`

  return new Promise((resolve) => {
    fetch(url).then(handleErrors).then(data => resolve(data.json())).catch(() => {
      Alert.alert('Cannot complete request', 'We were uable fetch tide information.', [
        { text: 'OK' },
      ])
    })
  })
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText || reponse.status)
  }
  return response
}
