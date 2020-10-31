import React from 'react'
import PropTypes from 'prop-types';
import { StatusBar as AppBar, Platform, View } from 'react-native'

import styles from './Styles/StatusBarStyle'
import { apply } from '../Themes/OsmiProvider'

const StatusBar = props => {
  const { backgroundColor, barStyle, header } = props

  return Platform.OS === 'ios' ? (
    <View style={{ height: header ? 0 : 44, backgroundColor }}>
      <AppBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  ) : (
    <AppBar {...props} />
  )
}

// Prop type warnings
StatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  barStyle: PropTypes.string.isRequired,
  header: PropTypes.bool
}

// Defaults for props
StatusBar.defaultProps = {
  backgroundColor: apply("white"),
  barStyle: "dark-content",
  header: true
}

export default StatusBar
