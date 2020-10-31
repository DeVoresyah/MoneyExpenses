import React, { useCallback, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, Platform, View, Text } from 'react-native'
import SafeAreaView  from 'react-native-safe-area-view'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'

// Component
import ButtonBack from '../Components/ButtonBack'
import StatusBar from '../Components/StatusBar'
import Input from '../Components/Input'
import BottomPicker from '../Components/BottomPicker'
import DatePicker from '../Components/DatePicker'
import Button from '../Components/Button'

// Styles
import styles from './Styles/AddScreenStyle'
import headerStyles from '../Navigation/Styles/NavigationStyles'
import { apply } from '../Themes/OsmiProvider'

const schema = Yup.object().shape({
  billName: Yup.string()
    .required("Nama pengeluaran harus diisi"),
  category: Yup.object()
    .required("Kategori pengeluaran harus diisi"),
  date: Yup.string()
    .required("Tanggal pengeluaran harus diisi"),
  amount: Yup.string()
    .required("Nominal pengeluaran harus diisi")
})

const initialValues = {
  billName: '',
  category: { id: 1, title: 'Makanan' },
  date: new Date().toString(),
  amount: ''
}

const AddScreen = props => {
  const renderForm = formProps => {
    const { values, setFieldValue, errors } = formProps
    const setValue = useCallback(setFieldValue, [])
    const [category, setCategory] = useState([
      {
        id: 1,
        title: "Makanan"
      }, {
        id: 2,
        title: "Internet"
      }, {
        id: 3,
        title: "Edukasi"
      }, {
        id: 4,
        title: "Hadiah"
      }, {
        id: 5,
        title: "Transport"
      }, {
        id: 6,
        title: "Belanja"
      }, {
        id: 7,
        title: "Alat Rumah"
      }, {
        id: 8,
        title: "Olahraga"
      }, {
        id: 9,
        title: "Hiburan"
      }
    ])

    return (
      <View>
        <Input
          name='billName'
          label='Nama pengeluaran'
          value={values.billName}
          placeholder='Nasi goreng'
          setFieldValue={setValue}
          errors={errors.billName}
        />

        <BottomPicker
          name='category'
          label='Kategori'
          value={values.category}
          setFieldValue={setValue}
          errors={errors.category}
          options={category}
        />

        <DatePicker
          name='date'
          label='Tanggal'
          value={values.date}
          setFieldValue={setValue}
          errors={errors.date}
        />

        <Input
          name='amount'
          label='Nominal'
          value={values.amount}
          placeholder='0'
          keyboardType='number-pad'
          setFieldValue={setValue}
          errors={errors.amount}
          prefix={<Text style={styles.nominalRp}>Rp.</Text>}
        />

        <Button style={styles.btnSubmit} onPress={(e) => {formProps.handleSubmit(e)}}>
          <Text style={styles.btnSubmitLabel}>Simpan</Text>
        </Button>
      </View>
    )
  }

  const handleSubmit = async (values, actions) => {
    const onAdd = props.navigation.getParam('onAdd')
    actions.setSubmitting(false);

    onAdd({
      id: values.category.id,
      title: values.billName,
      amount: values.amount
    })
    props.navigation.goBack()

    return false;
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView style={apply('flex bg-white')} forceInset={{ bottom: 'never' }}>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={60}
        style={apply('flex')}>
          <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <Text style={styles.titleScreen}>{`Tambah pengeluaran\nbaru`}</Text>

            <Formik
            onSubmit={handleSubmit}
            validationSchema={schema}
            validateOnChange={false}
            initialValues={initialValues}>
              {formProps => renderForm(formProps)}
            </Formik>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

AddScreen.navigationOptions = ({ navigation }) => {
  const { params = {} } = navigation

  return {
    headerStyle: headerStyles.noShadow,
    headerTitle: '',
    headerLeft: () => <ButtonBack />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen)
