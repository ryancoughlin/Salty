export default function makeRequest(location) {
  const { latitude, longitude } = location
  const baseURL = 'http://localhost:8000/api/get-data'

  return new Promise(function(resolve, reject) {
    fetch(`${baseURL}?lat=${latitude}&lng=${longitude}`)
    .then(res => res.json())
    .then(json => {
      resolve(json)
    })
    .catch((error) => {
      alert(error)
    });
  })
}
