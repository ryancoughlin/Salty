import { Alert } from 'react-native'
import Config from 'react-native-config'

const BASE_URL = Config.BASE_URL
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

export default function(path) {
  const params = {
    headers: {
      ...DEFAULT_HEADERS,
    },
  }

  const response = fetch(`${BASE_URL}${path}`, params)

  response.catch(() => {
    Alert.alert('Cannot complete request', 'We were uable fetch tide information.', [
      { text: 'OK' },
    ])
  })

  return response.then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      return res.json().then(json => Promise.reject(json))
    }
  })
}
