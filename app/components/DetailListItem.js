import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

export default class DetailListItem extends Component {
  render() {
    return (
      <ListItem
        containerStyle={{ borderBottomWidth: 0 }}
        hideChevron={true}
        title={this.props.item.key}
        // subtitle={this.props.item.value}
        subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>
            {this.props.item.value}
            </Text>
          </View>
        }
      />
    );
  }
}

styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})