import React, { useState, memo } from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, View, Text } from 'react-native'
import dayjs from 'dayjs'
import 'dayjs/locale/id'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { Images } from '../Themes'

import styles from './Styles/DatePickerStyle'
import { apply } from '../Themes/OsmiProvider'

const DatePicker = props => {
  const { label, name, value, errors, setFieldValue } = props
  const [showPicker, setShowPicker] = useState(false)

  const togglePicker = () => {
    setShowPicker(!showPicker)
  }

  const handleConfirm = date => {
    setFieldValue(name, date.toString())
    togglePicker()
  }

  const renderPicker = () => (
    <DateTimePickerModal
      isVisible={showPicker}
      mode="date"
      date={new Date(value)}
      onConfirm={date => handleConfirm(date)}
      onCancel={() => togglePicker()}
    />
  )

  return (
    <>
      {renderPicker()}
      <View style={apply('mb-5')}>
        <Text style={styles.label}>{label}</Text>
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={() => togglePicker()}>
          <Text style={styles.value}>{dayjs(value).locale('id').format('dddd, DD MMMM YYYY')}</Text>
          <Image source={Images['icon-calendar']} style={styles.iconCalendar} resizeMode='stretch' />
        </TouchableOpacity>
        {errors && (
          <Text style={styles.errorText}>{errors}</Text>
        )}
      </View>
    </>
  )
}

// Prop type warnings
DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  errors: PropTypes.string,
  setFieldValue: PropTypes.func.isRequired
}

// Defaults for props
DatePicker.defaultProps = {
  label: 'Pilih Tanggal',
  name: 'date',
  value: new Date().toString(),
  errors: null,
  setFieldValue: (name, value) => alert(`Value for ${name} is ${value}`)
}

export default memo(DatePicker)
