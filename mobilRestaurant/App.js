import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen'
import ResultShowScreen from './src/screens/ResultsShowScreen';



const navigator = createStackNavigator({
    Search: SearchScreen,
    ResultsShow: ResultShowScreen
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'SearchScreen'
  }
});


export default createAppContainer(navigator);