import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/AddScreenStyle'

const AddScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>AddScreen Container</Text>
    </ScrollView>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen)
