import { Alert } from 'react-native'
import Geocoder from 'react-native-geocoder'

export function fetchLocation() {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(
      position => {
        resolve(position.coords)
      },
      () => {
        Alert.alert(
          'Location is unavailable',
          'Enable location services for Salty under Settings',
          [{ text: 'OK' }],
        )
      },
    )
  })
}

export function geoCodeLocation(location) {
  return new Promise(resolve => {
    const { latitude, longitude } = location

    Geocoder.geocodePosition({ lat: latitude, lng: longitude })
      .then(userLocation => {
        const locality = userLocation[0].locality
        if (locality) {
          resolve(locality)
        } else {
          resolve(userLocation[0].subAdminArea)
        }
      })
      .catch(() => {
        Alert.alert(
          'Cannot find city name',
          'We were unable to geocode your position. Conditions displayed will be accurate.',
          [{ text: 'OK' }],
        )
      })
  })
}
