import { Alert } from 'react-native'
import Config from './config'

export default function makeRequest(location) {
  const { latitude, longitude } = location
  const url = `${Config.HOST}/get-data`

  return new Promise((resolve, reject) => {
    fetch(`${url}?lat=${latitude}&lng=${longitude}`)
    .then(res => res.json())
    .then((json) => {
      resolve(json)
    })
    .catch((error) => {
      Alert.alert(
         'No Internet Connection',
         'That\'s not good. Salty could not fetch tide information.',
        [{ text: 'OK' }]
      )
    })
  })
}
