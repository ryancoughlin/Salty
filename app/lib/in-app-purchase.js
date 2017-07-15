import { NativeModules } from 'react-native'
import { Sentry } from 'react-native-sentry'

const { InAppUtils } = NativeModules
export const monthlySubscription = 'com.catonthecouch.Tide.monthly'
export const yearlySubscription = 'com.catonthecouch.Tide.yearly'

export function loadProducts() {
  const productTypes = [monthlySubscription, yearlySubscription]
  return new Promise((resolve, reject) => {
    InAppUtils.loadProducts(productTypes, (error, products) => {
      if (error) {
        Sentry.captureMessage('Failed to load products')
        Sentry.setExtraContext({
          error,
        })
        reject(error)
      }

      resolve(products)
    })
  })
}

export function buyProduct(product) {
  return new Promise((resolve, reject) => {
    InAppUtils.purchaseProduct(product, (error, response) => {
      if (error) {
        Sentry.captureMessage('Failed to purchase a product')
        Sentry.setExtraContext({
          error,
        })
        reject(error)
      }

      if (response && response.productIdentifier) {
        resolve(response)
      }
    })
  })
}

export function restorePurchases() {
  return new Promise((resolve, reject) => {
    InAppUtils.restorePurchases((error, response) => {
      if (error) {
        Sentry.captureMessage('Failed to restore purchases')
        Sentry.setExtraContext({
          error,
        })
        reject(error)
      }

      resolve(response)
    })
  })
}
