import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import {Icon} from 'react-native-elements'

import HouseScreen from './containers/HouseScreen';
import BookScreen from './containers/BookScreen';
import DetailsScreen from './components/DetailsScreen'

const HouseStack = StackNavigator({
    House: {
        screen: HouseScreen,
        navigationOptions: {
            header: null,
        },
    },

    HouseDetails: {
        screen: DetailsScreen,
        navigationOptions:{
            title: 'Details',
        },
    },
});

const BaseNavigator = TabNavigator({
    House: {
        screen: HouseStack,
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