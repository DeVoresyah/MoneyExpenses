import React, { memo } from 'react'
import PropTypes from 'prop-types';
import { Image, View, Text } from 'react-native'
import { Images } from '../Themes'
import TextUtil from '../Lib/TextUtil'

import styles from './Styles/ExpenseItemStyle'
import { apply } from '../Themes/OsmiProvider'

const ExpenseItem = props => {
  const { item } = props

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
    <View style={styles.container}>
      <View style={apply('row items-center')}>
        <View style={styles.iconWrapper}>
          <Image source={renderIcon(item?.id)} style={styles.icon} />
        </View>
        <Text style={styles.title}>{item?.title}</Text>
      </View>

      <Text style={styles.amount}>Rp. {TextUtil.formatMoney(item?.amount ?? 0)}</Text>
    </View>
  )
}

// Prop type warnings
ExpenseItem.propTypes = {
  item: PropTypes.object.isRequired,
}

// Defaults for props
ExpenseItem.defaultProps = {
  item: {}
}

export default memo(ExpenseItem)
