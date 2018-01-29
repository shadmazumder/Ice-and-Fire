import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DetailComponent from '../components/DetailComponent';
import { getCharacterList, resetSwornMembers } from '../actions';

import CharacterList from './CharacterList';

class HouseDetails extends Component {

  componentWillUnmount() {
    this.props.resetSwornMembers();
  }

  render() {
      this.props.getCharacterList(this.props.book.characters)
    return (
      <View style={styles.container}>
        <CharacterList
          navScreen = 'BookCharacter'
          navigation={this.props.navigation}
          headline = {"Characters"}
        />
      </View>
    );
  }
}

function mapToStateProps(state) {
  return {
    book: state.book
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCharacterList: getCharacterList,
    resetSwornMembers: resetSwornMembers,
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
