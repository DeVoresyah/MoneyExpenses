import React, { useContext, memo } from 'react'
import { TouchableNativeFeedback, TouchableOpacity, Platform, Image, View } from 'react-native'
import { NavigationContext } from 'react-navigation'
import { Images } from '../Themes'

import styles from './Styles/ButtonAddStyle'
import { apply } from '../Themes/OsmiProvider'

const ButtonAdd = props => {
  const { style, ...restProps } = props
  const navigation = useContext(NavigationContext)

  return Platform.OS === 'ios' ? (
    <TouchableOpacity
    activeOpacity={0.9}
    onPress={() => navigation.navigate('Add')}
    {...props}
    style={[styles.container, style]}>
      <Image source={Images['icon-add']} style={styles.iconAdd} />
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback
    background={TouchableNativeFeedback.Ripple(apply('white-soft'))}
    onPress={() => navigation.navigate('Add')}
    {...props}>
      <View style={[styles.container, style]}>
        <Image source={Images['icon-add']} style={styles.iconAdd} />
      </View>
    </TouchableNativeFeedback>
  )
}

export default memo(ButtonAdd)
