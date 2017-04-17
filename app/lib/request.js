import { Alert } from 'react-native'
import Config from './config'

export default function requestTideData(location) {
  const { latitude, longitude } = location
  const baseUrl = `${Config.HOST}/api/get-data`
  const url = `${baseUrl}?latitude=${latitude}&longitude=${longitude}`

  return new Promise((resolve) => {
    fetch(url).then(data => resolve(data.json())).catch(() => {
      Alert.alert('No Internet Connection', 'We were uable fetch tide information.', [
        { text: 'OK' },
      ])
    })
  })
}
