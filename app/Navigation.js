import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'

import HouseScreen from './containers/HouseScreen';
import BookScreen from './containers/BookScreen';
import HouseDetailsScreen from './containers/HouseDetailsScreen';
import CharacterDetailsScreen from './containers/CharacterDetailsScreen';
import BookCharacterDetailsScreen from './containers/BookCharacterDetailsScreen';
import BookDetailsScreen from './containers/BookDetailScreen';

const HouseStack = StackNavigator({
    House: {
        screen: HouseScreen,
        navigationOptions: {
            header: null,
        },
    },

    HouseDetails: {
        screen: HouseDetailsScreen,
        navigationOptions: {
            title: 'House Details',
        },
    },
    HouseCharacter: {
        screen: CharacterDetailsScreen,
        navigationOptions: {
            title: 'Character Details',
        },
    }
});

const BookStack = StackNavigator({
    Book: {
        screen: BookScreen,
        navigationOptions: {
            header: null,
        },
    },

    BookDetails: {
        screen: BookDetailsScreen,
        navigationOptions: {
            title: 'Book Details',
        },
    },
    BookCharacter: {
        screen: BookCharacterDetailsScreen,
        navigationOptions: {
            title: 'Character Details',
        },
    }
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
        screen: BookStack,
        navigationOptions: {
            tabBarLabel: 'Book',
            tabBarIcon: ({ tintColor }) =>
                <Icon name="book" size={35} color={tintColor} />,
        },
    },
});

export default BaseNavigator;