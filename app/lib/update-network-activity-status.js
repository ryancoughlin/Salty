import { StatusBar, Platform } from 'react-native'

function updateNetworkActivityStatus(status) {
  const updateStatus = Platform.select({
    ios: _status => StatusBar.setNetworkActivityIndicatorVisible(_status),
    android: () => {},
  })

  updateStatus(status)
}

export default updateNetworkActivityStatus
