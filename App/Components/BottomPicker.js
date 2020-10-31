import React, { useState, useEffect, memo } from 'react'
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Animated,
  FlatList,
  Modal,
  Image,
  View,
  Text
} from 'react-native'
import { Images } from '../Themes'
import CategoryOption from './CategoryOption'

import styles from './Styles/BottomPickerStyle'
import { apply } from '../Themes/OsmiProvider'

const BottomPicker = props => {
  const { label, value, options, name, setFieldValue, errors } = props
  const [showModal, setShowModal] = useState(false)
  const translateY = new Animated.Value(335)

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

  const renderItem = ({ item, index }) => <CategoryOption item={item} onSelect={onSelect} />

  useEffect(() => {
    translateY.setValue(335)
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start()
  }, [showModal])

  const toggleModal = () => {
    translateY.setValue(0)
    Animated.timing(translateY, {
      toValue: 335,
      duration: 300,
      useNativeDriver: true
    }).start(() => setShowModal(!showModal))
  }

  const onSelect = item => {
    setFieldValue(name, item)
    toggleModal()
  }

  const renderModal = () => {
    return (
      <Modal
      visible={showModal}
      transparent={true}
      onRequestClose={() => toggleModal()}>
      <TouchableOpacity
      activeOpacity={1}
      style={styles.backdrop}
      onPress={() => toggleModal()}>
        <Animated.View style={[
          styles.modalContainer,
          {
            transform: [
              { translateY }
            ]
          }
        ]}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Pilih {label}</Text>
            <TouchableOpacity activeOpacity={1} onPress={() => toggleModal()}>
              <Image source={Images['icon-close']} style={styles.iconClose} resizeMode='stretch'/>
            </TouchableOpacity>
          </View>

          <FlatList
            data={options}
            keyExtractor={(item, index) => index.toString()}
            initialNumToRender={9}
            numColumns={3}
            renderItem={renderItem}
          />
        </Animated.View>
      </TouchableOpacity>
    </Modal>
    )
  }

  return (
    <>
      {renderModal()}
      <View style={apply('mb-5')}>
        <Text style={styles.label}>{label}</Text>
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={() => setShowModal(!showModal)}>
          <View style={styles.leftCol}>
            <View style={styles.iconCategoryWrapper}>
              <Image source={renderIcon(value?.id)} style={styles.iconCategory} />
            </View>
            <Text style={styles.selectedLabel}>{value?.title}</Text>
          </View>
          <View style={styles.chevronWrapper}>
            <Image source={Images['icon-collapse']} style={styles.iconChevron} resizeMode='stretch' />
          </View>
        </TouchableOpacity>
        {errors && (
          <Text style={styles.errorText}>{errors}</Text>
        )}
      </View>
    </>
  )
}

// Prop type warnings
BottomPicker.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  errors: PropTypes.string
}

// Defaults for props
BottomPicker.defaultProps = {
  label: 'Bottom Picker',
  value: { id: 1, title: 'Makanan' },
  options: [],
  name: 'bottomPicker',
  setFieldValue: (name, value) => alert(`Value for ${name} is ${value}`),
  errors: null
}

export default memo(BottomPicker)
