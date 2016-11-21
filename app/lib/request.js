import Config from './config'

export default function makeRequest(location) {
  const { latitude, longitude } = location

  const url = `${Config.HOST}/get-data`

  return new Promise(function(resolve, reject) {
    fetch(`${url}?lat=${latitude}&lng=${longitude}`)
    .then(res => res.json())
    .then(json => {
      resolve(json)
    })
    .catch((error) => {
      alert(error)
    });
  })
}
