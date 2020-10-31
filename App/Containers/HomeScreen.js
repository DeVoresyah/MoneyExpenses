import React, { useState } from 'react'
import {
  ScrollView,
  FlatList,
  Image,
  View,
  Text,
} from 'react-native'
import SafeAreaView  from 'react-native-safe-area-view'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import Toast from '../Lib/Toast'

// Components
import StatusBar from '../Components/StatusBar'
import CategoryCard from '../Components/CategoryCard'
import ExpenseItem from '../Components/ExpenseItem'
import ButtonAdd from '../Components/ButtonAdd'

// Styles
import styles from './Styles/HomeScreenStyle'
import { apply } from '../Themes/OsmiProvider'
import TextUtil from '../Lib/TextUtil'

const HomeScreen = props => {
  const [category, setCategory] = useState([
    {
      id: 1,
      title: "Makanan",
      total: 50000
    }, {
      id: 2,
      title: "Internet",
      total: 50000
    }, {
      id: 3,
      title: "Edukasi",
      total: 20000
    }, {
      id: 4,
      title: "Hadiah",
      total: 50000
    }, {
      id: 5,
      title: "Transport",
      total: 50000
    }, {
      id: 6,
      title: "Belanja",
      total: 50000
    }, {
      id: 7,
      title: "Alat Rumah",
      total: 50000
    }, {
      id: 8,
      title: "Olahraga",
      total: 50000
    }, {
      id: 9,
      title: "Hiburan",
      total: 50000
    }
  ])
  const [dailyExpenses, setDailyExpenses] = useState([{
    id: 1,
    title: "Ayam Geprek",
    amount: 15000
  }, {
    id: 2,
    title: "Voucher 10 GB",
    amount: 50000
  }, {
    id: 1,
    title: "Pecel",
    amount: 15000
  }, {
    id: 1,
    title: "Mie Gacoan",
    amount: 20000
  }, {
    id: 5,
    title: "Gojek",
    amount: 20000
  }])

  const addExpense = (data) => {
    setDailyExpenses([data, ...dailyExpenses])
    Toast('Pengeluaran berhasil ditambahkan!', 'LONG')
  }

  const renderCategoryItem = ({ item, index }) => index === category.length - 1 ? (
    <CategoryCard item={item} cardStyle={apply('mr-5')} />
  ) : (
    <CategoryCard item={item} />
  )

  const renderExpensesItem = ({ item, index }) => <ExpenseItem item={item} />

  return (
    <>
      <StatusBar backgroundColor={apply('primary')} barStyle='light-content' header={false} />
      <SafeAreaView style={apply('flex bg-screen')} forceInset={{ bottom: 'never' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <View style={styles.iconUserWrapper}>
              <Image source={Images["icon-user"]} style={{width:27, height:27}} />
            </View>
            <Text style={styles.headerDesc}>Pengeluaran Anda hari ini</Text>
            <Text style={styles.headerExpense}>Rp. {TextUtil.formatMoney(120000)}</Text>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>Pengeluaran berdasarkan kategori</Text>
            <FlatList
              data={category}
              keyExtractor={(item, index) => index.toString()}
              initialNumToRender={10}
              renderItem={renderCategoryItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={apply('mb-7')}
            />

            <Text style={styles.sectionTitle}>Semua Pengeluaran</Text>
            <View style={styles.allExpenseCard}>
              <Text style={styles.allExpenseTitle}>Hari ini</Text>
              <FlatList
                data={dailyExpenses}
                keyExtractor={(item, index) => index.toString()}
                initialNumToRender={10}
                renderItem={renderExpensesItem}
                showVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <ButtonAdd onPress={() => props.navigation.navigate('Add', {
        onAdd: addExpense
      })} />
    </>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

HomeScreen.navigationOptions = ({ navigation }) => {
  const { params = {} } = navigation

  return {
    headerShown: false
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
