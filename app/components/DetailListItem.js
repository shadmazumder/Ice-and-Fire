import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';

export default class DetailListItem extends Component {
  render() {
    return (
      <ListItem
        containerStyle={{ borderBottomWidth: 0 }}
        title={this.props.item.key}
        subtitle={this.props.item.value}
      />
    );
  }
}