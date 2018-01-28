import React, {Component} from 'react';
import {ListItem} from 'react-native-elements';

export default class BasicListItem extends Component {
  render () {
    return (
      <ListItem
        containerStyle = {{borderBottomWidth: 0}}
        title = {this.props.item.name}
        subtitle = {`${this.props.item.publisher}, ${this.props.item.country}`}
        onPress = {()=>{this.props.onPress(this.props.item)}}
      />
    );
  }
}
