import React, {Component} from 'react';
import {List, ListItem} from 'react-native-elements';
import {Text, View, FlatList} from 'react-native';

export default class ContainerList extends Component {
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
                // title={item}
                // subtitle={item}
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
