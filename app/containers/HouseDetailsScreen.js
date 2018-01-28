import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DetailComponent from '../components/DetailComponent';
import { getCharacterList, getCharacter } from '../actions';

import CharacterList from './CharacterList';

class HouseDetails extends Component {

  processHouseInfo() {
    let charUrlList = this.props.house.swornMembers;
    let houseInfo = this.props.house;
    this.props.getCurrentLord(this.props.house.currentLord);

    if (charUrlList.length > 0) {
      this.props.getCharacterList(charUrlList);
    }
    // Removing unnecessary keys from dict
    // delete houseInfo.swornMembers;
    delete houseInfo.overLord;
    delete houseInfo.ancestralWeapons;
    delete houseInfo.cadetBranches;
    delete houseInfo.diedOut;

    return houseInfo
  }
  render() {
    let houseInfo = this.processHouseInfo();
    houseInfo.currentLord = this.props.character;
    return (
      <View style={styles.container}>
        <DetailComponent
          title={this.props.house.name}
          values={houseInfo}
        />
        <CharacterList />
      </View>
    );
  }
}

function mapToStateProps(state) {
  return {
    house: state.house,
    character: state.character
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCharacterList: getCharacterList,
    getCurrentLord: getCharacter,
  }, dispatch);
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

export default connect(mapToStateProps, mapDispatchToProps)(HouseDetails);
