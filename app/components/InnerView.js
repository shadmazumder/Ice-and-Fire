import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {create} from 'apisauce';

export default class InnerView extends Component {
  render () {
    return (
      <View>
        <Text style={styles.titleLabel}>
          this.props.title
        </Text>
        <Text style={styles.detailsLabel}>
          this.props.description
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  titleLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailsLabel: {
    fontSize: 16,
  },
});
