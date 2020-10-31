import React from 'react'
import { ToastAndroid, Platform } from 'react-native'
import ToastIOS from 'react-native-simple-toast'

export default (msg, time) => {
  return Platform.OS === 'ios' ? ToastIOS.show(msg, ToastIOS[time]) : ToastAndroid.show(msg, ToastAndroid[time])
}
