import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DetailComponent from '../components/DetailComponent';
import { getCharacterList, getCurrentLord, resetCurrentLord, resetSwornMembers } from '../actions';

import CharacterList from './CharacterList';

class HouseDetails extends Component {

  componentWillUnmount() {
    this.props.resetCurrentLord();
    this.props.resetSwornMembers();
  }

  _deleteUnnecessaryKeys(houseInfo) {
    // Removing unnecessary keys from dict
    delete houseInfo.overlord;
    delete houseInfo.ancestralWeapons;
    delete houseInfo.cadetBranches;
    delete houseInfo.diedOut;
    delete houseInfo.founder;
    delete houseInfo.founded;
    delete houseInfo.heir;
    delete houseInfo.seats;
    return houseInfo
  }

  showCharList() {
    if (this.props.house.swornMembers.length > 0) {
      return (
        <CharacterList
          navScreen = 'HouseCharacter'
          navigation={this.props.navigation}
          headline = {'Sworn Members'}
        />
      )
    }
  }

  processHouseInfo() {
    let charUrlList = this.props.house.swornMembers;
    let houseInfo = this.props.house;
    this.props.getCurrentLord(this.props.house.currentLord);
    this.props.getCharacterList(charUrlList);
    houseInfo = this._deleteUnnecessaryKeys(houseInfo)
    return houseInfo
  }
  render() {
    let houseInfo = this.processHouseInfo();
    houseInfo.currentLord = this.props.current_lord;
    return (
      <View style={styles.container}>
        <DetailComponent
          title={this.props.house.name}
          values={houseInfo}
        />
        {this.showCharList()}
      </View>
    );
  }
}

function mapToStateProps(state) {
  return {
    house: state.house,
    current_lord: state.current_lord
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCharacterList: getCharacterList,
    getCurrentLord: getCurrentLord,
    resetCurrentLord: resetCurrentLord,
    resetSwornMembers: resetSwornMembers,
  }, dispatch);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0,
    fontWeight: 'bold',
  },
});

export default connect(mapToStateProps, mapDispatchToProps)(HouseDetails);
