import React, {Component} from 'react';
import {List} from 'react-native-elements';
import {Text, View, FlatList} from 'react-native';

export default class ContainerList extends Component {

  getItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '94%',
          marginLeft: '6%',
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  render () {
    return (
      <View style={this.props.containerStyle}>

        <Text style={this.props.headerStyle}>
          {this.props.headerText}
        </Text>

        <List
          containerStyle={{
            flex: 2,
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
        >
          <FlatList
            data={this.props.items}
            renderItem={({item}) => this.props.listItem (item)}
            keyExtractor={(item) => this.props.keyExtractor(item)}
            ItemSeparatorComponent={ this.props.hideSeparator ? 
                                      null : this.getItemSeparator}
          />
        </List>
      </View>
    );
  }
}
