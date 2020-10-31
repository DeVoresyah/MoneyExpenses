import React, { memo } from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, View, Text } from 'react-native'
import { Images } from '../Themes'

import styles from './Styles/CategoryOptionStyle'

const CategoryOption = props => {
  const { item, onSelect } = props

  const renderIcon = id => {
    switch (id) {
      case 1:
        return Images['icon-food']

      case 2:
        return Images['icon-internet']

      case 3:
        return Images['icon-education']

      case 4:
        return Images['icon-gift']

      case 5:
        return Images['icon-transport']

      case 6:
        return Images['icon-shopping']

      case 7:
        return Images['icon-house']

      case 8:
        return Images['icon-sport']

      case 9:
        return Images['icon-entertaint']

      default:
        return null
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={() => onSelect(item)}>
      <View style={styles.iconWrapper}>
        <Image source={renderIcon(item?.id)} style={styles.icon} />
      </View>
      <Text style={styles.label}>{item?.title}</Text>
    </TouchableOpacity>
  )
}

// Prop type warnings
CategoryOption.propTypes = {
  item: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
}

// Defaults for props
CategoryOption.defaultProps = {
  item: {},
  onSelect: (item) => alert(`${item?.id} is selected`)
}

export default memo(CategoryOption)
