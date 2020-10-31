import { createAppContainer } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import AddScreen from '../Containers/AddScreen'
import { createStackNavigator } from 'react-navigation-stack';

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  Home: { screen: HomeScreen },
  Add: { screen: AddScreen },
}, {
  // Default config for all screens
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
