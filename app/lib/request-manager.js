import updateNetworkActivityStatus from './update-network-activity-status'

const requestManager = {
  requestCount: 0,

  wrap(func) {
    return (...args) => {
      this._startRequest()
      const result = func(...args)
      result.finally(() => this._finishRequest())

      return result
    }
  },

  _startRequest() {
    updateNetworkActivityStatus(true)
    this.requestCount += 1
  },

  _finishRequest() {
    this.requestCount -= 1

    if (this.requestCount === 0) {
      updateNetworkActivityStatus(false)
    }
  },
}

export const withActivityIndicator = requestManager.wrap.bind(requestManager)
