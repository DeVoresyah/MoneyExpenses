import React, { useState, memo } from 'react'
import PropTypes from 'prop-types';
import { TextInput, View, Text } from 'react-native'

import styles from './Styles/InputStyle'
import { apply } from '../Themes/OsmiProvider'

const Input = props => {
  const { prefix, label, name, value, setFieldValue, errors, ...restProps } = props
  const [focused, setFocused] = useState(false)

  return (
    <View style={apply('mb-5')}>
      <Text style={styles.label}>{label}</Text>
      <View style={[
        styles.container,
        prefix && styles.containerPrefix,
        focused && styles.containerFocus
      ]}>
        {prefix}
        <TextInput
          value={value}
          placeholderColor={apply('dark-600')}
          onChangeText={value => setFieldValue(name, value)}
          style={[styles.inputStyle, prefix && styles.inputPrefix]}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {errors && (
        <Text style={styles.errorText}>{errors}</Text>
      )}
    </View>
  )
}

// Prop type warnings
Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  errors: PropTypes.string,
  prefix: PropTypes.element
}

// Defaults for props
Input.defaultProps = {
  label: 'Input Label',
  name: 'name',
  value: '',
  setFieldValue: (name, value) => alert(`Value for ${name} is ${value}`),
  errors: null,
  prefix: null
}

export default memo(Input)
