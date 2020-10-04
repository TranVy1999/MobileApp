import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

import aboutStack from './aboutStack';
import homeStack from './homeStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: homeStack
    }
});

export default createAppContainer(RootDrawerNavigator);