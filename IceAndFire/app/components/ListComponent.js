import React, {component, Component} from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

export default class List extends Component{
    
    render(){
        return (
            <View style = {this.props.containerStyle}>
                <Text style = {this.props.headerStyle}>{this.props.headerText}</Text>

            </View>
        )
    }
}

