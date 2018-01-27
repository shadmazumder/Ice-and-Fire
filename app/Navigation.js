import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HouseScreen from './components/HouseScreen';
import BookScreen from './components/BookScreen';

const BaseNavigator = TabNavigator ({
    House: {
        screen: HouseScreen,

    },

    Book:{
        screen: BookScreen,

    },
})

export default BaseNavigator;