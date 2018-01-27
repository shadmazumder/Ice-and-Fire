import React, {Component} from 'react';
import {List, ListItem} from 'react-native-elements';
import {Text, View, FlatList} from 'react-native';

export default class ContainerList extends Component {
  state = {
    // data: ['Item 44', 'Item 2', 'Item 3'],
  };

  getItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '85%',
          marginLeft: '15%',
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
            renderItem={({item}) => (
              <ListItem
                containerStyle={{borderBottomWidth: 0}}
                title={item.name}
                subtitle={`${item.publisher}, ${item.country}`}
              />
            )}
            // keyExtractor = {item=>item.id}
            ItemSeparatorComponent={this.getItemSeparator}
          />
        </List>
      </View>
    );
  }
}
