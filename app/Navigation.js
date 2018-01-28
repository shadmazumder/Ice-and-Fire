import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HouseScreen from './containers/HouseScreen';
import BookScreen from './containers/BookScreen';
import { Icon } from 'react-native-elements'
const BaseNavigator = TabNavigator({
    House: {
        screen: HouseScreen,
        navigationOptions: {
            tabBarLabel: 'House',
            tabBarIcon: ({ tintColor }) =>
                <Icon name="home" size={35} color={tintColor} />,
        },
    },

    Book: {
        screen: BookScreen,
        navigationOptions: {
            tabBarLabel: 'Book',
            tabBarIcon: ({ tintColor }) =>
                <Icon name="book" size={35} color={tintColor} />,
        },
    },
})

export default BaseNavigator;