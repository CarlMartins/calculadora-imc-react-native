import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Main } from './pages/Main';
import { Book } from './pages/Book';


const RootStack = createStackNavigator(
  {
    Main,
    Book
  },
  {
    initialRouteName: "Main",
  }
);

const AppContainer = createAppContainer(RootStack);

export {
  AppContainer
};


// createSwitchNavigator(
//   {
//     Main,
//     Book
//   },
//   {
//     initialRouteName: "Main",
//     backBehavior: "history"
//   }
// )