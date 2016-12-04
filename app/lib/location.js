import Geocoder from 'react-native-geocoder'

export function fetchLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve(position.coords)
    }, error => alert(error))
  })
}

export function fetchCityName(location) {
  return new Promise((resolve, reject) => {
    const { latitude, longitude } = location
    Geocoder.geocodePosition({ lat: latitude, lng: longitude }).then((userLocation) => {
      resolve(userLocation[0].locality)
    })
    .catch(error => alert(error))
  })
}
