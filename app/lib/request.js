import { Alert } from 'react-native'
import Config from './config'

export default function makeRequest(location) {
  const { latitude, longitude } = location
  const baseUrl = `${Config.HOST}/get-data`
  const url = `${baseUrl}?latitude=${latitude}&longitude=${longitude}`

  return new Promise((resolve) => {
    fetch(url).then(data => resolve(data.json()))
    .catch((error) => {
      console.log(error)
      Alert.alert(
         'No Internet Connection',
         'We were uable fetch tide information.',
        [{ text: 'OK' }],
      )
    })
  })
}
