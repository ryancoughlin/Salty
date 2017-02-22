import sun from '../assets/images/weather/sunny.png'
import partlySunny from '../assets/images/weather/partly-sunny.png'
import cloudy from '../assets/images/weather/cloudy.png'
import rain from '../assets/images/weather/rainy.png'
import wind from '../assets/images/weather/wind.png'

const weatherTypes = {
  'clear-day': sun,
  'wind': wind,
  'rain': rain,
  'cloudy': cloudy,
  'partly-cloudy-day': partlySunny,
  'partly-cloudy-night': partlySunny,
}

export default function weatherIcon(weather) {
  return weatherTypes[weather] || sun
}
