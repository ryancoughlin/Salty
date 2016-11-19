import Geocoder from 'react-native-geocoder'

export function fetchLocation() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve(position.coords)
    }, (error) => alert(error))
  })
}

export function fetchCityName(location) {
  return new Promise(function (resolve, reject) {
    const { latitude, longitude } = location
    Geocoder.geocodePosition({lat: latitude, lng: longitude}).then(location => {
      resolve(location[0].locality)
    })
    .catch(error => alert(error))
  })
}
