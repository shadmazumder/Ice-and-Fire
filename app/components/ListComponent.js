import React, {Component} from 'react';
import {List} from 'react-native-elements';
import {Text, View, FlatList} from 'react-native';

export default class ContainerList extends Component {

  render () {
    return (
      <View style={this.props.containerStyle}>

        <Text style={this.props.headerStyle}>
          {this.props.headerText}
        </Text>

        <List
          containerStyle={{
            flex: 2,
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
        >
          <FlatList
            data={this.props.items}
            renderItem={({item}) => this.props.listItem (item)}
            keyExtractor={(item) => this.props.keyExtractor(item)}
          />
        </List>
      </View>
    );
  }
}
