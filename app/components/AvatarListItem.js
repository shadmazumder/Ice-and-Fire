import React, {Component} from 'react';
import {ListItem} from 'react-native-elements';

export default class AvatarListItem extends Component {
  render () {
    return (
      <ListItem
        // roundAvatar
        containerStyle={{borderBottomWidth: 0}}
        title={this.props.item.name}
        subtitle={`${this.props.item.region}`}
        // avatar = {this.props.avatarUrl}
        onPress = {()=>{this.props.onPress(this.props.item)}}
      />
    );
  }
}
