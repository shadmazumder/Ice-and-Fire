import React, {component, Component} from 'react';
import {List, ListItem} from 'react-native-elements';
import {
    Text,
    StyleSheet,
    View,
    FlatList
} from 'react-native';


export default class ContainerList extends Component{
    
    state = {
        data: ['Item 1', 'Item 2', 'Item 3']
    }

    render(){
        return (
            <View style = {this.props.containerStyle}>
            
                <Text style = {this.props.headerStyle}>{this.props.headerText}</Text>

                <List>
                    <FlatList 
                        data = {this.state.data}
                        renderItem = {({ item }) => (
                            <ListItem 
                                title = {item}
                            />
                        )}
                    />
                </List>
            </View>
        )
    }
}

