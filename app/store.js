import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import AppReducer from './reducers'

const logger = createLogger()
const store = createStore(AppReducer, autoRehydrate(), applyMiddleware(logger, thunk))

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
