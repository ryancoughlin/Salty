import sunIcon from '../assets/images/weather/sunny.png'
import partlySunnyIcon from '../assets/images/weather/partly-sunny.png'
import cloudyIcon from '../assets/images/weather/cloudy.png'
import rainIcon from '../assets/images/weather/rainy.png'
import windIcon from '../assets/images/weather/wind.png'
import fogIcon from '../assets/images/weather/fog.png'
import snowIcon from '../assets/images/weather/snow.png'

const weatherTypes = {
  'clear-day': sunIcon,
  'partly-cloudy-day': partlySunnyIcon,
  'partly-cloudy-night': partlySunnyIcon,
  wind: windIcon,
  rain: rainIcon,
  cloudy: cloudyIcon,
  fog: fogIcon,
  snow: snowIcon,
}

export default function weatherIcon(weather) {
  return weatherTypes[weather] || sunIcon
}
