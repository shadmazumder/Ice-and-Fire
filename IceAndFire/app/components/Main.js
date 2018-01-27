import React, { Component } from 'react';
import HouseScreen from "./HouseScreen";
import BookScreen from "./BookScreen";
import { StackNavigator, TabNavigator } from 'react-navigation';

export default class Main extends Component {
    render() {
        return (
            <RootNavigator/>
        );
    }
}

const MainScreenNavigator = TabNavigator({
    House: { screen: HouseScreen },
    Book: { screen: BookScreen },
});

const RootNavigator = StackNavigator({
    Main: {
        screen: MainScreenNavigator,
    },
});

