import React, { memo } from 'react'
import PropTypes from 'prop-types';
import { Image, View, Text } from 'react-native'
import { Images } from '../Themes'
import TextUtil from '../Lib/TextUtil'

import styles from './Styles/CategoryCardStyle'

const CategoryCard = props => {
  const { item, cardStyle } = props

  const renderIcon = id => {
    switch (id) {
      case 1:
        return Images['icon-food-light']

      case 2:
        return Images['icon-internet-light']

      case 3:
        return Images['icon-education-light']

      case 4:
        return Images['icon-gift-light']

      case 5:
        return Images['icon-transport-light']

      case 6:
        return Images['icon-shopping-light']

      case 7:
        return Images['icon-house-light']

      case 8:
        return Images['icon-sport-light']

      case 9:
        return Images['icon-entertaint-light']

      default:
        return null
    }
  }

  console.tron.log("log item", item)

  return (
    <View style={[styles.card, cardStyle]}>
      <View style={styles.cardIconWrapper}>
        <Image source={renderIcon(item?.id)} style={styles.cardIcon} />
      </View>

      <Text style={styles.cardLabel}>{item?.title}</Text>
      <Text style={styles.cardAmount}>Rp. {TextUtil.formatMoney(item?.total)}</Text>
    </View>
  )
}

// Prop type warnings
CategoryCard.propTypes = {
  item: PropTypes.object.isRequired,
  cardStyle: PropTypes.object
}

// Defaults for props
CategoryCard.defaultProps = {
  item: {},
  cardStyle: null
}

export default memo(CategoryCard)
