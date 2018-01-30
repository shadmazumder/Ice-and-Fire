import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';

export default class BasicListItem extends Component {
  render() {
    return (
      <ListItem
        containerStyle={{ borderBottomWidth: 0 }}
        title={this.props.title}
        subtitle={this.props.subTitle}
        onPress={() => { this.props.onPress(this.props.item) }}
      />
    );
  }
}
