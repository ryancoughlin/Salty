import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import AppReducer from './reducers'

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger')
  const logger = createLogger()
  middlewares.push(logger)
}

const store = createStore(
  AppReducer,
  compose(applyMiddleware(...middlewares), autoRehydrate()),
)

export function rehydrateStore(rehydrateCallback) {
  persistStore(
    store,
    {
      storage: AsyncStorage,
      whitelist: ['stations'],
    },
    rehydrateCallback,
  )
}

export default store
