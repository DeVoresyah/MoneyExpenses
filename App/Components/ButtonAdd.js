import React, { memo } from 'react'
// import PropTypes from 'prop-types';
import { TouchableNativeFeedback, TouchableOpacity, Platform, Image, View } from 'react-native'
import { Images } from '../Themes'

import styles from './Styles/ButtonAddStyle'
import { apply } from '../Themes/OsmiProvider'

const ButtonAdd = props => {
  const { style, ...restProps } = props

  return Platform.OS === 'ios' ? (
    <TouchableOpacity activeOpacity={0.9} {...props} style={[styles.container, style]}>
      <Image source={Images['icon-add']} style={styles.iconAdd} />
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(apply('white-soft'))} {...props}>
      <View style={[styles.container, style]}>
        <Image source={Images['icon-add']} style={styles.iconAdd} />
      </View>
    </TouchableNativeFeedback>
  )
}

// // Prop type warnings
// ButtonAdd.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// ButtonAdd.defaultProps = {
//   someSetting: false
// }

export default memo(ButtonAdd)
