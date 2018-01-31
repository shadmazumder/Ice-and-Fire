import React, {Component} from 'react';
import {ListItem} from 'react-native-elements';

export default class CharacterListItem extends Component {
  getTitle (titles) {
    if (titles && titles.length > 0) {
      return titles[0];
    }
    return '';
  }
  render () {
    return (
      <ListItem
        containerStyle={{borderBottomWidth: 0}}
        title={this.props.item.name}
        subtitle={`AKA: ${this.getTitle (this.props.item.titles)}`}
        onPress={() => {
          this.props.onPress (this.props.item);
        }}
      />
    );
  }
}
