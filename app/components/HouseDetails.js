import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import InerView from '../components/InnerView';
export default class HouseDetails extends Component {
  render () {
    return (
      <View style={styles.container}>

        <InerView
          style={styles.innerView}
          title={'name'}
          description={'Please add description'}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    margin: 16,
  },
  innerView: {
    flex: 0,
    width: '100%',
    marginTop: 5,
    backgroundColor: 'powderblue',
    flexDirection: 'row',
    //     alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
});
