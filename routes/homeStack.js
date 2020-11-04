import { createStackNavigator } from 'react-navigator-stack';
import { createAppContainer } from 'react-navigation';

import LogIn from './App'
import signUp from './Pages/signUp'

const screens = {
    LogIn: {
        screen: LogIn
    }, 
    SignUp: {
        screen: signUp
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);