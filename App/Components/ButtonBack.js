import React, { useContext, memo } from 'react'
// import PropTypes from 'prop-types';
import { TouchableNativeFeedback, TouchableOpacity, Platform, Image, View } from 'react-native'
import { NavigationContext } from 'react-navigation'
import styles from './Styles/ButtonBackStyle'
import { Images } from '../Themes'
import { apply } from '../Themes/OsmiProvider'

const ButtonBack = props => {
  const { style, ...restProps } = props
  const navigation = useContext(NavigationContext)

  return Platform.OS === 'ios' ? (
    <TouchableOpacity
    activeOpacity={0.9}
    onPress={() => navigation.goBack()}
    {...props}
    style={[styles.container, style]}>
      <Image source={Images['icon-back']} style={styles.iconBack} />
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback
    background={TouchableNativeFeedback.Ripple(apply('white-soft'))}
    onPress={() => navigation.goBack()}
    {...props}>
      <View style={[styles.container, style]}>
        <Image source={Images['icon-back']} style={styles.iconBack} />
      </View>
    </TouchableNativeFeedback>
  )
}

// // Prop type warnings
// ButtonBack.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// ButtonBack.defaultProps = {
//   someSetting: false
// }

export default memo(ButtonBack)
