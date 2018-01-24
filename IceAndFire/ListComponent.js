import React, {component, Component} from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

export default class List extends Component{
    render(){
        return (
            <Text>Bello !!!</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

