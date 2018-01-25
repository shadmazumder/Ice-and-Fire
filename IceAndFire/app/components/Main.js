import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, { Component } from 'react';
import List from './ListComponent'

export default class Main extends Component {
    state = {
        headerTextAlign: 'center', //`left`,
        headerText: 'Header Goes here',
        headerTextDecoration: 'none', //'underline',
        headerTextFontSize: 18 //20
    }

    render() {
        return (
            <List containerStyle={styles.container} 
            headerStyle = {[
                styles.header, 
                {textAlign: this.state.headerTextAlign}, 
                {textDecorationLine: this.state.headerTextDecoration},
                {fontSize: this.state.headerTextFontSize}
            ]}
            headerText =  {this.state.headerText}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    header: {
        flex: 1,
        fontWeight: 'bold',
        margin: 8,
    }
});

