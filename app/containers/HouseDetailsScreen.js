import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import DetailComponent from '../components/DetailComponent';


class HouseDetails extends Component {

  render() {
    if (this.props.house) {
      return (
        <View style={styles.container}>
          <DetailComponent
            title={this.props.house.name}
            values={this.props.house}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

function mapToStateProps(state) {
  return {
    house: state.house
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    flex: 0,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default connect(mapToStateProps, null)(HouseDetails);
