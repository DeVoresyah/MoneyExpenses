import { put, select } from 'redux-saga/effects'
import { is } from 'ramda'

// process STARTUP actions
export function * startup (action) {
  if (__DEV__ && console.tron) {
    // straight-up string logging
    console.tron.log('Hello, I\'m an example of how to log via Reactotron.')
  }
}
